import { useEffect, useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Error = ({error}) => {
    const hasShownToast = useRef(false);

    useEffect(() => {
        if (error && !hasShownToast.current){
            toast.error(error.message || "Something went wrong");
            hasShownToast.current = true;
        }
    }, [error])
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
        <h1 className="text-3xl font-bold text-red-600">Error Occured</h1>
         <p className="text-gray-700 mt-2">
        {error?.message || "We couldn’t load your data."}
      </p>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default Error