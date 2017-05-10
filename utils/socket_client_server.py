#!/usr/bin/python
from time import sleep

from websocket import create_connection
import json
HOST = "ws://0.0.0.0:8003/ws"

ws = create_connection(HOST)

try:
  while True:
    input("Trigger nearby user")
    ws.send(json.dumps({"type": "USER_NEARBY", "payload": {"userId": 1, "displayId":1} }))
    print(ws.recv())


except KeyboardInterrupt:
  print("")
  print("-------------")
  print("Shutting down WS")
