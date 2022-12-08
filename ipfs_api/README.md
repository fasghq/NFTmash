# Collect TRON NFT images
## Introduction
While downloading TRON NFT images from IPFS 504 gateway timeout error occured. To fix this IPFS daemon was used together with Python IPFS API. The idea is to firstly collect images’ URLs and then run a daemon and make requests to IPFS through it.

## Installation
All routines presented as Python scripts. Below is the list of additional projects to make them work properly:

- [IPFS] - Command-line IPFS client
- [tronpy] - TRON Python Client Library
- [aioipfs] - Python library providing an asynchronous API for IPFS

Install required Python packages:
```sh
cd ipfs_api
pip install -r requirements.txt
```
To init and set up the IPFS client follow the corresponding guide.

## Running
Firstly, you should collect IPFS images' URLs corresponding to those NFT you need. To do this simply run the following:
```sh
python mayc_to_json.py
```
It will create or complete the existing JSON file with corresponding links.
Then run the daemon by following command:
```sh
ipfs daemon
```
And call next piece of code:
```sh
python download_mayc.py
```
It will download the images to setted directory (`/tmp` by default).

## Development
Described approach seems to solve the problem of 504 error, however still has several minor issues:
- On Windows image download acting a bit strange — seems like it tries to download TAR archieve to C:\ after what struggle to remove it. Should be tried on other platforms or fixed somehow.
- On Windows asynchronous run produces constant [warning] “event loop is closed”.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [IPFS]: <https://docs.ipfs.tech/install/command-line/>
   [aioipfs]: <https://github.com/pinnaculum/aioipfs>
   [tronpy]: <https://github.com/andelf/tronpy>
   [warning]: <https://stackoverflow.com/questions/45600579/asyncio-event-loop-is-closed-when-getting-loop>



