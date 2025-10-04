'use client';

import { useState } from 'react';
import { Slider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FilterParams } from '../api/productsApi';

interface FilterBarProps {
  onFilterChange: (filters: FilterParams) => void;
  isLoading?: boolean;
}

export default function FilterBar({ onFilterChange, isLoading }: FilterBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [popularityRange, setPopularityRange] = useState<[number, number]>([0, 100]);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleApplyFilters = () => {
    const filters: FilterParams = {
      search: searchQuery.trim() || undefined,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      minPopularity: popularityRange[0],
      maxPopularity: popularityRange[1],
    };

    onFilterChange(filters);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setPriceRange([0, 10000]);
    setPopularityRange([0, 100]);
    onFilterChange({});
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 p-6 mb-8">
      <div className="relative mb-6">
        <SearchOutlined className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleApplyFilters();
            }
          }}
          placeholder="Ürün ara..."
          disabled={isLoading}
          className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white font-family-montserrat-medium text-sm disabled:opacity-50 transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <label className="font-family-montserrat-medium text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Fiyat
            </label>
            <span className="font-family-montserrat-medium text-sm text-gray-900 font-medium">
              ${formatPrice(priceRange[0])} - ${formatPrice(priceRange[1])}
            </span>
          </div>
          <Slider
            range
            min={0}
            max={5000}
            step={100}
            value={priceRange}
            onChange={(value) => setPriceRange(value as [number, number])}
            disabled={isLoading}
            styles={{
              track: { backgroundColor: '#e5e7eb' },
              tracks: { backgroundColor: '#111827' },
              handle: {
                backgroundColor: '#111827',
                borderColor: '#111827',
              }
            }}
          />
        </div>

        <div className="bg-gray-50 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <label className="font-family-montserrat-medium text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Popülerlik
            </label>
            <span className="font-family-montserrat-medium text-sm text-gray-900 font-medium">
              {popularityRange[0]} - {popularityRange[1]}
            </span>
          </div>
          <Slider
            range
            min={0}
            max={100}
            step={1}
            value={popularityRange}
            onChange={(value) => setPopularityRange(value as [number, number])}
            disabled={isLoading}
            styles={{
              track: { backgroundColor: '#e5e7eb' },
              tracks: { backgroundColor: '#111827' },
              handle: {
                backgroundColor: '#111827',
                borderColor: '#111827',
              }
            }}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleApplyFilters}
          disabled={isLoading}
          className="flex-1 py-3 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all font-family-montserrat-medium font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md cursor-pointer"
        >
          {isLoading ? 'Uygulanıyor...' : 'Filtrele'}
        </button>
        <button
          type="button"
          onClick={handleClearFilters}
          disabled={isLoading}
          className="px-6 py-3 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors font-family-montserrat-medium font-medium text-sm disabled:opacity-50 cursor-pointer"
        >
          Sıfırla
        </button>
      </div>
    </div>
  );
}
