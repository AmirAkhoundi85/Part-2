import { useState } from "react";
import "./App.css";
import CoursesList from "./components/CoursesList";

function App() {
   const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
   const [newName, setNewName] = useState("");

   const getName = (e)=>{
    setNewName(e.target.value)
   }

   const addName = (e)=>{
    e.preventDefault()
    const person=  persons.find((item)=> item.name == newName)
    
    if(!person){
    const newPersons = {name:newName}
    setPersons(persons.concat(newPersons))
    }else{
      alert(`${newName} is already added to phonebook`);
    }

    setNewName("")
   }

   return (
     <div>
       <h2>Phonebook</h2>
       <form onSubmit={addName}>
         <div>
           name: <input value={newName} onChange={getName} />
         </div>
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
