# NFTSmash
### Pre-requisite:
- [Jupyter Notebook](https://jupyter.org/install)
- API key from [TronGrid](https://www.trongrid.io/) for TRON network
- API key from [infura](https://infura.io/dashboard) for ethereum network. 


### Running the repository
- ##### Open Terminal and run the following commands:
    - Clone the repository: 
        ```
        git clone https://github.com/yashmadhwal/NFTmash.git
        ```

    - After cloning, go the folder:
        ```
        cd NFTmash
        ```
    
    - Project Setup:
        ```
        npm install
        ```

    - Compile and Hot-Reload for Development
        ```
        npm run dev
        ```
    

## For creating Data
- ##### Open separate Terminal and run the following commands:
    - From the root folder go to TRON_DataCollection:
        ```
        cd TRON_DataCollection
        ```

    - Go the the Keys folder and create a file `secrets.json`:
        ```
        cd Keys
        touch secrets.json
        ```
    - Open `secrets.json` by running `open secrets.json` or opening by any code editor and paste the following and save it:
        ```
        {
            "api_keys": {
                "tron_api" : "#your_TRON_api_key",
                "infura_api": "#your_Infura_api_key"
            }
        }
        ```
        Replace the api keys with your keys.
- ##### Running the jupyter notebook:
    - Navigate back to the main folder:
        ```
        cd ..
        ```
    - Open jupyter notebook:
        ```
        jupyter notebook
        ```
    





