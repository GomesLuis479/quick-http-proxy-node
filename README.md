# Quick NodeJs Http Proxy

A simple node script to quickly create a http proxy server.

## Setup

- set `LISTEN_PORT` to the port on the current machine to listen for requests.
- set `TARGET_IP` and `TATGET_PORT` to define the destination for the requests coming in on `LISTEN_PORT`.

## Run

```
$ npm install

$ node proxy.js 
```