import { useEffect, useState } from 'react';
import './App.css';
import RadioComponent from './pages/components/RadioComponent/RadioComponent';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://teclead.de/recruiting/radios')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return <div className='app'>{data && <RadioComponent data={data} />}</div>;
}

export default App;
