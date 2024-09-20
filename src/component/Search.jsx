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

  return (
    <div className="container bg-black w-full h-[600px] overflow-y-scroll mx-auto p-4  ">
     
      {/* <h1 className="text-3xl font-bold text-center mb-4">Search Recipes</h1> */}
      <div className="mb-8">
      
        <form onSubmit={handleSearch} className="flex flex-col items-center space-y-4 ">
          <label className="w-full max-w-lg">
            <p className="text-xl mb-2">Search</p>
            <input
              type="text"
              placeholder="Enter recipe name"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {recipeData && recipeData.map((recipe) => (
          <Recipe key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Search;

