import ProductCard from './ProductCard';
import { Product } from '@/shared/types';

interface ProductsGridProps {
  products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  if (!products?.length) return null;

  return (
    <div id="products-grid">
      <p className="font-family-montserrat-medium text-sm text-gray-600 mb-8">
        {products.length} ürün bulundu
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
