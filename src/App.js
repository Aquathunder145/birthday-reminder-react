import React, { useState } from 'react';
import Data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(Data);

  // Function to remove a specific birthday
  const removeBirthday = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };

  return (
    <main>
      <section className="container">
        
        <List people={people} removeBirthday={removeBirthday} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
