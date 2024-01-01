// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: 'Home',
          shop: 'Shop',
          pages: 'Pages',
          contact: 'Contact'
        },
      },
      vn: {
        translation: {
          home: 'Trang chủ',
          shop: 'Cửa hàng',
          pages: 'Danh mục',
          contact: 'Liên hệ'
        },
      },
      // Add more languages as needed
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
