import { Link } from "react-router-dom"
import Content from "../component/DarkMode";
import { DropDawnNav } from "../component/DropDawn";




function Navbar() {
  
  return (
    <nav className="dark:bg-black outline-dotted outline-2 outline-offset-2 ">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 " >
    <div className="relative flex h-16 items-center justify-between">
          <DropDawnNav/>
      
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
 
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-8">
             
            <Link to="/" className="dark:bg-gray-900 dark:text-white rounded-md px-3 py-2 text-sm font-medium uppercase" aria-current="page">Trailers Movies</Link>
            <Link to="/" className="dark:text-gray-300 hover:bg-gray-700 dark:hover:text-white rounded-md px-3 py-2 text-sm font-medium">Peliculas</Link>
            <Link to="/serie" className="dark:text-gray-300 hover:bg-gray-700 dark:hover:text-white rounded-md px-3 py-2 text-sm font-medium">Series</Link>
            <Link to="/calendario" className="dark:text-gray-300 hover:bg-gray-700 dark:hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendario</Link>
            
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className=" relative rounded-full pb-2  dark:text-gray-400 hover:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"> 
        <Content />
        </div>
        
      </div>
    </div>
  </div>

   
  
</nav>
  )
}

export default Navbar