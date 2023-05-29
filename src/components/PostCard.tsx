import React from "react";
import { Link } from "react-router-dom";
import { PostInterface } from "../types";
import NotFound from "../pages/NotFound";
import { truncateText, sanitizedHTML, getReadableData } from "../utils";

const PostCard = ({ posts }: { posts: PostInterface[] }) => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {!posts?.length && <NotFound text="No result found for the given query" />}
      {posts?.map((post) => {
        const { title, slug, body, created_at } = post;
        return (
          <li key={slug} className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    {getReadableData(created_at)}
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
                    <div className="max-w-full text-gray-600 dark:text-gray-400">
                      {truncateText(sanitizedHTML(body))}
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
  );
};

export default PostCard;
