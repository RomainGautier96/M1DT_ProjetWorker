let countries = []
let myWorker

if(window.Worker){
    myWorker = new Worker('js/worker.js')
    myWorker.onmessage = (event) => {
        searchCountries(event);
    }
}

const searchCountries = (event) => {
    if(myWorker){
        myWorker.postMessage({countries: countries})
    }

    countries = event.data.countries
    const allCountries = countries.map((items) => {
        return "<li class='list-group-item'>"+"Pays: "+items.name+ " , "+ "<img src='"+items.flag+"' width='150px' height='100px'></li>";
    })

    let listAllCountries = document.getElementById("test")
    listAllCountries.innerHTML = allCountries.join('')
    console.log(countries)
}

searchCountries();


