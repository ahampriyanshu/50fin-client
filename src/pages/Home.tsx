import React, {
  DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../api";
import { PostListResponse } from "../types";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { truncateText } from "../utils";
import PostCard from "../components/PostCard";

const Pagination = ({ page, totalPages }) => {
  const { pageNumber } = useParams();

  return (
    <div className="font-sans flex md:mt-8 justify-between text-gray-600 dark:text-gray-400 content-center px-4 mt-5">
      {page > 2 && (
        <div className="text-left">
          <Link to={`/page/${page}`}>
            <span className="text-sm md:text-base font-normal no-underline hover:underline">
              &lt; Previous Page
            </span>
            <br />
          </Link>
        </div>
      )}
      <div className="text-center mx-auto">
        <span className="text-sm md:text-base font-normal">
          Page {pageNumber} of {totalPages}
        </span>
        <br />
      </div>
      {page < 10 && (
        <div className="text-right">
          <Link to={`/page/${page}`}>
            <span className="text-sm md:text-base font-normal no-underline hover:underline">
              Next Page &gt;
            </span>
            <br />
          </Link>
        </div>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  const { pageNumber } = useParams();
  const [postList, setPostList] = useState<PostListResponse[]>([]);
  const [posts, setPosts] = useState<PostListResponse[]>([]);

  const fetchPosts = async () => {
    try {
      const queryParams = { page: pageNumber || 1 };
      const response = await getPosts(queryParams);
      setPosts(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="mt-4">
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
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>

      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && (
          <NotFound text="No result found for the given query" />
        )}
        {posts.map((post) => {
          const { title, slug, body, created_at } = post;
          return (
            <li key={slug} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      {new Date(created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link
                            to={`/posts/${slug}`}
                            className="text-gray-900 dark:text-gray-100"
                          >
                            {title}
                          </Link>
                        </h2>
                      </div>
                      <div className="prose max-w-none text-gray-600 dark:text-gray-400">
              
                        {truncateText(body)}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        to={`/posts/${slug}`}
                        className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 no-underline"
                        aria-label={`Read "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>


    </div>
  );
};

export default Home;
