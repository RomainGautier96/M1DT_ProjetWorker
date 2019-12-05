const displayContinents = () => {

    let listAllContinents = document.getElementById("test");


    const afrique = "<li class='list-group-item'> <img src='assets/img/afrique.png'> <div id='Afrique'></div> </li>";
    listAllContinents.innerHTML = afrique;

    const europe = "<li class='list-group-item'> <img src='assets/img/europe.png'> <div id='Europe'></div></li>";
    listAllContinents.innerHTML += europe;
    displayCountriesByContinent("Europe");

    const amerique = "<li class='list-group-item'> <img src='assets/img/amerique.png'> <div id='Amerique'></div></li>";
    listAllContinents.innerHTML += amerique;

    const asie = "<li class='list-group-item'> <img src='assets/img/asie.jpg'> <div id='Asie'></div></li>";
    listAllContinents.innerHTML += asie;

    const oceanie = "<li class='list-group-item'> <img src='assets/img/oceanie.png'> <div id='Oceanie'></div></li>";
    listAllContinents.innerHTML += oceanie;

};




let countries = [];
let myWorker;

if(window.Worker){
    myWorker = new Worker('js/worker.js');
    myWorker.onmessage = (event) => {
        searchCountries(event);
    }
}

const searchCountries = (event) => {
    if(myWorker){
        myWorker.postMessage({countries: countries})
    }

    countries = event.data.countries;
    return countries;
};


const displayCountriesByContinent = (continent) => {
    let countries = searchCountries();
    console.log("bbbbbb");
    console.log( "test" + countries);
    const allCountries = countries.map((items) => {
            if (items.region === continent){
                return "<li class='list-group-item'>"+"Pays: "+items.name+"</li>";
            }
    });

    let listAllCountries = document.getElementById(continent);
    listAllCountries.innerHTML = allCountries.join('');


};

displayContinents();
