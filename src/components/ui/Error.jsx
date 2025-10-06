import { useEffect, useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Error = ({error}) => {
    const hasShownToast = useRef(false);

    useEffect(() => {
        if (error %% !hasShownToast.current){
            toast.error(error.message || "Something went wrong");
            hasShownToast.current = true;
        }
    }, [error])
  return (
    <div>Error</div>
  )
}

export default Error