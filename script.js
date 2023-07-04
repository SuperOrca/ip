const search = document.getElementById("search")
const ip = document.getElementsByClassName("ip")[0]
const network = document.getElementById("network")
const version = document.getElementById("version")
const loc = document.getElementById("location")
const country = document.getElementById("country")
const postal = document.getElementById("postal")
const latitude = document.getElementById("latitude")
const longitude = document.getElementById("longitude")
const timezone = document.getElementById("timezone")
const asn = document.getElementById("asn")
const org = document.getElementById("org")


var data = {}

async function getData(ip) {
  try {
    const url = (ip === "") ? "https://ipapi.co/json/" : `https://ipapi.co/${ip}/json/`
    const response = await fetch(url)

    if (response.ok) {
      const json = await response.json();
      return json
    } else {
      throw new Error(`Request failed with status ${response.status}`)
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

async function update() {
  const query = search.value
  search.value = ""
  const data = await getData(query)
  
  ip.innerHTML = data.ip
  network.innerHTML = data.network
  version.innerHTML = data.version
  loc.innerHTML = `${data.city}, ${data.region}`
  country.innerHTML = data.country_name
  postal.innerHTML = data.postal
  latitude.innerHTML = data.latitude
  longitude.innerHTML = data.longitude
  timezone.innerHTML = data.timezone
  asn.innerHTML = data.asn
  org.innerHTML = data.org
}

function query(event) {
  if (event.keyCode === 13) {
    update()
  }
}

update()