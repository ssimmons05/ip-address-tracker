import React, { useEffect, useState } from 'react';
import './App.css'
import BottomSection from './components/BottomSection.js'
import TopSection from './components/TopSection.js'
import SearchBar from './components/SearchBar.js'
import InfoBox from './components/InfoBox.js'
// import axios from "axios"

// // const api = axios.create({
// //   baseURL: "https://geo.ipify.org/api/v1"
// // })

  const App = () => {
    // const [Address, setAddress] = useState("8.8.8.8")
    const [information, setInformation] = useState([]);
    useEffect(() => {
      fetch("https://geo.ipify.org/api/v1?apiKey=at_9266dgV17onwJseGusY9R1eYLhtne&ipAddress=8.8.8.8")
      .then((result) => {
        result.json().then((resp) => {
        setInformation(resp)
        })
      })
    }, [])
    let allData = Object.entries(information);
    console.log(allData);
    // let latitude = info.location.lat;
    // let longitude = info.location.lng;
    // console.log(longitude, latitude);
  
    return (
    <div> 
      
        { information.map((info) =>
        <ul>
          <li>{info.ipAddress}</li>
          <li>{info.location}</li>
          <li>{info.timezone}</li>
          <li>{info.isp}</li>
          </ul>
        )}
      


      {/* <table border="1">
        <tr>
          <td>ipAddress</td>
          <td>Location</td>
          <td>Timezone</td>
          <td>ISP</td>
        </tr>
        {
          information.map((info)=>
      <tr>
        <td>{info.ipAddress}</td>
        <td>{info.location}</td>
        <td>{info.timezone}</td>
        <td>{info.isp}</td>
      </tr>)
        }
      </table> */}



      
      {/* <TopSection />
      <SearchBar />
      <InfoBox />
      <BottomSection /> */}
    </div>
  )
}

export default App


// import React, { useEffect, useState } from 'react';
// import "./App.css";

// const App = () => {
//   useEffect(() => {
//     fetch("https://geo.ipify.org/api/v1?apiKey=at_rf5VQ9tgOUKWRaRmktRE1Kj3Azz0W&ipAddress=8.8.8.8")
//     .then((result) => {
//       result.json().then((resp) => {
//         console.log(resp);
//       })
//     })
//   });
  
//   return (
//     <div className="App">
//       <h1>Get API Call</h1>
//       <ul></ul>
      
//     </div>
//   )
// }

// export default App






// import React, { useEffect, useState } from 'react';
// import './App.css';
// import List from './components/List';
// import WithListLoading from './components/WithListLoading';


// function App() {
//   const ListLoading = WithListLoading(List);
//   const [appState, setAppState] = useState({loading: false, repos: null});

//   useEffect(() => {
//     setAppState({ loading: true });
//     const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then((repos) => {
//         setAppState({ loading: false, repos: repos });
//       });
//   }, [setAppState]);

//   return (
//     <div className='App'>
//       <div className='container'>
//         <h1>My Repositories</h1>
//       </div>
//       <div className='repo-container'>
//         <ListLoading isLoading={appState.loading} repos={appState.repos} />
//       </div>
//       <footer>
//         <div className='footer'>
//           Built with {' '}
//           <span role='img' aria-label='love'>
//             💚
//           </span>{' '}
//           by Shedrack Akintayo
//         </div>
//       </footer>
//     </div>
//   );
// }
// export default App;
