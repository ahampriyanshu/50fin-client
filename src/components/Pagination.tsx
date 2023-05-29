import React from "react";
import { MetaDataInterface } from "../types";
import { Link } from "react-router-dom";

interface PaginationProps {
  pageNumber: string;
  metadata: MetaDataInterface;
  searchQuery: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  pageNumber,
  metadata,
  searchQuery,
}) => {
  const totalPages = Math.ceil(metadata.results / metadata.limit);
  const currentPage = Number(pageNumber) || 1;
  console.log(currentPage, totalPages);
  return (
    <div className="w-full text-gray-600 dark:text-gray-400">
      {currentPage > 1 && (
        <div className="float-left">
          <Link
            to={`/page/${currentPage - 1}${
              searchQuery ? `?query=${searchQuery}` : ""
            }`}
          >
            <span className="text-sm md:text-base font-normal no-underline hover:underline">
              &larr; Previous Page
            </span>
            <br />
          </Link>
        </div>
      )}

      {currentPage < totalPages && (
        <div className="float-right">
          <Link
            to={`/page/${currentPage + 1}?query=${
              searchQuery ? `?query=${searchQuery}` : ""
            }`}
          >
            <span className="text-sm md:text-base font-normal no-underline hover:underline">
              Next Page &rarr;
            </span>
            <br />
          </Link>
        </div>
      )}
    </div>
  );
};
