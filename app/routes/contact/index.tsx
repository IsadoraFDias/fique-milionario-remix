import React from 'react';
import BackButton from '../../components/BackButton';

export default function Contact() {
    return (
        <>
            <BackButton />
            <div className="container">
                <h1 id="titulo" className="titulo-grande">Entre em contato com a desenvolvedora</h1>
                <div className='textContact'>
                        <p>
                            Entre em contato para tirar dúvidas, dar sugestões ou até mesmo para bater um papo.
                        </p>
                        <p>
                            Você pode entrar em contato através do e-mail: <a href="mailto:">diasfisadora@gmail.com</a>
                        </p>
                </div>
            </div>
        </>
            )
}