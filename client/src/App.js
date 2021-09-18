import React, { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('http://localhost:8080/tweets');
    const res = await data.json();

    setItems(res);

    console.log(res[0].url);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Twitter</h1>
      <div className="ava">

      </div>
      {items.map((post) => (
        <div class="card">
          <div class="ovelay"> </div>
          <header class="user">
            <img src={post.url} alt="" />
            <div class="user-info">
              <h2 class="user-info-name">{post.name}</h2>
            </div>
          </header>
          <main>
            <p>{post.text}</p>
          </main>
        </div>
      ))}
    </div>
  );
}

export default App;
