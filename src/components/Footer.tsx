import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="mt-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="https://www.50fin.in/"
              className="flex items-center mb-4 sm:mb-0 text-md font-semibold whitespace-nowrap dark:text-white"
            >
              Apply Now
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}
            <Link to="https://ahampriyanshu.com/" className="hover:underline ml-1">
              ahampriyanshu
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    )
}