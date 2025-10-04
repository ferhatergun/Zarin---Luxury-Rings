'use client';

import { StarFilled, MessageOutlined } from '@ant-design/icons';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ayşe Yılmaz",
      role: "Nişanlı Çift",
      content: "Zarin'den aldığımız yüzükler harika! El işçiliği mükemmel, her detay özenle yapılmış. Kesinlikle tavsiye ederim.",
      rating: 5,
      location: "İstanbul"
    },
    {
      id: 2,
      name: "Mehmet Kaya",
      role: "Yıldönümü Hediyesi",
      content: "Eşim için aldığım kolye çok şık oldu. Kalitesi ve tasarımı muhteşem. Zarin'a teşekkürler!",
      rating: 5,
      location: "Ankara"
    },
    {
      id: 3,
      name: "Zeynep Demir",
      role: "Evlilik Yüzüğü",
      content: "Hayalimdekilerin bile ötesinde bir yüzük. Müşteri hizmetleri de çok ilgili ve yardımcı. Çok memnunuz.",
      rating: 5,
      location: "İzmir"
    },
    {
      id: 4,
      name: "Can Öztürk",
      role: "Özel Tasarım",
      content: "Özel tasarım yüzük yaptırdık, sonuç harika oldu! Tasarım aşamasından teslimata kadar her şey kusursuzdu.",
      rating: 5,
      location: "Bursa"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-family-avenir-light text-4xl md:text-5xl font-normal text-gray-900 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="font-family-montserrat-medium text-gray-600 text-lg">
            Binlerce mutlu müşterimizden bazı yorumlar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-6">
                <MessageOutlined className="text-4xl text-gray-300" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarFilled key={i} className="text-yellow-400 text-lg" />
                ))}

              </div>

              <p className="font-family-montserrat-regular text-gray-700 text-base leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="font-family-avenir-heavy text-xl font-semibold text-gray-700">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-family-montserrat-light font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="font-family-avenir-roman text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="font-family-avenir-roman text-4xl md:text-5xl font-bold text-gray-900 mb-2">5000+</div>
            <div className="font-family-montserrat-regular text-sm text-gray-600">Mutlu Müşteri</div>
          </div>
          <div className="text-center">
            <div className="font-family-avenir-roman text-4xl md:text-5xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="font-family-montserrat-regular text-sm text-gray-600">Ortalama Puan</div>
          </div>
          <div className="text-center">
            <div className="font-family-avenir-roman text-4xl md:text-5xl font-bold text-gray-900 mb-2">100%</div>
            <div className="font-family-montserrat-regular text-sm text-gray-600">Memnuniyet</div>
          </div>
          <div className="text-center">
            <div className="font-family-avenir-roman text-4xl md:text-5xl font-bold text-gray-900 mb-2">10+</div>
            <div className="font-family-montserrat-regular text-sm text-gray-600">Yıl Tecrübe</div>
          </div>
        </div>
      </div>
    </section>
  );
}
