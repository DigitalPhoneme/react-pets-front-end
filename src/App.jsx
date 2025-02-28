import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as petService from './services/petService'
import PetList from './components/PetList/PetList'
import PetDetail from './components/PetDetail/PetDetail'
import PetForm from './components/PetForm/PetForm'
function App() {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

   // Create a new useEffect
   useEffect(() => {
    const fetchPets = async () => {
      try {
        const fetchedPets = await petService.index();
        // Don't forget to pass the error object to the new Error
        if (fetchedPets.err) {
          throw new Error(fetchedPets.err);
        }
        setPets(fetchedPets);
      } catch (err) {
        // Log the error object
        console.log(err);
      }
    };
    fetchPets();
  }, []);

  const handleSelect = (pet) => {
    setSelected(pet);
    // Close the form if it's open when a new pet is selected.
    setIsFormOpen(false);
  };

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect} handleFormView={handleFormView} isFormOpen={isFormOpen}/>
      {isFormOpen ? (
        <PetForm />
      ) : (
        <PetDetail selected={selected}/>
      )}
      
    </>
  );
};

export default App
