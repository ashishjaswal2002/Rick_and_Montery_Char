import React, { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header/Header";
import WweSuperstar from "./components/Wwe/WweSuperstars";



function App() {
  const [Star,setStar] = useState([]);
  const[loading,setisLoading] = useState(false);



  async function fetchWweHandler(){
     setisLoading(true)
     const response = await fetch('https://rickandmortyapi.com/api/character');

     const data = await response.json();
   
       const transformedMovies = data.results.map((stardata)=>{
        return {
          id:stardata.id,
          name:stardata.name,
          gender:stardata.gender,
          image:stardata.image,

        }
       });
        setStar(transformedMovies);
        setisLoading(false);
        
      



  }
  return (
    <>
      <Header/>
      <main>
        <Button onClick = {fetchWweHandler}/>
        {!loading && <WweSuperstar datawwe={Star} />}
        {loading && Star.length>0 && <p>Loading....</p>}
        {loading && Star.length===0 && <p>No data Found </p>}
      </main>

    </>
  );
}

export default App;
