import SuperStore from './flux/SuperStore.js'

var ws = new WebSocket("ws://0.0.0.0:8080/ws")

ws.onmessage = (msg) => {
  // parse the msg -> just in case
  msg = JSON.parse(msg)
  // select the right action to call, actually this look like a inverse reducer
  switch (msg.type) {
    case "USER_NEARBY":
      SuperStore.dispacher.dispatch(msg)
      break;
    default:

  }
  console.log(msg)
}

ws.onopen = (event) => {
  ws.send("test")
}
