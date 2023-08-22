let cardRow = document.querySelector( ".card__row" );
let choosenRegion = document.querySelector( ".all-region" );

const searchInput = document.querySelector( ".searchInput" );
const searchResult = document.querySelector( ".search_result" );



function getData( url ) {
  class ErrorResponse extends Error {
    constructor( status, message ) {
      super( message );
      this.status = status;
    }
  }

  return new Promise( ( resolve, reject ) => {
    fetch( url )
      .then( ( res ) => {
        if ( res.ok ) {
          return res.json();
        } else {
          reject( new ErrorResponse( res.status, "Url is error" ) );
        }
      } )
      .then( ( res ) => {
        resolve( res );
      } );
  } );
}

function getCard( {
  name,
  flags,
  capital,
  region,
} ) {
  return `  
  <div class="card-country">
    <div class="car-country">
      <img src="${flags.svg}" alt="">
      <div class="car-content">
        <h1 class="country_name">${name.common}</h1>
        <p>
          <span>Capital:</span> <h3>${capital}</h3>
        </p>
        <p>
          <span>Region:</span> <h3>${region}</h3>
        </p>
      </div>
    </div>
  </div>`;
}




async function getCountries( url ) {
  let countries = await getData( url );
  cardRow.innerHTML = "";
  countries.map( ( country ) => {
    cardRow.innerHTML += getCard( country );
  } )

  pagination();
}

getCountries( "https://restcountries.com/v3.1/all" );

function changeRegion( region ) {
  choosenRegion.textContent = `${region}`;
  if ( region === "All" ) {
    getCountries( "https://restcountries.com/v3.1/all" );
  } else {
    getCountries( `https://restcountries.com/v3.1/region/${region}` );
  }
}










searchInput.addEventListener( "click", function () {
  console.log( "working" );
} );



