
const country = function() {
    const mwSearch = async function(query) {
        if (!query) return;

        let url = 'https://restcountries.eu/rest/v2/name/' + query;

        await fetch(url).then(function(response) {
            return response.json();
        }).then(function(result) {
            
           showCountry(result);
        });
    };

    let query = document.querySelector('.input');
    let button = document.querySelector('.button');
    
        button.addEventListener('click', function() {
            mwSearch(query.value || '');
        })
   
    function showCountry(data){
        let countryInfo = document.querySelector('.country_info'),
            name = document.querySelector('.name');
            capital = document.querySelector('.capital'),
            region = document.querySelector('.region'),
            borders = document.querySelector('.borders'),
            population = document.querySelector('.population'),
            nativeName = document.querySelector('.native_name'),
            currencies = document.querySelector('.currencies'),
            languages = document.querySelector('.languages'),
            img = document.querySelector('.img');

            name.innerHTML = `name : ${data[0].name}`;
            capital.innerHTML = `capital : ${data[0].capital}`;
            region.innerHTML = `region : ${data[0].region}`;      
            borders.innerHTML = `borders : ${data[0].borders}`;    
            population.innerHTML = `population : ${data[0].population}`;       
            nativeName.innerHTML = `nativeName : ${data[0].nativeName}`;       
            currencies.innerHTML = `currencies : ${data[0].currencies[0].code}`;       
            languages.innerHTML = `languages : ${data[0].languages[0].nativeName}`;    
            img.src = data[0].flag;
      
    }
}();

