// let postsRow = document.querySelector(".posts-row");
// let postSearchInput = document.querySelector(".post-search-input");
// let postsCount = document.querySelector(".posts-count");
// let pagination = document.querySelector(".pagination");

// let postSearch = "";
// let activePage = 1;

// function getPostCard({ title, body, id }) {
//   return `
//     <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
//       <div class="card">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${title}</h5>
//           <p class="card-text">${body}</p>
//           <a href="comments.html" class="btn btn-primary">Go comments ${id}</a>
//         </div>
//       </div>
//     </div>
//   `;
// }

// async function getPosts() {
//   postsRow.innerHTML = "...Loading";
//   try {
//     let posts = await getData(
//       `https://ap-countries-api.vercel.app/all?q=${postSearch}`
//     );

//     let postsWithPagination = await getData(
//       `https://ap-countries-api.vercel.app/all?q=${postSearch}&_page=${activePage}&_limit=20`
//     );

//     let pages = Math.ceil(posts.length / 10);

//     pagination.innerHTML = `<li class="page-item disabled">
//       <button class="page-link">Previous</button>
//     </li>`;

//     for (let i = 1; i <= pages; i++) {
//       pagination.innerHTML += `
//         <li class="page-item ${
//           i === activePage ? "active" : ""
//         }"><button onClick="getPage(${i})" class="page-link">${i}</button></li>
//       `;
//     }

//     pagination.innerHTML += `<li class="page-item">
//       <button class="page-link">Next</button>
//     </li>`;

//     postsCount.textContent = posts.length;
//     postsRow.innerHTML = "";

//     postsWithPagination.map((post) => {
//       postsRow.innerHTML += getPostCard(post);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// getPosts();

// postSearchInput.addEventListener("keyup", function () {
//   activePage = 1;
//   postSearch = this.value;
//   getPosts();
// });

// function getPage(page) {
//   activePage = page;
//   getPosts();
// }

let cardRow = document.querySelector( ".card__row" );

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


let choosenRegion = document.querySelector( ".all-region" );


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







const searchInput = document.querySelector( ".searchInput" );
const searchResult = document.querySelector( ".search_result" );



searchInput.addEventListener( "click", function () {
  console.log( "working" );
} );



