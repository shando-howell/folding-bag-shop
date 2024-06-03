// Component imports
import NavBar from './components/NavBar/NavBar'
import FeatureImage from './components/FeatureImage/FeatureImage'
import ProductDetails from './components/ProductDetails/ProductDetails'
import GalleryPreview from './components/GalleryPreview/GalleryPreview'
import PurchaseCard from './components/PurchaseCard/PurchaseCard'

// Stylesheet imports
import './App.css'

function App() {
  
  return (
    <>
      <NavBar/>
      <div className="highlights">
        <GalleryPreview />
        <FeatureImage/>
        <ProductDetails/>
        <PurchaseCard/>
      </div>
    </>
  )
}

export default App
