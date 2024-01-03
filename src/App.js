import { useEffect, useState } from "react";
import "./App.css";
import CoursesList from "./components/CoursesList";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import personService from "./servises/persons"

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setPhone] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
 

   useEffect(() => {
      personService.getAll()
        .then((data) => {
          setPersons(data);
        })
        .catch((error) => {
          console.log(error);
        });
   },[]);


  const getName = (e) => {
    setNewName(e.target.value);
  };

  const getNumber = (e) => {
    setPhone(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();

    const person = persons.find(
      (item) => item.name === newName || item.number === number
    );

    if (!person) {
      const newPerson = { name: newName, number: number };
      
      personService.create(newPerson)
      .then((data)=>{
        setPersons([...persons, data]);
      });


    } else {
      alert(
        `${newName} with number number ${number} is already added to the phonebook`
      );
    }

    setNewName("");
    setPhone("");
  };

  const handelSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const removePerson = (id, name)=>{
    // const person= persons.find((item)=>item.id== id)// item2
    const result = window.confirm(`Delete ${name} ?`);
    if (result) {
       personService.remove(id).then((data) => {
         const newPersons= persons.filter((item)=>item.id !==id)//[ item1, item3, item4]
        setPersons(newPersons); 
       });
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handelSearch={handelSearch} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        getName={getName}
        number={number}
        getNumber={getNumber}
        addName={addName}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} removePerson={removePerson} />
      
    </div>
  );
}

export default App;
