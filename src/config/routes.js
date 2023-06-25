import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import ScrollToTop from '../components/ScrollTo/ScrollTo';
import Article from '../pages/Article/Article';
import Home from '../pages/Home/Home';
import League from '../pages/League/League';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import Search from '../pages/Search/Search';
import Tag from '../pages/Tag/Tag';
import HomeArticle from "../pages/Admin/Home"


const AllRoutes = () => {

    const router = [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/article/:id",
            element: <Article />,
        },
        {
            path: "/league/:id",
            element: <League />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
            path: "/tag",
            element: <Tag />,
        },
        {
          path: "/auth/article/login",
          element: <Login />,
        },
        {
          path: "/article/admin/:id",
          element: <Article admin={true} />,
        },
        {
          path: "/article/create/admin/:id",
          element: <HomeArticle />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
    ];

  return (
    <div>
        <BrowserRouter>
          <Routes>
            {router.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
        {/* <RouterProvider router={router} /> */}
    </div>
  )
}

export default AllRoutes