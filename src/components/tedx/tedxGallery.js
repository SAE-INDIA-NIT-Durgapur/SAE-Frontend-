
import React, { useState } from 'react';
import '../../assets/css/tedCSS/style.css';
import CloseIcon from '@material-ui/icons/Close';

import img4 from '../../assets/images/g1.JPG'
import img2 from '../../assets/images/g2.JPG'
import img3 from '../../assets/images/g3.JPG'
import img5 from '../../assets/images/g4.JPG'
import img6 from '../../assets/images/g5.JPG'
import img7 from '../../assets/images/g6.jpg'

const Gallery = () => {

  let data =[
    {
      id: 1,
      imgSrc:img2,
    },

    {
      id: 2,
      imgSrc:img2,
    },

    {
      id: 3,
      imgSrc:img3,
    },
    {
      id: 4,
      imgSrc:img4,
    },

    {
      id: 5,
      imgSrc:img5,
    },

    {
      id: 6,
      imgSrc:img6,
    },
    {
      id: 7,
      imgSrc:img5,
    },
    {
      id: 8,
      imgSrc:img5,
    },
    {
      id: 9,
      imgSrc:img2,
    },
    {
      id: 8,
      imgSrc:img7,
    },
    {
      id: 8,
      imgSrc:img2,
    },
    {
      id: 8,
      imgSrc:img3,
    },
    {
      id: 8,
      imgSrc:img4,
    }

  ]

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc)=>
  {
     setTempImgSrc(imgSrc);
     setModel(true);
  }

  return (
    <>
    <div className={model ? "model open" : "model"}>
    <img src={tempimgSrc} alt="" />
    <CloseIcon onClick={()=>
    {
      setModel(false)
    }} />
    </div>
    <div className="gallery">
     
     {data.map((item, index)=>
     {
       return(
         <div className="pics" key={index} onClick={()=>
         {
           getImg(item.imgSrc)
         }}>
           <img src={item.imgSrc} alt="" style={{width:"100%"}} />
         </div>
       )
     })}
    </div>
     
    </>
  )
}

export default Gallery