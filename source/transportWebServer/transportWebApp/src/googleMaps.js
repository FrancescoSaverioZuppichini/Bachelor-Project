import axios from 'axios'


export default {
  getDirectionFrom(origin, destination, travelMode) {
    travelMode = travelMode || 'WALKING'
destination:'46.01117,8.956654'
    const directionsService = new window.google.maps.DirectionsService();
    return new Promise((resolve, reject) => {
      directionsService.route({ origin, destination, travelMode }, (res, status) => {
        if (res.status == 'OK') {
          resolve(res)
        } else { reject(res) }
      })
    })
  }
  // return axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${from}&mode=walking&destination=${to}`)
}
