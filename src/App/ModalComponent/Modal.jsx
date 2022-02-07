import React from 'react';
import s from './Modal.module.css'

const Modal = ( { setModalOpen } ) => {
    return (
        <div className='modal'>
            <div className={s.modal_window} id="modal_window">
                <div className={s.modal_body}>
                    <div
                        className={s.close_button}
                    onClick={() => {setModalOpen(false)}}>
                        X
                    </div>
                    <form action="" className={s.modal_form}>
                        <div className={s.title}>
                            Send us a message
                        </div>
                        <label className={s.modal_field}>
                            <div className={s.field_name}>Name</div>
                            <span className={s.modal_wrapper}>
                                    <input type="text" className={s.input} placeholder="Type You'r Name"/>
                                    <svg className={`${s.icon} ${s.user}`} width="16" height="16">
                                        <use href="./src/img/sprite.svg#user-alt-solid"/>
                                    </svg>
                                </span>
                        </label>
                        <label className={s.modal_field}>
                            <div className={s.field_name}>Phone</div>
                            <span className={s.modal_wrapper}>
                                    <input type="text" className={s.input} placeholder="Phone"/>
                                    <svg className={`${s.icon} ${s.phone}`} width="16" height="16">
                                        <use href="./src/img/sprite.svg#phone-solid"/>
                                    </svg>
                                </span>
                        </label>
                        <label className={s.modal_field}>
                            <div className={s.field_name}>Email</div>
                            <span className={s.modal_wrapper}>
                                    <input type="text" className={s.input} placeholder="Email"/>
                                    <svg className={`${s.icon} ${s.mail}`} width="16" height="16">
                                        <use href="./src/img/sprite.svg#at-solid"/>
                                    </svg>
                                </span>
                        </label>
                        <label className={s.modal_field}>
                            <div className={s.message_field}>
                                <div className={s.field_name}>Your message</div>
                                <textarea name="user_message" className={s.message}
                                          placeholder="Write your message here"/>
                                <div className={s.submit}>
                                    <input type="submit" value="send message"/>
                                </div>
                            </div>
                        </label>
                    </form>
                </div>
            </div>
            <div className={s.modalBackDrop}/>
        </div>
    );
};

export default Modal;
