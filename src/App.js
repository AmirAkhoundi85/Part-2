import { useState } from "react";
import "./App.css";
import CoursesList from "./components/CoursesList";

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
       <form onSubmit={addName}>
         <div>
           Filter shown with{" "}
           <input value={searchTerm} onChange={handelSearch} />
         </div>
         <div>
           <h3>add a new</h3>
           name: <input value={newName} onChange={getName} />
         </div>
         <div>
           number : <input value={number} onChange={getNumber} />
         </div>
         <div>
           <button type="submit">add</button>
         </div>
       </form>
       <h2>Numbers</h2>
       {filteredPersons.map((item, index) => (
         <p key={index}>
           {item.name} {item.number}
         </p>
       ))}
     </div>
   );
   }

export default App;
