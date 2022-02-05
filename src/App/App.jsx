import React from 'react';
import {Header} from "./HeaderComponent/Header";
import {Main} from "./MainComponent/Main";
import {Footer} from "./FooterComponent/Footer";
import {ScrollButton} from "./GlobalReusableComponents/ScrollButton";


export const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
                <div className='ScrollTop'>
                    <ScrollButton name='Go Top' className='scroll_button' link='header'/>
                </div>
        </div>
    )
}