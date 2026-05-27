import React from 'react';
const Button = () => {
  return <button>Comprar</button>;
};

const MainNav = () => {
  return (
    <nav>
      <a href="#">Link 1</a>
      <Button/>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <MainNav/>
      <Button/>
    </div>
  );
};

const Produtos = () => {
  const produto1 = 'Camisa';
  const produto2 = 'Bermuda';

  return (
    <div>
      <button>
        Comprar {produto1} - R$ {Math.random()}
      </button>
      <button>
        Bermuda {produto2} - R$ {Math.random()}
      </button>
    </div>
  );
};

const Produtos2 = () => {
  function handleClick(event) {
    console.log('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};