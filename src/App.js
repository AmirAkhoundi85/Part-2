import { useState } from "react";
import "./App.css";
import CoursesList from "./components/CoursesList";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
   const [newName, setNewName] = useState("");
   const [number, setPhone] = useState("");
   const [searchTerm, setSearchTerm] = useState("");

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
       setPersons([...persons, newPerson]);
     } else {
       alert(
         `${newName} with number number ${number} is already added to the phonebook`
       );
     }

     setNewName("");
     setPhone("");
   };
   const handelSearch = (e)=>{
    setSearchTerm(e.target.value)
   }

   const filteredPersons = persons.filter((person) =>
     person.name.toLowerCase().includes(searchTerm.toLowerCase())
   );
   

   return (
     <div>
       <h2>Phonebook</h2>
       <Filter searchTerm={searchTerm} handelSearch={handelSearch} />

       <h3>Add a new</h3>
       <PersonForm newName={newName} getName={getName}  number={number} getNumber={getNumber} addName={addName}/>
       <h3>Numbers</h3>
       <Persons filteredPersons={filteredPersons}/>
     </div>
   );
   }

export default App;
