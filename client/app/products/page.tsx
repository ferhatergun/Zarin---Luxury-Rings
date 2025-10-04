'use client';

import { useState, useEffect } from 'react';
import Header from '@/shared/components/layout/Header';
import FilterBar from '@/features/products/components/FilterBar';
import LoadingSpinner from '@/shared/components/ui/LoadingSpinner';
import ProductsGrid from '@/features/products/components/ProductsGrid';
import { getProducts, FilterParams } from '@/features/products/api/productsApi';
import { Product } from '@/shared/types';
import Footer from '@/shared/components/layout/Footer';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilterChange = async (filters: FilterParams) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getProducts(filters);
      setProducts(response.data);
    } catch (err) {
      setError('Ürünler yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFilterChange({});
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header showFullNav={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="font-family-avenir-book text-4xl text-gray-900 mb-3">
            Koleksiyonlarımız
          </h1>
          <p className="font-family-montserrat-light  text-gray-600">
            El yapımı yüzüklerimizin ve kaliteli mücevherlerimizin özenle seçilmiş koleksiyonunu keşfedin.
          </p>
        </div>

        <FilterBar onFilterChange={handleFilterChange} isLoading={isLoading} />

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="font-family-montserrat-regular text-red-800 text-sm">{error}</p>
          </div>
        )}
        {isLoading && <LoadingSpinner />}
        {!isLoading && products.length > 0 && <ProductsGrid products={products} />}
        {!isLoading && !error && products.length === 0 && (
          <div className="text-center py-20">
            <p className="font-family-montserrat-bold text-gray-500 text-lg mb-2">Ürün bulunamadı</p>
            <p className="font-family-avenir-medium text-gray-400 text-sm">
              Filtrelerinizi ayarlayarak tekrar deneyin
            </p>
          </div>
        )}
      </div>
      <Footer/>
    </main>
  );
}
