import { useState } from 'react';
import './App.css';

const Header = () => {
  return (
    <header>
      <h1>Mi Perfil de Desarrollador</h1>
      <p>Actividad 4 - Fundamentos de React</p>
    </header>
  );
};

const ProfileCard = ({ name, career }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>Estudiante de {career}</p>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#242424', borderRadius: '8px' }}>
      <h3>Proyectos completados: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Agregar Proyecto
      </button>
    </div>
  );
};

const TechList = () => {
  const technologies = [
    { id: 1, name: 'Java (NetBeans / IntelliJ)' },
    { id: 2, name: 'Prolog' },
    { id: 3, name: 'HTML, CSS, JavaScript' },
    { id: 4, name: 'React (Vite)' }
  ];

  return (
    <div style={{ textAlign: 'left', display: 'inline-block' }}>
      <h3>Tecnologías conocidas:</h3>
      <ul>
        {technologies.map((tech) => (
          <li key={tech.id}>{tech.name}</li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '2rem' }}>
      <Header />
      <ProfileCard 
        name="Mario Eduardo" 
        career="Ingeniería en Sistemas Computacionales" 
      />
      <TechList />
      <Counter />
    </div>
  );
}

export default App;