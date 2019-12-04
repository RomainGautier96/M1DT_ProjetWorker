let countries = []
let myWorker

if(window.Worker){
    myWorker = new Worker('js/worker.js')
    myWorker.onmessage = (event) => {
        countries = event.data.countries[0].name
        document.getElementById("test").innerHTML = event.data.countries[0].name
        console.log(countries)
    }
}

const searchAllCountries = () => {
    if(myWorker){
        myWorker.postMessage({countries: countries})
    }
};
searchAllCountries();

