import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('ایمیل معتبر وارد کنید');
    } else {
      setError('');
      alert('ثبت‌نام با موفقیت انجام شد');
      setEmail('');
    }
  };

  return (
    <footer className="custom-site-footer-wrapper">
      <div className="custom-site-footer-container">
        
        {/* بخش سمت راست: ستون‌های لینک و لوگو */}
        <div className="custom-site-footer-right">
          <div className="custom-site-footer-logo-header">
            <img src="./images/logo.png" alt="لوگو" className="custom-site-footer-logo" />
          </div>

          <div className="custom-site-footer-columns">
            <div className="custom-site-footer-col">
              <h4>خدمات مشتریان</h4>
              <ul>
                <li><a href="#">راهنمای خرید از تولیکا</a></li>
                <li><a href="#">خدمات پس از فروش</a></li>
                <li><a href="#">چگونه با تولیکا چیدمان کنیم؟</a></li>
                <li><a href="#">سوالات متداول</a></li>
                <li><a href="#">قوانین چیدمان مبلمان</a></li>
                <li><a href="#">کافی شاپ تولیکا</a></li>
                <li><a href="#">اپلیکیشن تولیکا</a></li>
              </ul>
            </div>

            <div className="custom-site-footer-col">
              <h4>تخفیف ها و فروش ویژه</h4>
              <ul>
                <li><a href="#">شرایط اخذ نمایندگی</a></li>
                <li><a href="#">خبرنامه تولیکا</a></li>
                <li><a href="#">بولتن محصولات</a></li>
                <li><a href="#">کاتالوگ و بروشور</a></li>
                <li><a href="#">نمایندگی های فروش</a></li>
                <li><a href="#">لیست قیمت تولیکا</a></li>
              </ul>
            </div>

            <div className="custom-site-footer-col">
              <h4>شرکت ما</h4>
              <ul>
                <li><a href="#">درباره ما</a></li>
                <li><a href="#">فرم استخدام</a></li>
                <li><a href="#">تماس با ما</a></li>
                <li><a href="#">سخن طراحان</a></li>
                <li><a href="#">گواهینامه ها و استاندارد ها</a></li>
                <li><a href="#">نگاهی به کارخانه</a></li>
                <li><a href="#">ایمیل</a></li>
                <li><a href="#">مدیران تولیکا</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* بخش سمت چپ: خبرنامه و نمادها */}
        <div className="custom-site-footer-left">
          <div className="custom-site-footer-newsletter">
            <h3>خبرنامه ما را دریافت کنید</h3>
            <p>برای دریافت جدیدترین محصولات و ترندهای ما، ایمیل خود را وارد کنید.</p>
            
            <form onSubmit={handleSubscribe} className="custom-site-footer-form">
              <div className="custom-site-footer-input-group">
                <input 
                  type="text" 
                  placeholder="ایمیل شما ..." 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                />
                <button type="submit" aria-label="ارسال ایمیل">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              </div>
              {error && <span className="custom-site-footer-error">{error}</span>}
            </form>
          </div>

          <div className="custom-site-footer-bottom-left">
            <div className="custom-site-footer-enamad">
              <img src="./images/logo.png" alt="نماد اعتماد الکترونیکی" />
            </div>
            
            <div className="custom-site-footer-socials">
              <a href="#whatsapp" aria-label="واتس‌اپ">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              <a href="#instagram" aria-label="اینستاگرام">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* بخش کپی رایت و توسعه‌دهنده */}
      <div className="custom-site-footer-bottom-bar">
        <p>توسعه دهنده programeralizad</p>
      </div>

      {/* دکمه پشتیبانی شناور */}
      <button className="custom-site-footer-floating-support" aria-label="پشتیبانی">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;