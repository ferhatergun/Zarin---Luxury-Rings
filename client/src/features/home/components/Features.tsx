import { GiftOutlined, SafetyOutlined, CreditCardOutlined, SwapOutlined } from '@ant-design/icons';

export default function Features() {
  const features = [
    {
      icon: <GiftOutlined className="text-3xl" />,
      title: "Ücretsiz Kargo",
      description: "500 TL ve üzeri tüm siparişlerde ücretsiz teslimat"
    },
    {
      icon: <SafetyOutlined className="text-3xl" />,
      title: "Ömür Boyu Garanti",
      description: "Tüm ürünlerimizde kapsamlı garanti"
    },
    {
      icon: <CreditCardOutlined className="text-3xl" />,
      title: "Güvenli Ödeme",
      description: "%100 güvenli ödeme garantisi"
    },
    {
      icon: <SwapOutlined className="text-3xl" />,
      title: "Kolay İade",
      description: "30 gün sorunsuz iade hakkı"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-100 text-gray-900 mb-3 sm:mb-4">
                <div className="text-xl sm:text-2xl md:text-3xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-family-montserrat-semibold text-sm sm:text-base md:text-lg text-gray-900 mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="font-family-avenir-book text-xs sm:text-sm text-gray-600 px-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
