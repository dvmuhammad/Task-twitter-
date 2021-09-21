import React, { useEffect, useState } from 'react';
import './App.scss';

const PostForm = () => {

    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    const postData = (e) => {
        
        fetch('http://localhost:8080/tweets', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: content, name, username: name})
        })
        .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'name') {
            setName(value);
        } else {
            setContent(value);
        }
    }

    return (
        <div>
            <h1>Tweet</h1>
            <form onSubmit={postData}>
                <div>
                    <input type="text" name="name" onChange={handleChange} />                
                    <input type="text" name="text" onChange={handleChange} />                
                </div>
                <input type="submit" value="post" onClick={postData} />
            </form>
        </div>
    )
}

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
      <PostForm />
      <div className="ava">

      </div>
      {items.map((post) => (
        <div key={post.id} className="card">
          <div className="ovelay"> </div>
          <header className="user">
            <img src={post.url} alt="" />
            <div className="user-info">
              <h2 className="user-info-name">{post.name}</h2>
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
