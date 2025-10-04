import { Layout, Row, Col, Typography, Space, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const LinkItem = ({ to, label }: any) => (
  <div>
    <Link href={to} className="footer-custom-link flex items-center group cursor-pointer">
      <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
      <span className="footer-link-text">{label}</span>
    </Link>
  </div>
);

const Section = ({ title, children }: any) => (
  <Col xs={24} sm={12} lg={6}>
    <Title
      level={5}
      className="mb-4 font-family-montserrat-medium flex items-center space-x-2"
    >
      <span className="text-gray-600 text-base">{title}</span>
    </Title>
    <div className="space-y-3">{children}</div>
  </Col>
);

const Footer = () => {
  return (
    <AntFooter className="!bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/10 to-amber-300/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 relative z-10">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} lg={6}>
            <div className="mb-6">
              <Link href="/" className="flex items-center space-x-2 mb-4 group cursor-pointer">
                <img
                  src="/logo.png"
                  alt="Zarin Logosu"
                  className="w-32 object-contain"
                />
              </Link>
              <Text className="text-gray-400 text-sm leading-relaxed block mb-4">
                2025'ten beri zamansız mücevher parçaları yaratıyoruz.
                Olağanüstü işçilik ve zarif tasarımın buluştuğu yer.
              </Text>
            </div>
            <Space size="large">
              {[
                FacebookOutlined,
                TwitterOutlined,
                InstagramOutlined,
                LinkedinOutlined,
              ].map((Icon, index) => (
                <Link key={index} href="/" className="cursor-pointer">
                  <Icon className="text-xl !text-gray-700 hover:!text-gray-500 transition-all duration-300 hover:!scale-110" />
                </Link>
              ))}
            </Space>
          </Col>

          <Section title="Alışveriş">
            <LinkItem to="/products" label="Tüm Ürünler" />
            <LinkItem to="#" label="Yeni Gelenler" />
            <LinkItem to="#" label="Çok Satanlar" />
            <LinkItem to="#" label="Koleksiyonlar" />
          </Section>

          <Section title="Müşteri Hizmetleri">
            <LinkItem to="#contact" label="İletişim" />
            <LinkItem to="#" label="Kargo Bilgisi" />
            <LinkItem to="#" label="İade" />
            <LinkItem to="#" label="SSS" />
            <LinkItem to="#" label="Beden Rehberi" />
          </Section>

          <Section title="İletişim">
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <EnvironmentOutlined className="text-gray-400 text-sm" />
                </div>
                <Text className="text-gray-400 text-sm leading-relaxed">
                  Bağdat Caddesi 123
                  <br />
                  Kadıköy, İstanbul
                </Text>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <PhoneOutlined className="text-gray-400 text-sm" />
                </div>
                <Text className="text-gray-400 text-sm">
                  +90 (555) 123-4567
                </Text>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <MailOutlined className="text-gray-400 text-sm" />
                </div>
                <Text className="text-gray-400 text-sm">info@zarin.com</Text>
              </div>
            </div>
          </Section>
        </Row>

        <Divider className="border-gray-800 my-8" />

        <Row justify="space-between" align="middle" className="text-sm">
          <Col
            xs={24}
            md={12}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Text className="text-gray-400">© 2025 Zarin</Text>
              <Text className="text-gray-400">Tüm hakları saklıdır.</Text>
            </div>
          </Col>
          <Col xs={24} md={12} className="text-center md:text-right">
            <Space size="large">
              <LinkItem to="/" label="Gizlilik Politikası" />
              <LinkItem to="/" label="Kullanım Şartları" />
              <LinkItem to="/" label="Çerez Politikası" />
            </Space>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;
