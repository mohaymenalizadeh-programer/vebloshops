import React from 'react'
import "../styles/Category.css"

const categories = [
  { id: 1, title: 'سرویس خواب', image: './images/one.webp', alt: 'سرویس خواب', link: '#', big: true },
  { id: 2, title: 'سرویس پذیرایی مبلمان', image: './images/twoo.webp', alt: 'سرویس پذیرایی مبلمان', link: '#' },
  { id: 3, title: 'سرویس نهار خوری', image: './images/threee.webp', alt: 'سرویس نهار خوری', link: '#' },
]

export default function Category() {
  return (
    <section className="category">
      <div className="category-grid">
        {categories.map((item) => (
          <div
            key={item.id}
            className={item.big ? 'category-card category-card-big' : 'category-card'}
          >
            <img src={item.image} alt={item.alt} />
            <div className="category-info">
              <h2 className="category-title">{item.title}</h2>
              <a href={item.link} className="category-link">مشاهده و خرید</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}