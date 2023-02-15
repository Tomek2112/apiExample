const apiUrl = 'http://localhost:3000/excursions';

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    loadExcursions();
}
function loadExcursions() {
    fetch(apiUrl)
        .then(resp => {
            if(resp.ok) { return resp.json(); }
            return Promise.reject(resp);
        })
        .then(data => {
             console.log(data);
        })
        .catch(err => console.error(err));
}
function insertExcursions(excursionsArr) {
    const ulEl = document.querySelector('.excursions');
    excursionsArr.forEach( item => {
        const liEl = document.createElement('li');
        liEl.dataset.id = item.id;
        liEl.classList.add('excursions__list');
        liEl.innerText = `${item.name}: ${item.price}PLN`;

        ulEl.appendChild(liEl);
    })
}

 

 
 
 






