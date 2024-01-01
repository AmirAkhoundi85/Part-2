import React from "react";

const Persons = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map((item, index) => (
        <p key={index}>
          {item.name} {item.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
