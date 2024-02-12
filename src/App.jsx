import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState()
  let tabContanent = "Please Click Button"
  function handleSelect(name) {
    setSelectedTopic(name);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}

          </ul>
        </section>
        <h2>Examples</h2>
        <section id="examples">
          <menu>
            <TabButton isSelect={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelect={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
            <TabButton isSelect={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelect={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? (<p>"Please onclick on button."</p>) : (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>)}
        </section>
      </main>

    </div>
  );
}


export default App;
