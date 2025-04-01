import React from 'react'
import { IKImage } from 'imagekitio-react'
const Image = ({className, src, w, h, alt}) => {
  return (
      <IKImage urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
                path={src} 
                className={className}
                loading='lazy'
                width={w}
                height={h}
                alt={alt}
                transformation={
                  [{
                    width: w,
                    height: h
                  }]
                }
                    />
  )
}

export default Image;
