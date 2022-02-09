import React, {useState} from 'react';
import {Header} from "./HeaderComponent/Header";
import {Main} from "./MainComponent/Main";
import {Footer} from "./FooterComponent/Footer";
import {ScrollButton} from "./GlobalReusableComponents/ScrollButton";
import Modal from "./ModalComponent/Modal";


const App = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
      <div className='container'>

        {modalOpen
        &&
        <Modal
            setModalOpen={setModalOpen}
        />}

        <div className='app'>
          <Header
              setModalOpen={setModalOpen}
          />

          <Main/>

          <Footer/>

          <div className='ScrollTop'>
            <ScrollButton name='Go Top' className='scroll_button' link='header'/>
          </div>
        </div>
      </div>
  )
}
export default App