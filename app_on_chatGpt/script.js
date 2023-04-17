// const form = document.querySelector('form');
// const searchButton = document.querySelector('#search-button');
// const resultsContainer = document.querySelector('#results-container');

// form.addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	const priceRange = document.querySelector('#price-range').value;
// 	// const url = `https://api.example.com/search?price=${priceRange}`;
// 	const url = `hhttps://api.bigdatacloud.net/data/reverse-geocode-client?latitude=34.0151&longitude=71.5249&localityLanguage=en`;

// 	fetch(url)
// 		.then(response => response.json())
// 		.then(data => {
// 			resultsContainer.innerHTML = 'This is the data';

// 			data.forEach(item => {
// 				const resultItem = document.createElement('div');
// 				resultItem.classList.add('result-item');
// 				resultItem.innerHTML = `
// 					<h3>${item.name}</h3>
// 					<p>Price: ${item.latitude}</p>
// 					<p>Brand: ${item.longitude}</p>
// 					<p>Model: ${item.continent}</p>
// 					<p>Description: ${item.city}</p>
//                     `;
//                     resultsContainer.appendChild(resultItem);
//                 });
//             })
//             .catch(error => console.log(error));
//         });
        
//         // <p>Description: ${item.description}</p>
//                 // <p>Price: ${item.price}</p>
//                 // <p>Brand: ${item.brand}</p>
//                 // <p>Model: ${item.model}</p>