// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const URL = `http://api.weatherapi.com/v1/current.json?key=91425f222d10472bbd775354241809&q=jordan&aqi=yes`;


function App() {
   
    const [temp, setTemp] = useState(0);
  useEffect(() => {
    const feachdata = async () => {
      const result = await fetch(URL)
      // console.log(result.json())
      result.json().then(json =>{
        setTemp(json.current.temp_c)
      })

    }
    feachdata()
  },[])
  const [data,setdata] = useState(
    {
      search: '',
      time: ''
    }
  )
  const onchagehandler = (event) => {
    setdata({
      ...data,
      [event.target.name]: event.target.value
    })

  }
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(data)
  }

  return (
    <div className='body'>
      <h1 className='temp'>
        the temp now in Amman: {temp} c
      </h1>
      
      <form onSubmit={onsubmit}>
        <br></br>
        <label htmlFor='search'><h1><strong>Enter your erea</strong></h1></label>
        <input type='text' id='search'name='search' onChange={onchagehandler} placeholder='ex. Amman'/>
        <br></br>
        <label htmlFor='time'><h1><strong>Enter your erea</strong></h1></label>
        <input type='time' id='time' name='time' onChange={onchange}/>
        <button type='submit'>
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
