function btnAction(){
    let txt = document.getElementById("userInput").value
    let countryName = document.getElementById("countryName")
    let officialName = document.getElementById("nativeName")
    let countryFlag = document.getElementById("flag")
    let capital = document.getElementById("capital")
    let language = document.getElementById("lang")
    let region = document.getElementById("region")
    let subregion = document.getElementById("subregion")
    let independance = document.getElementById("independance")
    let currencies = document.getElementById("currencies")
    let population = document.getElementById("population")
    let timezones = document.getElementById("timezones")
    let latlng = document.getElementById("latlng")
    let map = document.getElementById("map")

    // API
    fetch("https://restcountries.com/v3.1/name/"+txt).then(res => res.json()).then(data => {
        console.log(data); // for debugging
        // country name headings
        countryName.innerText = data[0].name.common

        if(data[0].name.official){
            officialName.innerText = data[0].name.official
        }
        else{officialName.innerText = "Official name not available"}
        
        // flag
        countryFlag.innerHTML = `<img src="${data[0].flags.png}" alt="Country Flag" width="180"></img>`

        // region
        region.innerText = data[0].region

        // subregion
        if(data[0].subregion){
            subregion.innerText = data[0].subregion
        }
        else{ subregion.innerText = "not available"}

        // capital
        capital.innerText = data[0].capital

        // language
        let languageString = Object.values(data[0].languages).join(", ");
        language.innerText = languageString

        // independance
        independance.innerText = (""+ (data[0].independent == "True") ? "Yes":"No")

        // Get the currency object
        // Get the first currency key
        // Get the currency object value using the key
            // "currencies": {
            //                 "LKR": {
            //                          "symbol": "Rs  රු",
            //                          "name": "Sri Lankan rupee"
            //                        }
            //               },
        
        // currencies
        let currency =  data[0].currencies[Object.keys(data[0].currencies)]
        currencies.innerText = currency.name + " ( " + currency.symbol + " )"

        // population
        population.innerText = data[0].population

        // timezones
        timezones.innerText = data[0].timezones

        // geo location
        let lat = data[0].capitalInfo.latlng[0]
        let lng = data[0].capitalInfo.latlng[1]
        latlng.innerText = `Geo Coordinates (Latitude ${lat}° N, Longitude ${lng}° E)`
        // map preview
        map.innerHTML = `<iframe src="https://www.google.com/maps?q=${lat},${lng}&hl=en&z=5&output=embed" frameborder="0"></iframe>`
    })
}



