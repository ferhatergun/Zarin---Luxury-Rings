# Zarin

Zarin, 2014'ten beri faaliyet gösteren el yapımı yüzük ve mücevher satışı yapmaktadır. Aşk ve bağlılık sembolü olan özel tasarım yüzüklerin online satışını yapmaktadır. Next.js 15 ve Express.js ile geliştirilmiş, modern ve zarif bir deneyim sunar.

## Proje Hakkında

- 🎨 **Ürünler:** El yapımı yüzükler, 3 farklı altın seçeneği (sarı, beyaz, rose)
- ⭐ **Özellikler:** Ürün filtreleme, renk seçimi, yıldız bazlı popülerlik sistemi
- 📱 **Responsive:** Mobil ve desktop uyumlu minimalist tasarım

## Klasör Yapısı

```
Zarin/
├── client/                      # Next.js frontend uygulaması
│   ├── app/                     # Next.js App Router sayfaları
│   ├── src/
│   │   ├── features/           # Özellik bazlı modüller
│   │   │   ├── home/           # Ana sayfa bileşenleri 
│   │   │   └── products/       # Ürün bileşenleri
│   │   │       ├── api/        # Ürün API çağrıları
│   │   │       └── components/ # Ürün UI bileşenleri
│   │   └── shared/             # Paylaşılan kaynaklar
│   │       ├── components/     # Ortak bileşenler
│   │       ├── types/          # TypeScript type tanımları
│   │       └── styles/         # Global stiller
│   └── public/                  # Statik dosyalar (resimler, fontlar)
│
└── server/                      # Express.js backend API
    └── src/
        ├── controllers/         # İş mantığı controller'ları
        ├── routes/              # API route tanımları
        ├── services/            # Servis katmanı
        └── data/                # Veri dosyaları
```

## Teknolojiler

**Client:**
- Next.js 15.5
- React 19
- TypeScript
- Tailwind CSS
- Ant Design
- Formik & Yup

**Server:**
- Express.js
- Node.js
- Axios
- CORS

## Kurulum

1. Projeyi klonlayın
2. Her iki klasörde bağımlılıkları yükleyin:

```bash
# Client kurulumu
cd client
npm install

# Server kurulumu
cd ../server
npm install
```

3. Environment dosyalarını yapılandırın:
   - `client/.env.local` oluşturun
   - `server/.env` oluşturun

## Çalıştırma

### Development (Geliştirme)

İki terminal penceresi açın:

```bash
# Terminal 1 - Client
cd client
npm run dev
```

```bash
# Terminal 2 - Server
cd server
npm run dev
```

- Client: http://localhost:3000
- Server: http://localhost:5000 (veya .env'de belirlenen port)

### Production

```bash
# Client build
cd client
npm run build
npm start

# Server
cd server
npm start
```
