import React from 'react';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';

function App() {
  function handleSelect(name){
    console.log(name);
    }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
      <CoreConcept {...CORE_CONCEPTS[0]}/>
      <CoreConcept {...CORE_CONCEPTS[1]}/>
      <CoreConcept {...CORE_CONCEPTS[2]}/>
      <CoreConcept {...CORE_CONCEPTS[3]}/>
      </ul>
        </section>
        <h2>Examples</h2>
        <section id="examples">
          <menu>
          <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
        <TabButton onSelect={()=>handleSelect('jsx')}>Jsx</TabButton>
        <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
        <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
  
    </div>
  );
}


export default App;
