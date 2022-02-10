import React, {useState} from 'react';
import s from './Modal.module.css'
import sprite from '../img/sprite.svg'

const Modal = ( { setModalOpen } ) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    const closeModal = () => {setModalOpen(false)}

    return (
        <div className='modal'>
            <div className={s.modal_window} id="modal_window">
                <div className={s.modal_body}>
                    <div
                        className={s.close_button}
                        onClick={closeModal}>
                        X
                    </div>
                    <form action="" className={s.modal_form}>
                        <div className={s.title}>
                            Send us a message
                        </div>
                        <label className={s.modal_field}>
                            <div className={s.field_name}>Name</div>
                            <div className={s.input_wrapper}>
                                    <input
                                        value={name}
                                        onChange={event => setName(event.target.value)}
                                        type="text"
                                        className={s.input}
                                        placeholder="Type You'r Name"
                                    />
                                    <svg className={`${s.icon} ${s.user}`} width="16" height="16">
                                        <use href={`${sprite}#user-alt-solid`}/>
                                    </svg>
                            </div>
                        </label>
                        <label className={s.modal_field}>
                            <div className={s.field_name}>Phone</div>
                            <div className={s.input_wrapper}>
                                    <input
                                        value={phone}
                                        onChange={event => setPhone(event.target.value)}
                                        type="text"
                                        className={s.input}
                                        placeholder="Phone"
                                    />
                                    <svg className={`${s.icon} ${s.phone}`} width="16" height="16">
                                        <use href={`${sprite}#phone-solid`}/>
                                    </svg>
                            </div>
                        </label>
                        <label className={s.modal_field}>
                            <div className={s.field_name}>Email</div>
                            <div className={s.input_wrapper}>
                                    <input
                                        value={mail}
                                        onChange={event => setMail(event.target.value)}
                                        type="text"
                                        className={s.input}
                                        placeholder="Email"
                                    />
                                    <svg className={`${s.icon} ${s.mail}`} width="16" height="16">
                                        <use href={`${sprite}#at-solid`}/>
                                    </svg>
                            </div>
                        </label>
                        <label className={s.modal_field}>
                            <div className={s.message_field}>
                                <div className={s.field_name}>Your message</div>
                                <textarea
                                    value={message}
                                    onChange={event => setMessage(event.target.value)}
                                    name="user_message"
                                    className={s.message}
                                    placeholder="Write your message here"
                                />
                                <div className={s.submit}>
                                    <input type="submit" value="send message"/>
                                </div>
                            </div>
                        </label>
                    </form>
                </div>
            </div>
            <div className={s.modalBackDrop} onClick={closeModal}/>
        </div>
    );
};

export default Modal;
