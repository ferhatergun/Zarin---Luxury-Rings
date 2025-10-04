"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { message } from "antd";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";

const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, "İsim en az 2 karakter olmalıdır").required("İsim gereklidir"),
  email: Yup.string().email("Geçerli bir e-posta adresi girin").required("E-posta gereklidir"),
  message: Yup.string().min(10, "Mesaj en az 10 karakter olmalıdır").required("Mesaj gereklidir"),
});

export default function Contact() {
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = (values: any, { resetForm }: any) => {
    console.log("Form values:", values);
    messageApi.success("Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağız.");
    resetForm();
  };

  return (
    <>
      {contextHolder}
      <section id="contact" className="py-20 bg-white max-md:mx-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-family-avenir-book text-4xl font-normal text-gray-900 mb-6">
              İletişime Geçin
            </h2>
            <p className="font-family-montserrat-regular text-gray-600 mb-8">
              Yüzüklerimiz hakkında sorularınız mı var? Özel anınız için
              mükemmel parçayı bulmanıza yardımcı olmak için buradayız.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <PhoneOutlined className="text-2xl text-gray-900" />
                </div>
                <div>
                  <h3 className="font-family-montserrat-semibold text-base text-gray-900 mb-1">
                    Telefon
                  </h3>
                  <p className="font-family-avenir-book text-gray-600">
                    +90 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <MailOutlined className="text-2xl text-gray-900" />
                </div>
                <div>
                  <h3 className="font-family-montserrat-semibold text-base text-gray-900 mb-1">
                    E-posta
                  </h3>
                  <p className="font-family-avenir-book text-gray-600">
                    info@zarin.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <EnvironmentOutlined className="text-2xl text-gray-900" />
                </div>
                <div>
                  <h3 className="font-family-montserrat-semibold text-base text-gray-900 mb-1">
                    Adres
                  </h3>
                  <p className="font-family-avenir-book text-gray-600">
                    Bağdat Caddesi 123
                    <br />
                    Kadıköy, İstanbul
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-family-montserrat-semibold text-2xl text-gray-900 mb-6">
              Bize Mesaj Gönderin
            </h3>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={contactSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="space-y-6">
                  <div>
                    <label className="font-family-montserrat-medium text-sm text-gray-700 block mb-2">
                      İsim <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Adınız"
                      className={`w-full px-4 py-3 rounded-lg border font-family-avenir-book text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                        errors.name && touched.name
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-500 text-xs font-family-montserrat-regular"
                    />
                  </div>

                  <div>
                    <label className="font-family-montserrat-medium text-sm text-gray-700 block mb-2">
                      E-posta <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="ornek@email.com"
                      className={`w-full px-4 py-3 rounded-lg border font-family-avenir-book text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-xs font-family-montserrat-regular"
                    />
                  </div>

                  <div>
                    <label className="font-family-montserrat-medium text-sm text-gray-700 block mb-2">
                      Mesaj <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="message"
                      as="textarea"
                      rows={4}
                      placeholder="Hayalinizdeki yüzük hakkında bize bilgi verin..."
                      className={`w-full px-4 py-3 rounded-lg border font-family-avenir-book text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none ${
                        errors.message && touched.message
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  <ErrorMessage
                      name="message"
                      component="p"
                      className="text-red-500 text-xs -mt-1 font-family-montserrat-regular"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gray-900 text-white rounded-full cursor-pointer hover:bg-gray-800 transition-colors font-family-montserrat-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
