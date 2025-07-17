import products from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProductPage = ({ params }) => {
  const product = products.find((p) => p.id === parseInt(params.id));
  if (!product) return notFound();

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="rounded-lg object-contain"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-2">{product.brand}</p>
        <p className="text-xl text-blue-700 font-semibold mb-4">${product.price}</p>
        <p className="mb-4 text-gray-700">{product.description}</p>

        {/* Optional: Quantity selector */}
        <div className="flex items-center gap-4 mt-4">
          <button className="bg-[#0047AB] text-white px-4 py-2 rounded hover:bg-[#022b63]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
