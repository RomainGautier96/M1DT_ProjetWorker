const URL = 'https://restcountries.eu/rest/v2/all';

const searchAllCountries = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    postMessage({countries: data})
};

onmessage = () => {
    searchAllCountries()
};