import React from 'react'
import "../styles/HrcSection.css"

export default function HrcSection() {
  return (
    <section className="hrc">
      <div className="hrc-inner">
        <div className="hrc-content">
          <h2 className="hrc-title">هتل رستوران کافی شاپ</h2>
          <p className="hrc-text">
            مجموعه‌ای از باکیفیت‌ترین محصولات دکوراتیو از مبلمان راحت تا قطعات مدرن چیدمان؛ طراحی شده در تولیکا مخصوص مبلمان کافی‌شاپ‌ها و مبلمان رستوران‌ها که کیفیت و تمایز را اولویت قرار داده‌اند.
          </p>
          <a href="#" className="hrc-btn">محصولات HRC</a>
        </div>

        <div className="hrc-image">
          <img src="./images/site-version-6ab76fbeb08f4.gif" alt="مبلمان هتل رستوران و کافی شاپ" />
        </div>
      </div>
    </section>
  )
}