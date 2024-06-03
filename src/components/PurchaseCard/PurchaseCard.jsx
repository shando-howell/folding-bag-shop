import './PurchaseCard.css'

const PurchaseCard = () => {
  const handleAddToCart = () => {
    console.log('Add To Product Cart')
  }

  return (
    <div>
        <h3>$49.99</h3>
        <button className="Add-To-Cart" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default PurchaseCard