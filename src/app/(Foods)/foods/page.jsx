import FoodCard from "@/Components/card/FoodCard";
import React from "react";

const getFoods=async ()=>{
    const res =await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
    const data=await res.json();
    await new Promise((resolve)=>setTimeout(resolve,3000));
    return data.foods||[];
}

const FoodsPage = async() => {
    const foods = await getFoods();


  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">🍽️ Popular Foods</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {foods.map((food) => (
              <FoodCard key={food.id} food={food} />

            ))}
      </div>
    </div>
  );
};

export default FoodsPage;
