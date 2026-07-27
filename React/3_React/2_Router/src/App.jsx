import React, { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router";

import Navbar from './component/Navbar';
import Bca from './component/Bca';
import Mca from './component/Mca';

// Lazy loading
const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./component/About"));
const Contact = lazy(() => import("./component/Contact"));

const App = () => {
    return (
        <div>

            <Navbar />

            <Suspense fallback={<div>Loading data...</div>}>

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    >
                        <Route
                            path="bca"
                            element={<Bca />}
                        />

                        <Route
                            path="mca"
                            element={<Mca />}
                        />
                    </Route>

                    <Route
                        path="/contact"
                        element={<Contact />}
                    />

                </Routes>

            </Suspense>

        </div>
    );
};

export default App;