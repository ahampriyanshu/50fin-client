import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getPost } from "../api";
import { getReadableData } from "../utils";
import { Loader } from "../components/Loader";
import NotFound from "./NotFound";
import { deletePost } from "../api";
import {
  PostInterface,
  SinglePostResponse,
} from "../types";
import { truncateText } from "../utils";

const Post = () => {
  const { identifier } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); 
  const [responseData, setResponseDate] = useState<SinglePostResponse>();
  const [postData, setPostData] = useState<PostInterface>();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPost(String(identifier));
        setPostData(response.data);
        setResponseDate(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };
    fetchPost();
  }, [identifier]);

  const handleDelete = async () => {
    try {
      const response = await deletePost(postData?.id);
      toast.success("Post deleted successfully");
      navigate('/');
    } catch (error) {
      toast.success("Some err occured!");
      console.log(error);
    }
  }

  const handleUpdate = () => navigate(`/posts/${postData?.id}/edit`);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {postData ? (
          
          <article>
              <div className="w-full flex justify-between content-center">

              <Link to="/">
                <div className="text-base md:text-sm uppercase text-base md:text-sm text-teal-500 font-bold no-underline hover:underline font-bold">
                  &lt; back to home
                </div>
              </Link>
              <div>
              <button onClick={handleUpdate} className="mr-4 focus:shadow-outline-teal inline rounded-lg border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-teal-700 focus:outline-none dark:hover:bg-teal-500">
            Update
          </button>
            <button onClick={handleDelete} className="focus:shadow-outline-red inline rounded-lg border border-transparent bg-red-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-red-700 focus:outline-none dark:hover:bg-red-500">
            Delete
          </button>
              </div>
              </div>
              <header>
                <div className="space-y-1 border-b pt-6 md:pt-8 border-gray-200 pb-10 text-center dark:border-gray-700">
                  <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  {postData.updated_at ? `Updated on ${getReadableData(postData.created_at)}` : `Published on ${getReadableData(postData.created_at)}`}
                  </div>
                  <div>
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                      {postData.title}
                    </h1>
                  </div>
                </div>
              </header>
              <div className="break-words text-gray-600 dark:text-gray-200 pt-6 pb-3">
                <div dangerouslySetInnerHTML={{ __html: postData.body }}></div>
              </div>

              <div className="font-sans flex md:mt-8 justify-between text-gray-600 dark:text-gray-400 content-center px-4 mt-5">
                {responseData?.previous_post && (
                  <div className="text-left">
                    <Link to={`/posts/${responseData?.previous_post.slug}`}>
                      <span className="text-sm md:text-base font-normal no-underline hover:underline">
                        &larr;{" "}
                        {truncateText(responseData.previous_post.title, 20)}
                      </span>
                      <br />
                    </Link>
                  </div>
                )}

                {responseData?.next_post.slug && (
                  <div className="text-right">
                    <Link to={`/posts/${responseData?.next_post.slug}`}>
                      <span className="text-sm md:text-base font-normal no-underline hover:underline">
                        {truncateText(responseData.next_post.title, 20)} &rarr;
                      </span>
                      <br />
                    </Link>
                  </div>
                )}
              </div>

              <div className="text-center mx-auto">
                <Link
                  className="font-normal h-8 w-8 p-8 rounded-full outline-none focus:outline-none"
                  to={`https://www.linkedin.com/sharing/share-offsite/?url=${window?.location?.href}`}
                  type="button"
                >
                  <svg
                    className="transition duration-700 ease-in-out fill-current cursor-pointer text-gray-700 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Share on LinkedIn</title>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  className="font-normal h-8 w-8 p-8 rounded-full outline-none focus:outline-none"
                  to={`https://api.whatsapp.com/send?text=${window?.location?.href}`}
                  type="button"
                >
                  <svg
                    className="transition duration-700 ease-in-out fill-current cursor-pointer text-gray-700 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Share on Whatsapp</title>
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </Link>
                <Link
                  className="font-normal h-8 w-8 p-8 rounded-full outline-none focus:outline-none"
                  to={`https://t.me/share/url?text=${postData.title}&url=${window?.location?.href}`}
                  type="button"
                >
                  <svg
                    className="transition duration-700 ease-in-out fill-current cursor-pointer text-gray-700 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Share on Telegram</title>
                    <path d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
                  </svg>
                </Link>
                </div>
          </article>
      ) : (
        <NotFound text='Article does not exist' />
      )}
    </div>
  );
};

export default Post;
