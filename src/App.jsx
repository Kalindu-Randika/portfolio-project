import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import Faq from "./sections/faq/Faq";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";

const App = () => {
    return(
        <main>
        <Navbar />
            <Header />
            <About />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Faq />
            <Contact />
            <Footer />
            <FloatingNav/>


        </main>
    )
}

export default App;
