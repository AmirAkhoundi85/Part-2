import { useEffect, useState } from "react";
import "./App.css";
import CoursesList from "./components/CoursesList";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setPhone] = useState("");
  const [searchTerm, setSearchTerm] = useState("");


   useEffect(() => {
      axios.get("http://localhost:3001/persons")
      .then((res)=>{
       setPersons(res.data)})
      .catch((error)=>{console.log(error);});
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
      
      axios.post("http://localhost:3001/persons",newPerson )
      .then((res)=>{
        setPersons([...persons, res.data]);
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
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
}

export default App;
