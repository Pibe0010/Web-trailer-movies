
import { useContext } from "react";
import ThemeContext from "../ThemeContext";


const Content = () => {
  const { themeClass, setThemeClass } = useContext(ThemeContext);
  const isDarkMode = themeClass === "dark";

  const onHandleClick = () => {
    setThemeClass(isDarkMode ? "light" : "dark");
    
  };

  return (
    <div className="flex flex-col items-center">
      <div></div>
      <div></div>
      <button className=" dark:text-white pt-3" onClick={() => onHandleClick()}>
         {isDarkMode ? <i className="bi bi-brightness-low-fill"></i> : <i className="bi bi-moon"></i>} 
      </button>
      
    </div>
  );
};

export default Content;
