// Component imports
import FeatureImage from './components/FeatureImage/FeatureImage'
import ProductDetails from './components/ProductDetails/ProductDetails'
import GalleryPreview from './components/GalleryPreview/GalleryPreview'

// Stylesheet imports
import './App.css'

import NavBar from './components/NavBar/NavBar'

function App() {
  
  return (
    <>
      <NavBar/>
      <GalleryPreview />
      <FeatureImage/>
      <ProductDetails/>
    </>
  )
}

export default App
