import axios from 'axios';
import { Product } from '@/shared/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface FilterParams {
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  minPopularity?: number;
  maxPopularity?: number;
}

export interface ProductsResponse {
  success: boolean;
  data: Product[];
  goldPrice: number;
  count: number;
}

export async function getProducts(filters?: FilterParams): Promise<ProductsResponse> {
  const params = new URLSearchParams();

  if (filters?.search) params.append('search', filters.search);
  if (filters?.minPrice) params.append('minPrice', filters.minPrice.toString());
  if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
  if (filters?.minPopularity) params.append('minPopularity', filters.minPopularity.toString());
  if (filters?.maxPopularity) params.append('maxPopularity', filters.maxPopularity.toString());

  const url = API_BASE_URL + '/products' + (params.toString() ? '?' + params.toString() : '');
  const response = await axios.get<ProductsResponse>(url);
  return response.data;
}
