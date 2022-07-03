
import './App.css';
import { useState, useEffect } from 'react'
import axios from "axios";



function App() {
  
  const [tracks,setTracks]=useState()
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/search/',
    params: {
      q: '<REQUIRED>',
      type: 'multi',
      offset: '0',
      limit: '10',
      numberOfTopResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': 'b6dc052c8fmsha29958cebecf6e1p167183jsndac89291055c',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
 
useEffect(()=>{
 const fetch= async(options)=>{
  await axios.request(options).then(function (response) {
    console.log(response.data);
   response.data&&setTracks(response.data.tracks.items)
  }).catch(function (error) {
    console.error(error);
  });
 }
 fetch(options)
},[])

  // console.log("tracks bro", tracks);
 
  return (
    <div className="App">
      <header className="App-header">
 { tracks?(tracks.map((item,i)=>{
return <a key={i} style={{color:"white",textAlign:"left",textDecoration:"none"}} href={item.data.uri}>{i+1+`) Listen ${item.data.artists.items[0].profile.name}`}</a>

  })):("fecthing please wait !")}
      </header>
    </div>
  );
}

export default App;
