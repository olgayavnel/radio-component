import { useEffect, useState } from 'react';
import './App.css';
import RadioComponent from './pages/components/RadioComponent/RadioComponent';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Aos.init({});
  }, []);

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
