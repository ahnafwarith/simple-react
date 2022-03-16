const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    /*   console.log(countries); */
    const allCountriesHTML = countries.map(country => getCountryHTML(country))
    /*     console.log(allCountriesHTML) */
    /* Dynamically displaying the data from the API */
    document.getElementById('container').innerHTML = allCountriesHTML.join(" ")
}

const getCountryHTML = country => {
    const { name, flags } = country
    return `
        <div>
            <h2>${name.common}</h2>
            <img src="${flags.png}">
        </div>
    `
}

loadCountries();