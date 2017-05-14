import {SuperStore} from 'flue-vue'

var ws = new WebSocket("ws:/192.168.1.22:8081/ws")

ws.onmessage = (msg) => {
  const data = JSON.parse(msg.data)
  // parse the msg -> just in case
  SuperStore.dispatcher.dispatch(data)

}

ws.onopen = (event) => {
  console.log("WS connect")
}


export default ws
