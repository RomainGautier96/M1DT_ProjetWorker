let countries = []
let myWorker
if(window.Worker){
    myWorker = new Worker('js/worker.js');
    myWorker.onmessage = (event) => {
        searchCountries(event)
    }
}

const searchCountries = (event) => {
    if(myWorker){
        myWorker.postMessage({countries: countries})
    }
    countries = event.data.countries;
    let listEurope = document.getElementById("Europe")
    let listAsia = document.getElementById("Asie")
    let listAmerica = document.getElementById("Amerique")
    let listAfrica = document.getElementById("Afrique")
    let listOceania = document.getElementById("Oceanie")
    const EuropeCountries = countries.map((items) => {
        if (items.region === "Europe") {
            let europe =  "<li class='list-group-item'>"+"<img src='"+items.flag+"' width='50px' height='30px'> "+items.name+ " , "+ "Capitale : "+items.capital+" , " + "Langue :  "+items.languages[0].name+" , "+ "Devise : "+items.currencies[0].name+"</li>";
            return europe
        }
    });
    const AsiaCountries = countries.map((items) => {
        if (items.region === "Asia") {
            let asia =  "<li class='list-group-item'>"+"<img src='"+items.flag+"' width='50px' height='30px'> "+items.name+ " , "+ "Capitale : "+items.capital+" , " + "Langue :  "+items.languages[0].name+" , "+ "Devise : "+items.currencies[0].name+"</li>";
            return asia
        }
    });
    const AmericaCountries = countries.map((items) => {
        if (items.region === "Americas") {
            let america =  "<li class='list-group-item'>"+"<img src='"+items.flag+"' width='50px' height='30px'> "+items.name+ " , "+ "Capitale : "+items.capital+" , " + "Langue :  "+items.languages[0].name+" , "+ "Devise : "+items.currencies[0].name+"</li>";
            return america
        }
    });
    const AfricaCountries = countries.map((items) => {
        if (items.region === "Africa") {
            let africa =  "<li class='list-group-item'>"+"<img src='"+items.flag+"' width='50px' height='30px'> "+items.name+ " , "+ "Capitale : "+items.capital+" , " + "Langue :  "+items.languages[0].name+" , "+ "Devise : "+items.currencies[0].name+"</li>";
            return africa
        }
    });
    const OceaniaCountries = countries.map((items) => {
        if (items.region === "Oceania") {
            let oceania =  "<li class='list-group-item'>"+"<img src='"+items.flag+"' width='50px' height='30px'> "+items.name+ " , "+ "Capitale : "+items.capital+" , " + "Langue :  "+items.languages[0].name+" , "+ "Devise : "+items.currencies[0].name+"</li>";
            return oceania
        }
    });
    listEurope.innerHTML = EuropeCountries.join('')
    listAsia.innerHTML = AsiaCountries.join('')
    listAmerica.innerHTML = AmericaCountries.join('')
    listOceania.innerHTML = OceaniaCountries.join('')
    listAfrica.innerHTML = AfricaCountries.join('')
};
searchCountries()