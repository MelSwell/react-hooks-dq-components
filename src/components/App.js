import React from "react";
import TopMenu from './TopMenu';
import MainContent from './MainContent'
import SideMenu from './SideMenu'



function App() {
  return (
    <div className="app-container">
      <TopMenu />
      <SideMenu />
      <MainContent />
    </div>
  )
}

export default App;
