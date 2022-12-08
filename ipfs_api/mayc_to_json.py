import tronpy
from tronpy import Tron, keys
from tronpy.providers import HTTPProvider
import urllib.request
import ast
import json
import time
from tqdm import tqdm
import os

with open('secrets.json') as f:
    tron_api_key = json.load(f)['api_keys']['tron_api']

client_main_http = Tron(HTTPProvider(api_key=tron_api_key))
MAYCTron = client_main_http.get_contract('TJjKSaj9UD9tQ27zvN6hpXiCwN2VsdNW7P')
max_nft_limit_mayc = MAYCTron.functions.MINTING_LIMIT.call()

def creatDict(token_ID):
    url = MAYCTron.functions.tokenURI(token_ID)
    
    user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'
    headers={'User-Agent': user_agent,} 

    request = urllib.request.Request(url, None, headers)
    response = urllib.request.urlopen(request)
    data = response.read()
    
    dict_str = data.decode("UTF-8")
    if len(dict_str) > 50:
        my_data = ast.literal_eval(dict_str)
    else:
        my_data = dict()
    return my_data
 
mayc_dict = {}

# Set the desired indices below, e.g. now it's first 401
for ape_id in tqdm(range(1, max_nft_limit_mayc + 1)[:402]):
    response = creatDict(ape_id)
    time.sleep(0.5)
    try:
        url_string = response['image']
        mayc_dict[ape_id] = url_string  
    except:
        print(response['image'], "\nApe id:", ape_id)

if not os.path.isfile('mayc_links.json'):
  new_data = mayc_dict
else:
  with open('mayc_links.json') as json_file:
    old_data = json.load(json_file)
  new_data = {int(k): v for d in [old_data, mayc_dict] for k, v in d.items()}

with open('mayc_links.json', 'w') as outfile:
    json.dump(new_data, outfile, sort_keys=True, indent=4)
