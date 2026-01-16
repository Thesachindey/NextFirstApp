import FoodCardSkeleton from '@/Components/card/FoodCardSkleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
            [...Array(12)].map((_, index) => (
              <FoodCardSkeleton key={index} />
            ))
       
        }
            </div>
        </div>
    );
};

export default loading;