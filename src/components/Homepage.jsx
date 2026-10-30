import React, { useState, useEffect } from 'react'
import "../styles/Homepage.css"

const slides = [
  { id: 1, image: './images/slider-2-copy-2-6add99c191a52 (1).webp', alt: 'توضیح تصویر اول' },
  { id: 2, image: './images/tolica-6-1-copy-6add9a663095a.webp', alt: 'توضیح تصویر دوم' },
  { id: 3, image: './images/tolica-7-2-6ab3d418d3a18.webp', alt: 'توضیح تصویر سوم' },
]

export default function Homepage() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(next, 2000)
    return () => clearTimeout(timer)
  }, [current, paused])

  return (
    <main>
      <section
        className="slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className="slide" key={slide.id}>
              <img  src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </div>

        <button className="slider-btn slider-btn-prev" onClick={prev} aria-label="اسلاید قبلی">‹</button>
        <button className="slider-btn slider-btn-next" onClick={next} aria-label="اسلاید بعدی">›</button>

        <div className="slider-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={index === current ? 'dot active' : 'dot'}
              onClick={() => setCurrent(index)}
              aria-label={`رفتن به اسلاید ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </main>
  )
}