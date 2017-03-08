import SuperStore from './flux/SuperStore.js'

var ws = new WebSocket("ws://0.0.0.0:8080/ws")

ws.onmessage = (msg) => {
  const data = JSON.parse(msg.data)
  // parse the msg -> just in case
  SuperStore.dispacher.dispatch(data)

}

ws.onopen = (event) => {
  ws.send("test")
}
