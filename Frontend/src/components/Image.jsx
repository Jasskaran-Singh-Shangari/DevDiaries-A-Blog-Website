import React from 'react'
import { IKImage } from 'imagekitio-react'
const Image = ({className, src, w, h, alt}) => {
  return (
    <div>
      <IKImage urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
                path={src} 
                className={className}
                loading='lazy'
                width={w}
                height={h}
                alt={alt}
                    />
    </div>
  )
}

export default Image
