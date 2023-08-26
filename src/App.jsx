import Peliculas from "./page/Peliculas";
import Serie from "./page/Serie";
import Navbar from "./page/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ThemeContext from "./ThemeContext";


function App() {
  const [themeClass, setThemeClass] = useState("dark"); // change the default here
  return (
    <ThemeContext.Provider value={{ themeClass, setThemeClass }}>
      <BrowserRouter>
      <div className={themeClass}>
      <Navbar/>
        <div className=" text-slate-900 bg-slate-100  flex justify-center items-center dark:text-slate-100 dark:bg-neutral-900">
          <Routes>
              <Route path="/" element={<Peliculas/>}/>
              <Route path="/serie" element={<Serie/>}/>
          </Routes>
        </div>
      </div> 
        </BrowserRouter>
    </ThemeContext.Provider>
    
    
  )
}

export default App;
