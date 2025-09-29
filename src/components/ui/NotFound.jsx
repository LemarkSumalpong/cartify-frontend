import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <header className='py-4 px-4 bg-blue-400'>
        <div className='container px-4 lg:px-4 py-4'>
            <div className='text-center text-white'>
                <h1>Page not Found</h1>
                <p>This pages does not exist.</p>
                <Link to='/' className='rounded-md px-4 py-2'>Home</Link>
            </div>
        </div>
    </header>
  )
}

export default NotFound