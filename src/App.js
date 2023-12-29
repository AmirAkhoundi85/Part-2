import { useState } from "react";
import "./App.css";
import CoursesList from "./components/CoursesList";

function App() {
   const [persons, setPersons] = useState([{ name: "Arto Hellas", phone: "" }]);
   const [newName, setNewName] = useState("");
   const [phone, setPhone] = useState("");

   const getName = (e) => {
     setNewName(e.target.value);
   };

   const getNumber = (e) => {
     setPhone(e.target.value);
   };

   const addName = (e) => {
     e.preventDefault();

     const person = persons.find(
       (item) => item.name === newName || item.phone === phone
     );

     if (!person) {
       const newPerson = { name: newName, phone: phone };
       setPersons([...persons, newPerson]);
     } else {
       alert(
         `${newName} with phone number ${phone} is already added to the phonebook`
       );
     }

     setNewName("");
     setPhone("");
   };
   

   return (
     <div>
       <h2>Phonebook</h2>
       <form onSubmit={addName}>
         <div>
           name: <input value={newName} onChange={getName} />
         </div>
         <div>number : <input value={phone} onChange={getNumber}  /></div>
         <div>
           <button type="submit">add</button>
         </div>
       </form>
       <h2>Numbers</h2>
       {persons.map((item)=><p>{item.name}</p>)}
     </div>
   );
   }

export default App;
