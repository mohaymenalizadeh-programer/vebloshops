import React from 'react'
import "../styles/ShopHomepage.css"

const products = [
  { id: 1, title: 'مبل راحتی نیلوفر', desc: 'مبل سه نفره با پارچه ضد لک و پایه چوبی', price: 68500000, image: './images/5moh.webp' },
  { id: 2, title: 'تخت خواب دو نفره', desc: 'تخت یکپارچه با کلاف چوب راش و تاج چرم', price: 42900000, image: './images/6moh.webp' },
  { id: 3, title: 'میز ناهارخوری شش نفره', desc: 'صفحه ام دی اف براق با پایه فلزی مشکی', price: 37800000, image: './images/7moh.webp' },
  { id: 4, title: 'کمد لباس ریلی', desc: 'کمد سه درب با آینه قدی و کشوی داخلی', price: 51200000, image: './images/8moh.webp' },
  { id: 5, title: 'میز تلویزیون مدرن', desc: 'میز ۱۸۰ سانتی با فضای ذخیره‌سازی زیاد', price: 18600000, image: './images/9moh.webp' },
  { id: 6, title: 'صندلی راحتی فرانسوی', desc: 'صندلی تک نفره با روکش مخمل و پایه طلایی', price: 24300000, image: './images/10moh.webp' },
  { id: 7, title: 'جلومبلی چوبی', desc: 'میز دو تکه با چوب طبیعی و رنگ گردویی', price: 12900000, image: './images/11moh.webp' },
  { id: 8, title: 'سرویس خواب کودک', desc: 'تخت و کمد کودک با رنگ‌های ملایم و ایمن', price: 46700000, image: './images/12moh.webp' },
  { id: 9, title: 'کنسول ورودی', desc: 'کنسول باریک با دو کشو و پایه‌های چوبی', price: 9800000, image: './images/13moh.webp' },
  { id: 10, title: 'کتابخانه دیواری', desc: 'کتابخانه پنج طبقه با ساختار مقاوم و سبک', price: 14500000, image: './images/14moh.webp' },
]

export default function Shophometwo() {
  return (
    <section className="shop">
      <div className="shop-inner">
        <h2 className="shop-heading">جدیدترین محصولات</h2>

        <div className="shop-list">
          {products.map((product) => (
            <article className="product" key={product.id}>
              <a href="#" className="product-image">
                <img src={product.image} alt={product.title} />
              </a>
              <div className="product-bottom">
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-desc">{product.desc}</p>
                </div>
                <div className="product-price">
                  <span className="price-number">{product.price.toLocaleString('fa-IR')}</span>
                  <span className="price-unit">ریال</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}