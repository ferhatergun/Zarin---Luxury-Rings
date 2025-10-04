import ProductCarousel from "./ProductCarousel";
import { Product } from "@/shared/types";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

interface PopularProductsProps {
  products: Product[];
}

export default function PopularProducts({ products }: PopularProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className={"py-16 bg-white"}>
      <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
        <div className="mb-12 text-center">
          <h2 className="font-family-avenir-roman text-4xl font-normal text-gray-900 mb-4">
            Popüler Ürünler
          </h2>
          <p className="font-family-montserrat-light text-gray-600">
            En çok tercih edilen ürünlerimiz
          </p>
        </div>
        <ProductCarousel products={products} />
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="font-family-montserrat-regular inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Tüm Koleksiyonu Gör
            <ArrowRightOutlined className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
