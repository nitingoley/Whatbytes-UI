'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';

const ProductGrid = () => {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const query = searchParams.get("search")?.toLowerCase() || "";
    const categories = searchParams.get("category")?.split(",") || [];
    const maxPrice = Number(searchParams.get("price")) || Infinity;

    const filtered = products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query);

      const matchesCategory =
        categories.length === 0 ||
        categories.includes("All") ||
        categories.includes(product.category.toLowerCase());

      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    setFilteredProducts(filtered);
  }, [searchParams]);

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg font-medium">No products found</p>
        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
