import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout';

import { Home } from '../pages/Home';
import { SignIn } from "../pages/SignIn";
import MyProfile from "../pages/MyProfile";
import { Images } from '../pages/Images';
import { ImageDetail } from '../pages/ImageDetail';
import { Subscriptions } from '../pages/Subscriptions';
import SubDetail from "../pages/SubDetail";
import { Shorts } from "../pages/Shorts";
import ShortDetail from "../pages/ShortDetail";
import Products from '../pages/products/Products';
import Users from "../pages/Users";

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route element={<PublicRoutes />}>
            <Route path="signin" element={<SignIn />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path="myprofile" element={<MyProfile />} />
          </Route>

          <Route path="products" element={<Products />} />
          <Route path='/images' element={<Images />} />
          <Route path='/images/:imageId' element={<ImageDetail />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="subscriptions/:subId" element={<SubDetail />} />
          <Route path="shorts" element={<Shorts />} />
          <Route path="shorts/:shortId" element={<ShortDetail />} />
          <Route path="users" element={<Users />} />
        </Route>
            </Routes>
        </BrowserRouter>
    );
};