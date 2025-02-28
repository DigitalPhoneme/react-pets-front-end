// src/services/petService.js

const BASE_URL = 'http://localhost:3000/pets';
console.log(BASE_URL);

const index = async () => {
    try{
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (err) {
        console.log(err);
    }
  
};


console.log(await index());

export {
    index,
};

