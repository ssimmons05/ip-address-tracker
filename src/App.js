import React, { useEffect, useState } from 'react';
import './App.css'
import BottomSection from './components/BottomSection.js'
import TopSection from './components/TopSection.js'
import SearchBar from './components/SearchBar.js'
import InfoBox from './components/InfoBox.js'


  const App = () => {
    
  
    return (
    <div> 
 
      <TopSection />
      <SearchBar />
      <InfoBox />
      <BottomSection />
    </div>
  )
}

export default App







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
