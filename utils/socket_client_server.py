#!/usr/bin/python

from websocket import create_connection
import json
HOST = "ws://0.0.0.0:8080/ws"

ws = create_connection(HOST)

try:
  while True:
    print(ws.recv())
    input("Trigger nearby user")
    ws.send(json.dumps({"type": "USER_NEARBY", "payload": {"userId": 1}}))

except KeyboardInterrupt:
  print("")
  print("-------------")
  print("Shutting down WS")
