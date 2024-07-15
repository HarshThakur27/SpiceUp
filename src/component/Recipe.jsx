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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
      <Link to="/full" state={{ recipe }}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.strMeal}</h3>
          <p className="text-gray-600">{recipe.strCategory}</p>
        </div>
      </Link>
    </div>
  );
};

export default Recipe;
