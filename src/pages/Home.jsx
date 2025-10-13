
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="p-4">
        Home Page Content
        <div className="mt-4">
          <Link to="/school-registration" className="text-blue-600 hover:underline">Go to School Registration Page</Link>
        </div>
      </div>
    </>
  )
}

export default Home