'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import ProductCard from './ProductCard';
import { Product } from '@/shared/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="max-w-6xl mx-auto relative px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1.2}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 28 },
          }}
          className="!pb-14"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-transparent rounded-full flex items-center justify-center text-black cursor-pointer">
        <LeftOutlined className="text-xl lg:text-2xl" />
      </button>
      <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-transparent rounded-full flex items-center justify-center text-black cursor-pointer">
        <RightOutlined className="text-xl lg:text-2xl" />
      </button>
    </div>
  );
}
