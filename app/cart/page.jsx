"use client";
import useCartStore from "@/store/useCartStore";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <div className="text-center py-16 text-lg">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-600">${item.price} × {item.quantity}</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 border px-2 py-1"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-6 text-xl font-bold">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default CartPage;
