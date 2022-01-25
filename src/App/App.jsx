import React from 'react';
import {Header} from "./HeaderComponent/Header";
import {Main} from "./MainComponent/Main";
import {Footer} from "./FooterComponent/Footer";
import {ScrollButton} from "./GlobalReusableComponents/ScrollButton";
import {animateScroll as scroll} from "react-scroll";

export const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />

            <ScrollButton scroll={() => {scroll.scrollToTop()}}/>
        </div>
    )
}