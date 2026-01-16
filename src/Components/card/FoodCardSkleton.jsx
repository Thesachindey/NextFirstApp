const FoodCardSkeleton = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border  animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-200"></div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>

        {/* Category */}
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Price */}
        <div className="h-5 bg-gray-200 rounded w-1/3"></div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
          <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
