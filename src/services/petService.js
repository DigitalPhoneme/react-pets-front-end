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

const create = async (formData) =>{
    try{
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });
        return res.json();

    } catch (err){
    console.log(err);
 }    
}


const update = async (formData, petId) => {
    try {
      const res = await fetch(`${BASE_URL}/${petId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };

  // src/services/petService.js

const deletePet = async (petId) => {
    try {
      const res = await fetch(`${BASE_URL}/${petId}`, {
        method: 'DELETE',
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };
  

export {
    index,
    create,
    update,
    deletePet,
  
};

