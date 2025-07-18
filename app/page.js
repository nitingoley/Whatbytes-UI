import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Suspense fallback={<div>Loading filters...</div>}>
            <Sidebar />
          </Suspense>

          <main className="flex-1">
            <Suspense fallback={<div className="text-center py-12">Loading products...</div>}>
              <ProductGrid />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
