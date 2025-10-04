'use client';

import { useState, useEffect } from 'react';
import Header from '@/shared/components/layout/Header';
import Footer from '@/shared/components/layout/Footer';
import Hero from '@/features/home/components/Hero';
import Features from '@/features/home/components/Features';
import About from '@/features/home/components/About';
import Testimonials from '@/features/home/components/Testimonials';
import Contact from '@/features/home/components/Contact';
import PopularProducts from '@/features/products/components/PopularProducts';
import { getProducts } from '@/features/products/api/productsApi';
import { Product } from '@/shared/types';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data)).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <About />
      <PopularProducts products={products} />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
