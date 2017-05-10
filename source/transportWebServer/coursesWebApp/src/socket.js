import {SuperStore} from 'flue-vue'

var ws = new WebSocket("ws://0.0.0.0:8003/ws")

ws.onmessage = (msg) => {
  const data = JSON.parse(msg.data)
  // parse the msg -> just in case
  SuperStore.dispatcher.dispatch(data)

}

ws.onopen = (event) => {
  console.log("WS connect")
}
