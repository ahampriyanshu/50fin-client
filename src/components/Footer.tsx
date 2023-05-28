import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="mt-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}
            <Link to="https://resume.ahampriyanshu.com/" className="hover:underline ml-1">
              ahampriyanshu
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    )
}