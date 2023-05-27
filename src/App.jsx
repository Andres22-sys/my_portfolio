import React from "react";
import {About, Contact, Experience, Footer, Header, Navbar, Projects, Services, Testimonials} from "./components";

const App = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <About/>
            <Services/>
            <Experience/>
            <Projects/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default App;
