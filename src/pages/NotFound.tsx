import { Link } from "react-router-dom";

const NotFound = ({text = `Sorry this page doesn't exists!`}) => {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl dark:text-gray-200">
          {text}
        </p>
        <Link to="/">
          <button className="focus:shadow-outline-teal inline rounded-lg border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-teal-700 focus:outline-none dark:hover:bg-teal-500">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
