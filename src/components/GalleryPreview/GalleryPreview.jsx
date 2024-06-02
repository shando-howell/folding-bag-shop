// Image imports
import TB_1 from '../../assets/images/TB_1.jpg'
import TB_2 from '../../assets/images/TB_2.jpg'
import TB_3 from '../../assets/images/TB_3.jpg'
import TB_4 from '../../assets/images/TB_4.jpg'
import TB_5 from '../../assets/images/TB_5.jpg'
import TB_6 from '../../assets/images/TB_6.jpg'

import '../GalleryPreview/GalleryPreview.css'

const GalleryPreview = () => {
  return (
    <>
        <div className="">
            <img src={TB_1} alt="Folding Bag 1" className="gallery"/>
            <img src={TB_2} alt="Folding Bag 2" className="gallery"/>
            <img src={TB_3} alt="Folding Bag 3" className="gallery"/>
            <img src={TB_4} alt="Folding Bag 4" className="gallery"/>
            <img src={TB_5} alt="Folding Bag 5" className="gallery"/>
            <img src={TB_6} alt="Folding Bag 6" className="gallery"/>
        </div>
    </>
  )
}

export default GalleryPreview