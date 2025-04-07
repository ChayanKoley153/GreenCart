import React from 'react';
import ProductCard from './ProductCard';
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
  const { products } = useAppContext();

  const bestSellers = products
    .filter((product) => product.inStock)
    .slice(0, 5);

  return (
    <section className="mt-20">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Best Sellers</h2>
        <div className="w-14 h-1 bg-primary mt-2 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {bestSellers.map((product) => (
          <ProductCard key={product._id || product.name} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
