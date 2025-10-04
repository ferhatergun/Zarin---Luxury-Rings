'use client';

import { useState, useEffect } from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const productImages = [
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="font-family-avenir-book text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 md:mb-6 leading-tight">
              Aşk ve Zarafet
              <span className="block text-gray-600 mt-2">Bir Arada</span>
            </h1>

            <p className="font-family-montserrat-regular text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Olağanüstü sanatla üretilmiş yüzüklerimizi keşfedin.
              Her parça, sevgi ve bağlılığın eşsiz hikayesini anlatır.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="/products"
                className="font-family-montserrat-medium inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white text-sm sm:text-base rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Koleksiyonu İncele
                <ArrowRightOutlined className="ml-2 text-base sm:text-lg" />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 relative ">
            <div className="relative w-full mx-auto flex items-center max-md:justify-center">
              <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-gray-50 p-4 sm:p-6 max-md:max-h-60 max-w-lg">
                <img
                  src={productImages[currentImage]}
                  alt="Featured Ring"
                  className="w-full h-full object-contain transition-all duration-700 ease-in-out transform hover:scale-105 rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
