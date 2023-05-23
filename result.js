const details = document.querySelector("#details")
var reqcount = 0

navigator.geolocation.watchPosition(successCallback, errorCallback, options)

function successCallback(position) {
  const { accuracy, latitude, longitude, altitude, heading, speed } =
    position.coords
  // initial value for testing
  const LatitudeTest = -3.31587293
  const LongitudeTest = 29.3947022
  const jenda = { LatitudeTest, LongitudeTest }
  // Show a map centered at latitude / longitude.
  reqcount++
  // if you want to precise after float number you do like this e.g: longititude.toFixed(1)
  details.innerHTML = "Accuracy: " + accuracy + "<br>"
  details.innerHTML +=
    "Latitude: " + latitude + " | Longitude: " + longitude + "<br>"
  details.innerHTML += "Altitude: " + altitude + "<br>"
  details.innerHTML += "Heading: " + heading + "<br>"
  details.innerHTML += "Speed: " + speed + "<br>"
  details.innerHTML += "reqcount: " + reqcount + "<br>"
  if (
    latitude.toFixed(1) == LatitudeTest.toFixed(1) &&
    longitude.toFixed(1) == LongitudeTest.toFixed(1)
  )
    details.innerHTML += "Arrive à la destination" + "<br>"
  else details.innerHTML += "Pas encore arrive à la destination" + "<br>"
}
function errorCallback(error) {}
var options = {
  // enableHighAccuracy: false, ça relentit l'application
  // timeout: 5000,
  // maximumAge: 0
}
