import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Loader } from "./components/Loader";
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const NewPost = lazy(() => import("./pages/NewPost"));
const Post = lazy(() => import("./pages/Post"));
const UpdatePost = lazy(() => import("./pages/UpdatePost"));
import "./assets/styles/global.scss";

function App(): JSX.Element {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="container flex-grow mx-auto w-11/12 md:w-3/5 mt-6 md:mt-12">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page/:pageNumber" element={<Home />} />
              <Route path="/new-post" element={<NewPost />} />
              <Route path="/posts/:identifier" element={<Post />} />
              <Route path="/posts/:id/edit" element={<UpdatePost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Toaster position="top-right" reverseOrder={true} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
