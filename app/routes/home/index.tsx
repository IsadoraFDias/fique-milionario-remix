import React from 'react';
import { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

import styles from './styles.css';

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: styles },
    ];
}

export default function Home() {

    return (
        <div>
            <header>
                <nav>
                    <ul className="menu">
                        <li>
                        <Link to="/surprise">Sortear</Link>
                        </li>
                        <li>
                            <a href="#">Resultados</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className="container">
                <h1 id="titulo" className="titulo-grande">Bem-vindo ao site Fique Milionário</h1>
                <p className="paragrafo">
                    Escolha no menu a opção desejada e seja encaminhado para a seção de sorteio de números, para fazer a sua surpresinha, resultados para conferir o jogo e concurso desejados ou também entre em contato conosco.
                </p>
            </div>


            <footer>© 2023 Página Inicial. Todos os direitos reservados.</footer>
        </div>
    );
}
