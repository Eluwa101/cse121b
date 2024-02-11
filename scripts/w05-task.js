/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    let articleElement = document.createElement('article');
    let h3Element = document.createElement('h3');
    let imgElement = document.createElement('img');

    h3Element.textContent = temple.templeName;
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;

    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
    displayTemples(templeList);

    console.log(templeList);
  } catch (error) {
    console.error('Error fetching temple data:', error);
  }
};


/* reset Function */
const reset =() =>
{
    templesElement.innerHTML = '';
}

/* filterTemples Function */
const filterTemples = (temples) =>
{
    reset();

    const filter = document.getElementById('filtered').value;
    switch (filter)
    {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.tirm().toLowerCase().includes('utah')));
            break;
        case 'older':
            const olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;            
    }
}

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () =>{filterTemples(templeList)});

getTemples();
