// import React, { useState } from 'react';
// import Recipe from './Recipe';

// const Search = () => {
//     const [SearchData ,setSearchData] = useState({
//         word: "",
//     });

//     const {word}= SearchData;

  
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...SearchData,
//             [name]: value
//         });
//     };

//     async function handlesearch (){
//         const [RecipeData , setRecipeData] = useState(null);
//         let response = await fetch(www.themealdb.com/api/json/v1/1/search.php?s={word});
//         let output = await response.json();
//         console.log("details" , output);
//         setRecipeData(output.meals);

//     }

//   return (
//     <div>
//       <h1>search Page</h1>
//       <div>
//         <form onClick={handlesearch}>
//             <label>
//                 <p>Search</p>
//                 <input type='text' placeholder='enter' name='word' value={word} onChange={handleChange}></input>
                
//             </label>
//             <button type='submit'>0\</button>
//         </form>
//       </div>

//       <div>
//         <Recipe></Recipe>
//       </div>
//     </div>
//   );
// };

// export default Search;




import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import chef from "../images/chef.webp";
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchData, setSearchData] = useState({
    word: '',
  });
  const [recipeData, setRecipeData] = useState(null);

  const { word } = searchData;

  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipes');
    if (savedRecipes) {
      setRecipeData(JSON.parse(savedRecipes));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`);
    const output = await response.json();
    console.log('details', output);
    setRecipeData(output.meals);
    localStorage.setItem('recipes', JSON.stringify(output.meals));
  };

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(response => response.json())
        .then(data => setRecipes(data.meals))
        .catch(error => console.error('Error fetching recipes:', error));
  
     
    }, []);

return (
  <div className="bg-black w-full h-screen overflow-y-auto mx-auto">
    <div className="mb-8">
      <form onSubmit={handleSearch} className="flex flex-col items-center space-y-4 mt-12">
        <label className="w-full max-w-lg">
          <p className="text-xl mb-2">Search</p>
          <input
            type="text"
            placeholder="What’s cooking today?"
            name="word"
            value={word}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipeData &&
        recipeData.map((recipe) => <Recipe key={recipe.idMeal} recipe={recipe} />)}
    </div>

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
);


};

export default Search;
