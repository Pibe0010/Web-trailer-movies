import { React, useEffect, useState } from 'react';
import axios from "axios";
import YouTube from 'react-youtube';
import { API_KEY,  IMAGE_PATH, API_URL, URL_IMAGE } from '../config';


function Peliculas() {

// Variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies..." });
  const [playing, setPlaying] = useState(false);

// Peticiones get a la api
// funcion para realizar la peticion get a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
    setMovie(results[0]);

    if (results.length) {
      await fetchMovie(results[0].id)
    }
  }

  // Peticion de un objeto para la reproduccion del trailer
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos"
      }
    })
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0])
    }
    setMovie(data)
  }

  const selectMovie = async (movie) => {
    fetchMovie(movie.id)
    setMovie(movie)
    window.scrollTo(0, 0)
  }

  // Buscar peliculas 
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  }


  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div>
      

      {/* Buscador */}
      <form className='flex text-center justify-center items-center text-black  mb-5 p-2' onSubmit={searchMovies}>
        <input
          className='text-slate-950'
          type="text"
          placeholder='Search'
          onChange={(e) => setSearchKey(e.target.value)}
        />

        <button
          type='submit'
          className='flex p-2 cursor-pointer  dark:text-zinc-300 m-1 rounded-lg dark:bg-violet-500 hover:bg-violet-700 dark:hover:bg-violet-700 '
        >Search
        </button>
      </form>

      {/* Aqui va el contenedor del banner y del reproductor del trailer*/}
     
      <div>
        <main>
          {movie ? (
            <div
              className="bg-no-repeat bg-cover bg-fixed max-w-full min-w-full pt-6 flex-auto w-32 outline outline-offset-4 justify-end  "
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className=" max-w-full max-h-full min-w-full bg-cover container flex justify-center bg-center items-center "
                    opts={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 1,
                        cc_load_policy: 0,
                        fs: 1,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="bg-black text-white max-w-md rounded-2xl m-1  p-1 border-2 ">
                    Close
                  </button>
                </>
              ) : (
                <div className="justify-center items-center max-w-full min-w-full bg-cover flex flex-col">
                  <div className="relative pt-56 container px-11">
                    {trailer ? (
                      <button
                        className="bg-black text-white rounded-2xl m-2 border-2 px-6 "
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1 className="text-white font-bold text-2xl uppercase ">{movie.title}</h1>
                    <p className="text-white font-bold text-lg ">{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>


      {/*Contenedor que mostrara la cartelera de las peliculas actuales*/}
      <div className='container  flex flex-col items-center justify-center mt-3 text-center max-w-full min-w-full p-6'>
        <div className=' grid grid-cols-1 gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 relative justify-center '>
          {movies.map((movie) => (
            <div key={movie.id} className='' onClick={() => selectMovie(movie)}>
              <img src={`${URL_IMAGE + movie.poster_path}`} alt='' className='cursor-pointer max-w-full h-96 min-w-full' />
              <h4 className='dark:text-white cursor-pointer pt-2 text-xs  relative text-center'>{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Peliculas