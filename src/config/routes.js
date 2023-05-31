import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Article from '../pages/Article/Article';
import Home from '../pages/Home/Home';
import League from '../pages/League/League';
import NotFound from '../pages/NotFound/NotFound';
import Search from '../pages/Search/Search';
import Tag from '../pages/Tag/Tag';


const AllRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/article/:id",
            element: <Article />,
        },
        {
            path: "/league",
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
          path: "*",
          element: <NotFound />,
        },
    ]);

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default AllRoutes