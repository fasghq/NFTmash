# TronNFTDataCollection

## **Concept**
Accessing endpoint for API to gather information about NFTs on TRON network.

### Pre-requisite:
- [Jupyter Notebook](https://jupyter.org/install)
- API key from [TronGrid](https://www.trongrid.io/) for TRON network
- API key from [infura](https://infura.io/dashboard) for ethereum network. 
 *__Note__: Even though we are working for Tron Network, we need Ethereum just to gather trait attributes, because traits od NFTs on both the network are same, and in some cases URI for Tron network is throwing HTTP error.*

### Running the repository
- ##### Open Terminal and run the following commands:
    - Clone the repository: 
        ```
        git clone https://github.com/yashmadhwal/TronNFTDataCollection.git
        ```

        After cloning, go the folder:
        ```
        cd TronNFTDataCollection
        ```
    
    - Go the the Keys folder and create a file `secrets.json`:
        ```
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
- ##### Running the repository:
    - Navigate back to the main folder:
        ```
        cd ..
        ```
    - Open jupyter notebook:
        ```
        jupyter notebook
        ```
    


