import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import PhotoCard from "../Components/PhotoCard";

function App() {

  const [nasaImg, setNasaImg] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DRciVBnKsadw32Qr1nN7EpkTtestJuBd3odCGEuMy")
    .then(response => {
      console.log(response.data);
      setNasaImg(response.data);
    });
  }, []);

  return (
    <div className="App">
      
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
        <header><h1>NASA PHOTO OF THE DAY BABY!!!!!!!!!</h1></header>
        <PhotoCard title={nasaImg.title} url={nasaImg.url} explanation={nasaImg.explanation} date={nasaImg.date}/>
      
    </div>
  );
}

export default App;
