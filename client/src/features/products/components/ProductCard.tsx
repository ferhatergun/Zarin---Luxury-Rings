'use client';

import { useState } from 'react';
import Image from 'next/image';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Product, ColorOption } from '@/shared/types';


interface ProductCardProps {
  product: Product;
}

const colorOptions: { value: ColorOption; label: string; hex: string }[] = [
  { value: 'yellow', label: 'Yellow Gold', hex: '#E6CA97' },
  { value: 'white', label: 'White Gold', hex: '#D9D9D9' },
  { value: 'rose', label: 'Rose Gold', hex: '#E1A4A9' },
];

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState<ColorOption>('yellow');

  return (
    <div className="group relative bg-white transition-all duration-300 h-full flex flex-col">
      <div className="relative aspect-square bg-gray-300 mb-3 md:mb-4 rounded-3xl overflow-hidden">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>

      <div className="px-1 md:px-2 flex-1 flex flex-col">
        <h3 className="font-family-avenir-medium text-[15px] text-gray-900 mb-2">
          {product.name}
        </h3>

        <p className="font-family-montserrat-regular text-[15px] text-gray-900 mb-3">
          ${product.price} USD
        </p>

        <div className="mb-2 md:mb-3">
          <div className="flex gap-1.5 md:gap-2 items-center">
            {colorOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedColor(option.value)}
                className={`relative rounded-full transition-all duration-200 p-[3px] border-1 cursor-pointer ${
                  selectedColor === option.value
                    ? 'border-gray-500'
                    : 'border-transparent'
                }`}
                title={option.label}
                aria-label={`${option.label} seçin`}
              >
                <div
                  className="w-5 h-5 md:w-6 md:h-6 rounded-full"
                  style={{ backgroundColor: option.hex }}
                />
              </button>
            ))}
          </div>
        </div>

        <p className="font-family-avenir-book text-[12px] text-gray-700 mb-3">
          {colorOptions.find(c => c.value === selectedColor)?.label}
        </p>

        <div className="flex items-center gap-1 mt-auto">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => {
              const isFilled = star <= Math.floor(product.popularityStars);
              return isFilled ? (
                <StarFilled key={star} className="!text-yellow-400 text-xs md:text-sm" />
              ) : (
                <StarOutlined key={star} className="!text-gray-400 text-xs md:text-sm" />
              );
            })}
          </div>
          <span className="font-family-avenir-book text-[14px] text-gray-700 ml-1">
            {product.popularityStars}/5
          </span>
        </div>
      </div>
    </div>
  );
}
