import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=9f5f862666cc4aa08c2e5f5c61a85e83');
            const json = await response.json();
            setData({...json, updatedAt: Date.now()});
        }

        getData();
    }, []);
    return (
        <div className="App">
          {data && <div>{new Date(data.updatedAt).toLocaleString()}</div>}
            {data && <ul>{data.articles.map(a => <li>{a.content}</li>)}</ul>}
        </div>
    );
};

export default App;
