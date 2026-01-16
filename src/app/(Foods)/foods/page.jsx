import FoodCard from "@/Components/card/FoodCard";
import React from "react";

const getFoods = async () => {
  try {
    // Added { cache: 'no-store' } because the endpoint is "random" 
    // and you likely want new data on every refresh.
    const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    // REMOVED: The 3-second delay (setTimeout). 
    // This slows down your app unnecessarily. Only keep it if testing a loading.js file.
    
    return data.foods || [];
  } catch (error) {
    console.error("Error fetching foods:", error);
    return []; 
  }
};

const FoodsPage = async () => { 
  const foods = await getFoods();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">🍽️ Popular Foods</h1>

      {/* 2. Added a check to show a message if no foods are found */}
      {foods.length === 0 ? (
        <p className="text-gray-500">No foods available at the moment.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {foods.map((food) => (
            <FoodCard key={food.id || food._id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodsPage;