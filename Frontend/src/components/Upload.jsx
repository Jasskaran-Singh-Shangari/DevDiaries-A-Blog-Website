import { IKContext, IKUpload } from 'imagekitio-react'
import React, { useRef } from 'react'
import { toast } from 'react-toastify'

const Upload = ({
    setProgress,
    setData,
    children, 
    type
}) => {

    const authenticator =  async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/upload-auth`);
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Request failed with status ${response.status}: ${errorText}`);
            }
    
            const data = await response.json();
            const { signature, expire, token } = data;
            return { signature, expire, token };
        } catch (error) {
            throw new Error(`Authentication request failed: ${error.message}`);
        }
    };

    const ref=useRef()
    const onError=(err)=>{
        console.log(err)
        toast.error("Image Upload Failed")
    }
    const onSuccess=(res)=>{
        console.log(res)
        setData(res)
        toast.success(`Uploaded Successfully`)
    }
    const onUploadProgress=(progress)=>{
        console.log(progress)
        setProgress(Math.round((progress.loaded/progress.total)*100))
    }


  return (
        <IKContext publicKey={import.meta.env.VITE_IK_PUBLIC_KEY} urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} authenticator={authenticator} >
        {/* ...child components */}
          <IKUpload
            // fileName="test-upload.png"
            useUniqueFileName
            onError={onError}
            onSuccess={onSuccess}
            onUploadProgress={onUploadProgress}
            ref={ref}
            className='hidden'
            accept={`${type}/*`}
          />

            <div onClick={()=>ref.current.click()} className="cursor-pointer">{children}</div>
        </IKContext>
        
      
  )
}

export default Upload
