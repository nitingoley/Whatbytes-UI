"use client";

import Link from "next/link";
import useCartStore from "@/store/useCartStore";

// ProductCard component displays a product card with mobile-only star rating
const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  // Check if product is a "mobile" to give it special layout
  const isMobileCategory =
    product.category === "electronics" &&
    product.title.toLowerCase().includes("mobile");

  return (
    <div
      className={`rounded-xl p-4 shadow-sm hover:shadow-md transition ${
        isMobileCategory ? "lg:col-span-3" : ""
      }`}
    >
      {/* Product image and link */}
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className={`w-full ${
            isMobileCategory ? "h-72" : "h-48"
          } object-contain rounded`}
        />
      </Link>

      {/* Product Info */}
      <div className="mt-3">
        <Link
          href={`/product/${product.id}`}
          className="text-base text-black font-semibold hover:text-blue-600"
        >
          {product.title}
        </Link>

        <p className="text-gray-500 text-sm">{product.brand}</p>

        {/* Label to indicate type (only shown on mobile) */}
        <p className="text-xs text-blue-700 font-medium mt-1 lg:hidden">
          {product.title.toLowerCase().includes("mobile") ? "Mobile" : "Web"}
        </p>

        {/* Product description (only on mobile) */}
        <p className="text-gray-600 text-sm mt-1 block lg:hidden">
          This is a mobile product with cutting-edge features and stylish design.
        </p>

        {/* Price and mobile-only star rating */}
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-gray-900 font-semibold">${product.price}</p>

            {/* Star rating visible only on mobile screens */}
            <div className="text-yellow-500 text-xs block lg:hidden">
              {"★".repeat(Math.round(product.rating))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-[#022b63] text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
