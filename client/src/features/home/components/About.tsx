'use client';

import { ArrowRightOutlined } from "@ant-design/icons";

export default function About() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative max-md:max-w-md mx-auto lg:mx-0 max-sm:max-w-sm">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="https://plus.unsplash.com/premium_photo-1744528608304-4ea0665bab72?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-50 rounded-full -z-10"></div>
          </div>

          <div className="max-md:mx-5">
            <div className="mb-6">
              <span className="font-family-montserrat-light text-sm text-gray-500 uppercase tracking-wider">
                Hikayemiz
              </span>
            </div>

            <h2 className="font-family-montserrat-medium text-3xl lg:text-5xl text-gray-900 mb-6">
              2014'ten Beri Unutulmaz Anlar Yaratıyoruz
            </h2>

            <div className="space-y-4 mb-8">
              <p className="font-family-montserrat-regular text-gray-600 leading-relaxed">
                Zarin'de, her aşk hikayesinin temsil ettiği bağ kadar eşsiz ve
                kalıcı bir mücevheri hak ettiğine inanıyoruz. Usta
                zanaatkarlarımız, trendleri aşan yüzükleri yaratmak için
                geleneksel teknikleri çağdaş tasarımla birleştiriyor.
              </p>
              <p className="font-family-montserrat-regular text-gray-600 leading-relaxed">
                Her parça, sadece en kaliteli malzemeler kullanılarak titizlikle
                el yapımıdır ve bağlılık sembolünüzün aşk hikayeniz kadar
                olağanüstü olmasını sağlar. İlk tasarımdan son cilaya kadar her
                detay, hassasiyet ve tutkuyla işlenir.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="font-family-avenir-heavy text-3xl font-semibold text-gray-900 mb-1">
                  10+
                </div>
                <div className="font-family-montserrat-regular text-sm text-gray-600">
                  Yıl Tecrübe
                </div>
              </div>
              <div>
                <div className="font-family-avenir-heavy text-3xl font-semibold text-gray-900 mb-1">
                  5000+
                </div>
                <div className="font-family-montserrat-regular text-sm text-gray-600">
                  Mutlu Çift
                </div>
              </div>
              <div>
                <div className="font-family-avenir-heavy text-3xl font-semibold text-gray-900 mb-1">
                  100%
                </div>
                <div className="font-family-montserrat-regular text-sm text-gray-600">
                  El Yapımı
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <button
                onClick={scrollToContact}
                className="font-family-montserrat-regular inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                Hikayemizi Keşfedin
                <ArrowRightOutlined className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
