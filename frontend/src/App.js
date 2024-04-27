import { useState, useEffect } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import StarIcon from '@mui/icons-material/Star';
import './app.css';
import axios from 'axios';

function App() {
  // const [showPopup, setShowPopup] = useState(true);
  const [travelpins, setTravelpins] = useState([]);
  useEffect(()=>{
    const getPins = async ()=>{
      try{
        const res = await axios.get("/travelpins");
        setTravelpins(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getPins();
  },[])

  return (
    <div className="App">
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        initialViewState={{
          longitude: 17,
          latitude: 46,
          zoom: 4
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/chevonnelise/clvi0ohoa000q01qu2k5b4hf5"
      >
        {travelpins.map(p=>(
        <>
        {/* <Marker longitude={48.8584} latitude={2.2945} color="red"/> */}
        <Marker 
        longitude={p.long} 
        latitude={p.lat} 
        anchor="bottom" >
          <LocationOnIcon sx={{ color: '#F535AA', fontSize: 40 }} />
        </Marker>
        {/* {showPopup && (
          <Popup longitude={2.2945} latitude={48.8584}
            anchor="left"
            onClose={() => setShowPopup(false)}>
            <div className="card">
              <label>Place</label>
              <h3 className="place">Eiffel Tower</h3>
              <label>Review</label>
              <p className="desc">Beautiful scenery</p>
              <label>Rating</label>
              <div className="stars">
                <StarIcon className="star"/>
                <StarIcon className="star"/>
                <StarIcon className="star"/>
                <StarIcon className="star"/>
                <StarIcon className="star"/>
              </div>
              <label>Information</label>
              <span className="username">Created by <b>Chevonne</b></span>
              <span className="date">1 hour ago </span>
            </div>
          </Popup>)} */}
          </>
        ))};
      </Map>
    </div>
  );
}

export default App;
