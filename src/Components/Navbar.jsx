import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './home';
import AboutUs from './About Us';
import Contact from './Contact';
import Products from './Products';
import NotFound from './notfound';

function Navbar(){
    return (<>
        <nav style={{ listStyle: "none", display: "flex", justifyContent: "space-between", background: "#CDB2AC" }}>
            <ul style={{ listStyle: "none", display: "flex" }}>
                <li style={{ margin: "5px", padding: "5px" }}><Link to="/">Home</Link></li>
                <li style={{ margin: "5px", padding: "5px" }}><Link to="/aboutus">About Us</Link></li>
                <li style={{ margin: "5px", padding: "5px" }}><Link to="/contact">Contact</Link></li>
                <li style={{ margin: "5px", padding: "5px" }}><Link to="/products">Products</Link></li>
            </ul>
            <ul style={{ listStyle: "none", marginRight: "30px", marginTop: "20px", display: "flex " }}>
                <input type="text" placeholder="Search here" style={{ width: "8rem", height: "2rem", borderRadius: "5px" }}></input>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />}>
                <Route>
                    <Route path='/aboutus/:id' element={<AboutUs />} />       
                </Route>
            </Route>
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Products />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>

    </>
    )
}

export default Navbar;