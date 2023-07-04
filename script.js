const search = document.getElementById("search")
const ip = document.getElementsByClassName("ip")[0]
const country = document.getElementById("country")
const countryCode = document.getElementById("countryCode")
const regionName = document.getElementById("regionName")
const region = document.getElementById("region")
const city = document.getElementById("city")
const zip = document.getElementById("zip")
const lat = document.getElementById("lat")
const lon = document.getElementById("lon")
const timezone = document.getElementById("timezone")
const isp = document.getElementById("isp")
const org = document.getElementById("org")
const as = document.getElementById("as")


var data = {}

async function getData(ip) {
  try {
    const url = `http://ip-api.com/json/${ip}`
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
  
  ip.innerHTML = data.query
  country.innerHTML = data.country
  countryCode.innerHTML = data.countryCode
  regionName.innerHTML = data.regionName
  region.innerHTML = data.region
  city.innerHTML = data.city
  zip.innerHTML = data.zip
  lat.innerHTML = data.lat
  lon.innerHTML = data.lon
  timezone.innerHTML = data.timezone
  isp.innerHTML = data.isp
  org.innerHTML = data.org
  as.innerHTML = data.as
}

function query(event) {
  if (event.keyCode === 13) {
    update()
  }
}

update()