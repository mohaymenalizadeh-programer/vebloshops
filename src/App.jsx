import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Category from './components/Category'
import ShopHomepage from './components/ShopHomepage'
import Shophometwo from './components/Shophometwo'
import NewCollection from './components/NewCollection'
import ImageSlider from './components/ImageSlider'
import Footer from './components/Footer'
import HrcSection from './components/HrcSection'
import NewCollectiontwo from './components/NewCollectiontwo'
function App() {
  const [count, setCount] = useState(0)

  return (
<div>
 <Navbar/>
 <Homepage/>
 <Category />
 <Shophometwo />
 <ShopHomepage />
 <NewCollection />
 <NewCollectiontwo />
 <HrcSection />
 <ImageSlider />
 <Footer />

 
</div>
  )
}

export default App
