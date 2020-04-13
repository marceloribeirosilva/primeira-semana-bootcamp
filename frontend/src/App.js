import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

function App() {
  
  const [projects, setProjects] = useState(['Desenvolvimento mobile','Desenvolvimento web']);

  function handleAddProject(){
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }

  return (
    <>      
      <Header title="Projects"/>

      <img width={350} src={backgroundImage} />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>           
  );
}

export default App;