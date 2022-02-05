import React from 'react';
import {Header} from "./HeaderComponent/Header";
import {Main} from "./MainComponent/Main";
import {Footer} from "./FooterComponent/Footer";
import {ScrollButton} from "./GlobalReusableComponents/ScrollButton";
import Modal from "./ModalComponent/Modal";


export const App = () => {
    return (
        <div className='container'>
            <Modal/>
            <div className='app'>
                <Header/>
                <Main/>
                <Footer/>
                <div className='ScrollTop'>
                    <ScrollButton name='Go Top' className='scroll_button' link='header'/>
                </div>
            </div>
        </div>
    )
}