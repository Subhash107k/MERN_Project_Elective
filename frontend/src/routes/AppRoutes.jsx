import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

import UserList from '../pages/users/UserList';
import CreateUser from '../pages/users/CreateUser';
import UserDetail from '../pages/users/UserDetail';
import EditUser from '../pages/users/EditUser';

import ProductList from '../pages/products/ProductList';
import CreateProduct from '../pages/products/CreateProduct';
import EditProduct from '../pages/products/EditProduct';

import SchoolList from '../pages/schools/SchoolList';
import CreateSchool from '../pages/schools/CreateSchool';
import EditSchool from '../pages/schools/EditSchool';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* User Routes */}
            <Route path="/users" element={<UserList />} />
            <Route path="/users/create" element={<CreateUser />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/users/edit/:id" element={<EditUser />} />

            {/* Product Routes */}
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/create" element={<CreateProduct />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />

            {/* School Routes */}
            <Route path="/schools" element={<SchoolList />} />
            <Route path="/schools/create" element={<CreateSchool />} />
            <Route path="/schools/edit/:id" element={<EditSchool />} />

            {/* Fallback Catch-all Route */}
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default AppRoutes;
