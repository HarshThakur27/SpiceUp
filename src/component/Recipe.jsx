// import React from 'react';
// import { Link } from 'react-router-dom';

// const Recipe = (props) => {
//   const recipe = props.recipe;

//   return (
//     <div className="w-[300px] h-[300px] border-black flex flex-col items-center p-4">
//       <Link to="/full" state={{ recipe }}>
//         <img
//           src={recipe.strMealThumb}
//           alt={recipe.strMeal}
//           className="w-full h-[150px] object-cover rounded-md mb-2"
//         />
//         <p className="text-lg font-medium">{recipe.strMeal}</p>
//       </Link>
//     </div>
//   );
// };

// export default Recipe;

import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
      <Link to="/full" state={{ recipe }}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full  text-yellow-700  h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <p className="text-white text-lg font-semibold">View Recipe</p>
          </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-yellow-700 mb-2">{recipe.strMeal}</h3>
          <p className="text-gray-400">{recipe.strCategory}</p>
          <p className="text-gray-500 text-sm">
            {recipe.strArea} 
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Recipe;
