// Fill this in

// An array of restaurant data
let restaurantData = [
    {
        "id": 0,
        "name": "Scoma's Restaurant",
        "phone": "(415) 771-4383",
        "address": "1965 Al Scoma Way San Francisco, United States",
        "photo": "/images/scoma.png"
    },
    {
        "id": 1,
        "name": "Abacá",
        "phone": "(415) 486-0788",
        "address": "2700 Jones St San Francisco, United States",
        "photo": "/images/abacá.png"
    },
    {
        "id": 2,
        "name": "Dalida",
        "phone": "(415)  237-1999",
        "address": "1101 Montgomery St San Francisco, United States",
        "photo": "/images/dalida.png"
    },
    {
        "id": 3,
        "name": "Golden Boy Pizza",
        "phone": "(415) 982-1111",
        "address": "542 Green St (at Grant) San Francisco, United States",
        "photo": "/images/golden_boy.png"
    },
    {
        "id": 4,
        "name": "Maison Nico",
        "phone": "(415) 359-1000",
        "address": "710 Montgomery St (Washinton St) San Francisco, United States",
        "photo": "/images/maison_nico.png"
    },
    {
        "id": 5,
        "name": "Hog Island Oyster Co",
        "phone": "(415) 391-7117",
        "address": "Ferry Building, #11 San Francisco, United States",
        "photo": "/images/hog_island.png"
    },
    {
        "id": 6,
        "name": "City View Resturant",
        "phone": "(415) 398-2838",
        "address": "33 Walter U Lum P1 San Francisco, United States",
        "photo": "/images/city_view.png"
    },
    {
        "id": 7,
        "name": "Sam Wo Resturant",
        "phone": "(415) 989-8898",
        "address": "713 Clay St San Francisco, United States",
        "photo": "/images/samwo.png"
    },
    {
        "id": 8,
        "name": "Mister Jiu's",
        "phone": "(415) 857-9688",
        "address": "28 Waverly P1 San Francisco, United States",
        "photo": "/images/misterjiu.png"
    }
];

let lastId = restaurantData.length;

//Gets the next id
const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    const getRestaurantById = restaurantData.find(restaurant => restaurant.id === id);
    if (!getRestaurantById){
        throw Error(`Restaurant ${id} is not found!`);
    }
    return getRestaurantById;
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    const createNewRestaurant = {
        id: getNextId(),
        ...newRestaurant
    };
    restaurantData.push(createNewRestaurant);
    return newRestaurant;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    const restaurantToDelete = restaurantData.find(restaurant => restaurant.id === id);
    if (!restaurantToDelete){
        throw Error(`Restaurant ${id} is not found!`)
    }
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
    return restaurantToDelete;
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };