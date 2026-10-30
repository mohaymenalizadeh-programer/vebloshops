import React, { useState, useEffect } from 'react'
import "../styles/Navbar.css"

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 128 128" fill="currentColor">
      <path d="M 52.349609 14.400391 C 42.624609 14.400391 32.9 18.1 25.5 25.5 C 10.7 40.3 10.7 64.399219 25.5 79.199219 C 32.9 86.599219 42.600391 90.300781 52.400391 90.300781 C 62.200391 90.300781 71.900781 86.599219 79.300781 79.199219 C 94.000781 64.399219 93.999219 40.3 79.199219 25.5 C 71.799219 18.1 62.074609 14.400391 52.349609 14.400391 z M 52.300781 20.300781 C 60.500781 20.300781 68.700391 23.399219 74.900391 29.699219 C 87.400391 42.199219 87.4 62.5 75 75 C 62.5 87.5 42.199219 87.5 29.699219 75 C 17.199219 62.5 17.199219 42.199219 29.699219 29.699219 C 35.899219 23.499219 44.100781 20.300781 52.300781 20.300781 z M 52.300781 26.300781 C 45.400781 26.300781 38.9 29 34 34 C 29.3 38.7 26.700391 44.800391 26.400391 51.400391 C 26.300391 53.100391 27.600781 54.4 29.300781 54.5 L 29.400391 54.5 C 31.000391 54.5 32.300391 53.199609 32.400391 51.599609 C 32.600391 46.499609 34.699219 41.799219 38.199219 38.199219 C 41.999219 34.399219 47.000781 32.300781 52.300781 32.300781 C 54.000781 32.300781 55.300781 31.000781 55.300781 29.300781 C 55.300781 27.600781 54.000781 26.300781 52.300781 26.300781 z M 35 64 A 3 3 0 0 0 32 67 A 3 3 0 0 0 35 70 A 3 3 0 0 0 38 67 A 3 3 0 0 0 35 64 z M 83.363281 80.5 C 82.600781 80.5 81.850781 80.800391 81.300781 81.400391 C 80.100781 82.600391 80.100781 84.499609 81.300781 85.599609 L 83.800781 88.099609 C 83.200781 89.299609 82.900391 90.6 82.900391 92 C 82.900391 94.4 83.8 96.700391 85.5 98.400391 L 98.300781 111 C 100.10078 112.8 102.39922 113.69922 104.69922 113.69922 C 106.99922 113.69922 109.29961 112.79961 111.09961 111.09961 C 114.59961 107.59961 114.59961 101.90039 111.09961 98.400391 L 98.300781 85.599609 C 96.600781 83.899609 94.300391 83 91.900391 83 C 90.500391 83 89.2 83.300391 88 83.900391 L 85.5 81.400391 C 84.9 80.800391 84.125781 80.5 83.363281 80.5 z M 91.900391 88.900391 C 92.700391 88.900391 93.5 89.200781 94 89.800781 L 106.69922 102.5 C 107.89922 103.7 107.89922 105.59922 106.69922 106.69922 C 105.49922 107.89922 103.6 107.89922 102.5 106.69922 L 89.800781 94.099609 C 89.200781 93.499609 88.900391 92.700391 88.900391 91.900391 C 88.900391 91.100391 89.200781 90.300781 89.800781 89.800781 C 90.400781 89.200781 91.100391 88.900391 91.900391 88.900391 z"></path>
    </svg>
  )
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="currentColor">
      <path d="M9.18,10.83Q8,9.65 8,8T9.18,5.18T12,4t2.83,1.18T16,8t-1.17,2.82T12,12T9.18,10.83ZM4,20V17.2q0-0.85 0.44-1.56q0.44-0.71 1.16-1.09q1.55-0.78 3.15-1.16T12,13t3.25,0.39t3.15,1.16q0.72,0.38 1.16,1.09T20,17.2V20H4Zm2-2H18V17.2q0-0.27-0.14-0.5q-0.14-0.22-0.36-0.35q-1.35-0.68-2.72-1.01T12,15T9.23,15.34T6.5,16.35Q6.28,16.48 6.14,16.7Q6,16.93 6,17.2V18Zm7.41-8.59Q14,8.82 14,8T13.41,6.59T12,6T10.59,6.59Q10,7.18 10,8t0.59,1.41T12,10t1.41-0.59ZM12,8Zm0,10Z" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="currentColor">
      <path d="M6,22q-0.82,0-1.41-0.59T4,20V8Q4,7.18 4.59,6.59T6,6H8Q8,4.35 9.18,3.17T12,2t2.83,1.17T16,6h2q0.82,0 1.41,0.59Q20,7.18 20,8V20q0,0.82-0.59,1.41T18,22H6Zm0-2H18V8H16v2q0,0.42-0.29,0.71T15,11t-0.71-0.29Q14,10.43 14,10V8H10v2q0,0.42-0.29,0.71T9,11q-0.42,0-0.71-0.29Q8,10.43 8,10V8H6V20ZM10,6h4q0-0.82-0.59-1.41T12,4T10.59,4.59Q10,5.18 10,6ZM6,20V8V20Z" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = () => setOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <img className='looogooo' src="./images/logo.png" alt="" />
        </div>
 
        <nav className={open ? 'menu open' : 'menu'}>
          <button className="close-btn" onClick={closeMenu} aria-label="بستن منو">✕</button>
          <div className="nav-links">
            <a href="#" onClick={closeMenu}>سرویس پذیرایی</a>
            <a href="#" onClick={closeMenu}>سرویس خواب</a>
            <a href="#" onClick={closeMenu}>سرویس ناهارخوری</a>
            <a href="#" onClick={closeMenu}>دکوراسیون منزل</a>
            <a href="#" onClick={closeMenu}>پروژه های اجرایی</a>
            <a href="#" onClick={closeMenu}>محصولات اماده</a>
            <a href="#" onClick={closeMenu}> جدید ترین محصولات</a>
          </div>
          <div className="menu-icons">
            <SearchIcon />
            <UserIcon />
            <BagIcon />
          </div>
        </nav>

        <div className="icons">
          <div className="icon-login">
            <button className="btnnavbar">
              <p className="pnavbar">ورود / ثبت نام</p>
            </button>
          </div>
          <div className="icon-item"><SearchIcon /></div>
          <div className="icon-item"><UserIcon /></div>
          <div className="icon-item"><BagIcon /></div>
        </div>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="باز کردن منو">☰</button>
      </div>
    </header>
  )
}