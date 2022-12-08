import aioipfs
import asyncio
from pathlib import Path
import json
import os

async def get_image(filename: str, ipfs_hash: str):
	#client = aioipfs.AsyncIPFS()
	await client.get(ipfs_hash, dstdir='D:/Files/Work/Python/TRON/tmp/', archive=False)
	#await client.close()
	p = Path('tmp/' + ipfs_hash)
	os.replace(p, 'tmp/' + filename + '.jpg')

with open('mayc_links.json') as json_file:
    mayc_links = json.load(json_file)

ioloop = asyncio.get_event_loop()
tasks = []
for item in list(mayc_links.items())[-5:]:
	start_index = item[1][::-1].find('/')
	ipfs_hash = item[1][-start_index:]
	tasks.append(ioloop.create_task(get_image(item[0], ipfs_hash)))
	
client = aioipfs.AsyncIPFS()
ioloop.run_until_complete(asyncio.wait(tasks))
ioloop.close()
client.close()
