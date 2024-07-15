import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch trending recipes
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => response.json())
      .then(data => setRecipes(data.meals.slice(0, 10)))
      .catch(error => console.error('Error fetching recipes:', error));

    // Fetch categories
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="space-y-8 p-8 bg-gray-50">
      {/* Hero Section */}
      <section className="text-center bg-gray-100 p-12 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to Recipe World</h1>
        <p className="text-lg text-gray-600 mb-8">Discover and explore delicious recipes from around the world.</p>
        <Link to="/search">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
            Search Recipes
          </button>
        </Link>
      </section>

      {/* Discover Delicious Recipes Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Discover Delicious Recipes</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipes.map(recipe => (
              <div key={recipe.idMeal} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
                <Link to="/full" state={{ recipe }}>
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.strMeal}</h3>
                    <p className="text-gray-600">{recipe.strCategory}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <div key={category.idCategory} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
              <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.strCategory}</h3>
                <p className="text-gray-700">{category.strCategoryDescription.slice(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;



