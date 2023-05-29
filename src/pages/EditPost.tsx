import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createPost } from "../api";
import { sanitizedHTML } from "../utils";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading("Submitting Data");
    if (!title || !sanitizedHTML(body)) {
      toast.dismiss();
      toast.error("Empty values are not allowed");
      return;
    }

    try {
      toast.dismiss();
      const res = await createPost({ title, body });
      toast.success("Post saved successfully");
      navigate(`/posts/${res?.slug}`, {
        state: { message: "Post saved successfully" },
      });
    } catch (error) {
      toast.dismiss();
      console.log(error);
      toast.error("Some err occured!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Some intersting title"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="body"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter content
          </label>
          <ReactQuill
            className="bg-gray-50"
            style={{ height: "400px" }}
            value={body}
            onChange={setBody}
          />
        </div>

        <button
          type="submit"
          className="mt-12 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Add New Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
