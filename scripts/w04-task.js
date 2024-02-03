/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Eluwa Monday",
    photo: "images/eluwa.JPG",
    favoriteFoods: ["eba", "rice", "efo", "salad"],
    hobbies: ["reading", "cooking", "coding","learning"],
    placesLived: [],

};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Abia",
        length: "9 years"
    },
    {
        place: "Osogbo",
        length: "15 years"
    },
    {
        place: "Abuja",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach (
    food =>{
        let li = document.createElement("li");
        li.textContent = food;
        document.querySelector("#favorite-foods").appendChild(li);
    }
)

/* Hobbies List */
myProfile.hobbies.forEach (
    hobby =>{
        let li = document.createElement("li");
        li.textContent = hobby;
        document.querySelector("#hobbies").appendChild(li);
    }
)

/* Places Lived DataList */

myProfile.placesLived.forEach(
    places => {
        let dtElement = document.createElement("dt");
        dtElement.textContent = places.place;
        let ddElement = document.createElement("dd");
        ddElement.textContent = places.length;

        let placesList = document.querySelector("#places-lived")
        placesList.appendChild(dtElement);
        placesList.appendChild(ddElement);
    }
)
