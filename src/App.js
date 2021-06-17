import React from 'react'
import './App.css'
import BottomSection from './components/BottomSection.js'
import TopSection from './components/TopSection.js'
import SearchBar from './components/SearchBar.js'
import InfoBox from './components/InfoBox.js'
import axios from "axios"

const api = axios.create({
  baseURL: "https://geo.ipify.org/api/v1"
})

const App = () => {

  
  return (
    <div> 
      <TopSection />
      <SearchBar />
      <InfoBox ipAddress="IP ADDRESS" location="LOCATION" timeZone="TIMEZONE" isp="PROVIDER"/>
      <BottomSection />
    </div>
  )
}

export default App
