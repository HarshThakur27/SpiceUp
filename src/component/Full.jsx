import React from 'react';
import { useLocation } from 'react-router-dom';

const Full = () => {
  const location = useLocation();
  const { recipe } = location.state || {}; // Destructure recipe from state

  if (!recipe) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-700">Recipe not found</h1>
      </div>
    );
  }

  return (
    <div className=" mx-auto p-8 bg-black rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold mb-6 text-center text-yellow-600">{recipe.strMeal}</h1>
      <div className="flex justify-center mb-8">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-[300px] max-w-2xl rounded-lg shadow-lg border-4 border-yellow-500"
        />
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-semibold text-yellow-600 mb-4">Instructions</h2>
        <p className="text-lg text-white leading-relaxed">{recipe.strInstructions}</p>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-yellow-600 mb-4">Ingredients</h2>
        <ul className="list-disc list-inside pl-5 space-y-2">
          {Object.keys(recipe)
            .filter((key) => key.startsWith('strIngredient') && recipe[key])
            .map((key) => (
              <li key={key} className="text-white text-lg">
                {recipe[key]}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Full;
