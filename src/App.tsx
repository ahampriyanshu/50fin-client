import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer";
import { Spinner } from "./components/Spinner";
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const NewPost = lazy(() => import("./pages/NewPost"));
const Post = lazy(() => import("./pages/Post"));
import './assets/styles/global.scss'


function App(): JSX.Element {
  return (
    <BrowserRouter>
    <Navbar />
    <div className='container mx-auto w-full md:w-3/5 mt-6 md:mt-12'>
    <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page/:pageNumber" element={<Home />} />
      <Route path="/new-post" element={<NewPost />} />
      <Route path="/post/:data" element={<Post />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
    <Toaster position="top-right" reverseOrder={true} />
    </div>
    <Footer />
  </BrowserRouter>
  );
}

export default App
