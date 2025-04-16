const endpoint ='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data)) //adds the JSON data to cities array

    function findMatches(wordToMatch, cities) {
        return cities.filter(place => {
            // does city/state match searched
            
            const regex = new RegExp(wordToMatch, 'gi') // globally and insensitively
            
            return place.city.match(regex) || place.state.match(regex)
        })
    }

    function numberWithCommas(x) {  //formats numbers with commas
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

    function displayMatches() {
        const matchArray = findMatches(this.value, cities)
        const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'gi')
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`) //highlights what user searched for
            const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
            return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>
            `
        }).join('') // creates 1 big strring instead of array with multiple items
        suggestions.innerHTML = html
    }

    const searchInput = document.querySelector('.search')
    const suggestions = document.querySelector('.suggestions')

    searchInput.addEventListener('change', displayMatches)
    searchInput.addEventListener('keyup', displayMatches) //filters list as your type
