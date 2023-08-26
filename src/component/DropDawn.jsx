import { useState } from "react";
import { Link } from "react-router-dom";


export function DropDawnNav() {

    const [isOpen, setOpen] = useState(false);

    const handleDropDown = () => {
        setOpen(!isOpen);
    }

    return (
        <>
            

                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                    <div
                        onClick={handleDropDown}
                        aria-hidden="true"
                        className="cursor-pointer relative inline-flex items-center justify-center rounded-md p-2 dark:text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only"></span>
                        <i className="bi bi-list"></i>


                    </div>
                    <div id="dropdawn" aria-hidden="true" className={`sm:hidden ${isOpen ? "block" : "hidden"}`} >
                        <div className="absolute -left-2 right-0  z-10 mt-2 w-48 top-14 rounded-md  dark:bg-black py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >

                            <Link to="/" className="dark:bg-gray-900 dark:text-white block rounded-md px-3 py-2 text-base font-medium uppercase" aria-current="page">Trailers Movies</Link>
                            <Link to="/" className="dark:text-gray-300 hover:bg-gray-700 dark:hover:text-white block rounded-md px-3 py-2 text-base font-medium" >Peliculas</Link>
                            <Link to="/serie" className="dark:text-gray-300 hover:bg-gray-700 dark:hover:text-white block rounded-md px-3 py-2 text-base font-medium" >Series</Link>
                            <Link to="/calendario" className="dark:text-gray-300 hover:bg-gray-700 dark:hover:text-white block rounded-md px-3 py-2 text-base font-medium" >Calendario</Link>
                        </div>
                    </div>
                </div>
            
        </>
    )
}