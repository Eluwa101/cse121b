/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Eluwa Monday';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/eluwa.JPG';

/* Step 3 - Element Variables */
const nameElement = document.getElementById(`name`);
const foodElement = document.getElementById(`food`);
const yearElement = document.querySelector(`#year`);
const imageElement = document.querySelector(`#profileImage`);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt',`profile image of ${fullName}`);

/* Step 5 - Array */
let food = ['eba', 'iresi','moimoi','ofe ukazi','ekuru','obe egusi','ewa','kenkey','wankye','spag','bitter yam','salad'];
foodElement.innerText = food.join(', ');
let favFood = 'ogbonor';
food.push(favFood);
foodElement.innerHTML += `br ${food}`;
food.shift();
foodElement.innerHTML += `br ${food}`;
food.pop();
foodElement.innerHTML += `br ${food}`;
