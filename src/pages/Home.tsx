import React, {
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../api";
import { PostListResponse } from "../types";
import { useParams } from "react-router-dom";
import { Pagination } from "../components/Pagination";
import PostCard from "../components/PostCard";
import { Loader } from "../components/Loader";

const Home: React.FC = () => {
  const { pageNumber } = useParams();
  const searchQuery = new URLSearchParams(location.search).get('query');
  const [isLoading, setIsLoading] = useState(true);
  const [postList, setPostList] = useState<PostListResponse>();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const queryParams = { page: pageNumber || 1, search: searchQuery || '' };
        const response = await getPosts(queryParams);
        setPostList(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [pageNumber, searchQuery]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-4">
      {!searchQuery && !pageNumber &&
      <div className="text-center mb-12">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Welcome to
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {" "}
            50Fin
          </span>{" "}
          blog
        </h1>

        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Loans Against Mutual Funds at just 1% per month
        </p>
        <Link
          to="https://www.50fin.in/"
          target="_blank"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-900"
        >
          Learn more
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
}

<PostCard posts={postList?.data} />
<Pagination pageNumber={pageNumber} metadata={postList?.metadata} searchQuery={searchQuery} />

    </div>
  );
};

export default Home;
