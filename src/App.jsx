import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from './axios'
import Mainpage from './Mainpage';


function App() {
  const [pins, setNewPins] = useState([])

  const getImages = (term) => {
    return axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        per_page: 100,
      }
    });
  };



  const onSearchSubmit = (term) => {
    console.log('on search submit', term)
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [
        ...results,
        //...pins, 
      ]
// ----------------------Randomise/ mix around pictures

      // newPins.sort(function(a, b) {       
      //   return 0.5 - Math.random();
      // });
      setNewPins(newPins);
    });
  }

  // Get Pins on Home Page
  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ['london','luxury','rich','youtube','uk','money','dubai','canada', 'hustle', 'car', 'dark', 'mindset', 'coding'];

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          })
        })
      )
    })
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    })
  }

  useEffect(() => {

    getNewPins()
  }, [])
// ------------------------------------------------------------------------------------------------------

  return (
    <div className=''>

      <Navbar onSubmit={onSearchSubmit} />
      <Mainpage pins={pins}/>

    </div>
  )
}

export default App
