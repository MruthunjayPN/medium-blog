import "flowbite";
import { useNavigate } from "react-router-dom";


function BlogHeader({name} : {name : string}) {
  const navigate = useNavigate();
  

  const logoutClick = () => {
    localStorage.removeItem("token");
    navigate("/signup");
  };



  return (
    <div>
      <nav className="flex justify-items-end" aria-label="Breadcrumb">
        <ol className="flex justify-between w-screen items-center px-5 sm:mb-0">
          {/* Project Dropdown */}
          <li>
            <div className="flex items-center mt-5 mb-2">
              <button
                id="dropdownProject"
                data-dropdown-toggle="dropdown-project"
                className="inline-flex items-center px-3 py-2 text-3xl font-semibold text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-white focus:ring-4 focus:outline-none"
              >
                MEDIUM
              </button>
              <div
                id="dropdown-project"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
              >
                <ul className="py-2 text-base">
                  <li>
                    <a href="/blogs" className="block px-4 py-2">
                      Home
                    </a>
                  </li>
                  <li>
                    <button className="w-full text-left block px-4 py-2">
                      Go to Blog
                    </button>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      Authors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          {/* User Dropdown */}
          <li aria-current="page">
            <div className="flex items-center">
              <button
                id="dropdownDatabase"
                data-dropdown-toggle="dropdown-database"
                className="inline-flex items-center px-3 py-2 text-xl font-medium"
              > {` ${name}`}
                {/* {name} */}
              </button>
              <div
                id="dropdown-database"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
              >
                <ul className="py-2 text-base">
                  <li>
                    <a href="#" className="block px-4 py-2">
                      My Blogs
                    </a>
                  </li>
                  <li>
                    <a href="/addBlog" className="block px-4 py-2">
                      Create Blog
                    </a>
                  </li>
                  <li>
                    <button onClick={logoutClick} className="block px-4 py-2">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default BlogHeader;
