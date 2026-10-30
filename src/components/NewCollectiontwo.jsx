import React from 'react'
import "../styles/NewCollectiontwo.css"

const items = [
  { id: 1, image: './images/yam1.webp', alt: 'توضیح تصویر اول', link: '#' },
  { id: 2, image: './images/threee.webp', alt: 'توضیح تصویر دوم', link: '#' },
  { id: 3, image: './images/yam3.webp', alt: 'توضیح تصویر سوم', link: '#' },
  { id: 4, image: './images/yam4.webp', alt: 'توضیح تصویر چهارم', link: '#' },
]

export default function NewCollectiontwo() {
  return (
    <section className="collection">
      <div className="collection-inner">

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