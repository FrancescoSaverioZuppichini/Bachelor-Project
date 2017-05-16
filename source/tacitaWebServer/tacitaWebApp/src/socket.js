import {SuperStore} from 'flue-vue'


var ws = new WebSocket(`ws:/${window.location.origin.split('/')[2].split(':')[0]}:8081/ws`)

ws.onmessage = (msg) => {
  const data = JSON.parse(msg.data)
  // parse the msg -> just in case
  SuperStore.dispatcher.dispatch(data)

}

ws.onopen = (event) => {
  console.log("WS connect")
}


export default ws
