const FoodCard = ({ food }) => {
  const { title, foodImg, price, category } = food;

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border bg-base-100">
      {/* Image */}
      <img
        src={foodImg}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">Category: {category}</p>
        <p className="text-lg font-bold text-green-600">৳ {price}</p>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            Add to Cart
          </button>
          <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-base-200 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
