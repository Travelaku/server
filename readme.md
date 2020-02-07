# TRAVELAKU #
## BASE URL : localhost:3000 ##

### Route: /api/getcoordinate ###
#### body: address ####

response:
```
{
    "lat": -6.9174639,
    "lng": 107.6191228
}
```
---
<br>

### Route: /api/weatherbit ###
#### body: lat, lng ####

response:
```
{
    "data": [
        {
            "o3": 165.761,
            "so2": 9.74536,
            "no2": 4.55184,
            "aqi": 102,
            "co": 959.635,
            "pm10": 2.88407,
            "pm25": 1.18696
        }
    ],
    "city_name": "Bandung",
    "lon": 107.61,
    "timezone": "Asia/Jakarta",
    "lat": -6.92,
    "country_code": "ID",
    "state_code": "30"
}
```
---
<br>

### Route: /api/airvisual ###
#### body: lat, lng ####

response:
```
{
    "weather": {
        "ts": "2020-02-06T14:00:00.000Z",
        "tp": 21,
        "pr": 1011,
        "hu": 90,
        "ws": 1.29,
        "wd": 317,
        "ic": "10n"
    },
    "pollution": {
        "ts": "2020-02-06T14:00:00.000Z",
        "aqius": 99,
        "mainus": "p2",
        "aqicn": 50,
        "maincn": "p2"
    }
}
```