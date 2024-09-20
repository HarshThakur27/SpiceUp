import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  // List of video sources
  const videoSources = [

      'https://www.shutterstock.com/shutterstock/videos/1111953471/preview/stock-footage-super-slow-motion-shot-of-flying-dry-chilli-peppers-filmed-on-high-speed-cinema-camera-fps.webm',
    'https://www.shutterstock.com/shutterstock/videos/1110269959/preview/stock-footage-chef-stir-frying-vegetables-in-a-flaming-wok-in-an-outdoors-kitchen-person-cooking-food-using-a.webm'
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
      if (videoRef.current) {
          videoRef.current.play();
      }
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => {
          return prevIndex < videoSources.length - 1 ? prevIndex + 1 : 0;
      });
  };

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => response.json())
      .then(data => setRecipes(data.meals.slice(0, 10)))
      .catch(error => console.error('Error fetching recipes:', error));

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="bg-gray-50 overflow-hidden">

      {/* Video Section */}
      <section className='w-full h-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200'>
        <div className='relative'>
          <div>
            <div className='w-full md:w-[500px] h-[400px] absolute z-40 rounded-3xl border-yellow-500 animate-reveal opacity-0 md:ml-16 md:mt-36 p-4 md:p-0'>
              <h1 className='text-2xl md:text-3xl pr-11 font-bold text-yellow-600 text-center md:pl-24'>Welcome to SpiceUp</h1>
              <p className='pt-4 pl-16 text-sm md:text-xl text-white text-center md:text-left'>
              "Discover a world of flavors with our curated recipes. Whether you're a seasoned chef or just starting out,
            we have something delicious for everyone. From quick weeknight dinners to indulgent weekend feasts,
            explore an array of dishes that will tantalize your taste buds and elevate your cooking skills."
              </p>
              <a href="#explore">
                <button className='w-full ml-16 md:w-[400px] h-[50px] bg-white text-yellow-400 mt-6 rounded-2xl text-lg md:text-xl font-bold'>
                  Start Exploring
                </button>
              </a>
            </div>
            <video
  ref={videoRef}
  className='w-full'
  muted
  autoPlay
  onEnded={handleVideoEnd}
  key={videoSources[currentVideoIndex]}
  disablePictureInPicture
  controlsList="nodownload nofullscreen noremoteplayback" // Disables fullscreen, downloading, and remote playback
>
  <source src={videoSources[currentVideoIndex]} type="video/webm" />
  Your browser does not support the video tag.
</video>

          </div>
        </div>
      </section>

      {/* Discover Delicious Recipes Section */}
      <section className="bg-stone-950">
        <div className='flex flex-col md:flex-row w-full md:w-[1300px] justify-items-end items-center md:items-stretch p-4'>
          <div className='w-full md:w-[750px] h-full'>
            <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Discover Delicious Recipes
            </h2>
            <h3 className='text-white text-sm md:text-xl w-full md:w-[600px] mt-6 md:mt-24 font-bold text-center md:text-left'>
              "Food is more than just nourishment—it's an experience that brings people together."
            </h3>
            <Link to="/search">
              <button className='w-full md:w-[250px] h-[50px] mt-7 md:ml-11 text-lg md:text-xl rounded-3xl bg-yellow-400 text-white font-bold'>
                Search now
              </button>
            </Link>
          </div>
          <img src="https://aspiremagz.com/wp-content/uploads/2023/10/Chef-Ranveer-Brar-kashkan-scaled.jpg" alt="ranveer"
            className='w-full md:w-[550px] h-full mt-6 md:mt-0' />
        </div>

        <div className='m-11'>
          <h1 className='text-white text-3xl md:text-5xl font-extrabold text-center'>
            Explore Our Collection
          </h1>
        </div>

        <div id="explore">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {recipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="bg-black rounded-lg shadow-lg overflow-hidden relative transition-transform transform hover:scale-105 cursor-pointer"
              >
                <Link to="/full" state={{ recipe }}>
                  <div className="relative">
                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <p className="text-white text-lg font-semibold">View Recipe</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg md:text-xl font-bold text-yellow-700 mb-2">
                      {recipe.strMeal}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      Category: {recipe.strCategory}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {recipe.strArea} | Ready in: 30 mins
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;



