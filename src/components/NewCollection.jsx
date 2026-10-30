import React from 'react'
import "../styles/NewCollection.css"

const items = [
  { id: 1, image: './images/go1.webp', alt: 'توضیح تصویر اول', link: '#' },
  { id: 2, image: './images/go2.webp', alt: 'توضیح تصویر دوم', link: '#' },
  { id: 3, image: './images/go3.webp', alt: 'توضیح تصویر سوم', link: '#' },
  { id: 4, image: './images/oooooo.webp', alt: 'توضیح تصویر چهارم', link: '#' },
]

export default function NewCollection() {
  return (
    <section className="collection">
      <div className="collection-inner">
        <h2 className="collection-title">NEW COLLECTION</h2>

        <div className="collection-grid">
          {items.map((item) => (
            <a href={item.link} className="collection-item" key={item.id}>
              <img src={item.image} alt={item.alt} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}