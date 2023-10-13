import React, { ChangeEvent, useEffect, useState } from "react"
import styles from './styles.css';
import { LinksFunction } from "@remix-run/node";
import axios from "axios";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: styles },
    ];
}

export default function Result() {
    const [loteria, setLoteria] = useState('');
    const [resultado, setResultado] = useState<string>('');
    const [disable, setDisable] = useState<boolean>(false);
    const [concurso, setConcurso] = useState<number | ''>('');

    const handleLoteriaInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        switch (inputValue) {
            case '1':
                return setLoteria("megasena");
            case '2':
                return setLoteria("quina");
            case '3':
                return setLoteria("lotofacil");
            default:
                return null;
        }
    };
    const handleConcursoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setConcurso(inputValue !== '' ? Number(inputValue) : '');
    };


    const handleGenerateClick = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/resultado/${loteria}/${concurso}`);
            const resultadoString = response.data.join(' - ');
            setResultado(resultadoString);
            setDisable(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClearClick = async () => {
        try {
            await axios.delete(`http://localhost:8080/resultado/${loteria}/${concurso}`);
            setResultado('');
            setLoteria('');
            setDisable(false);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <header id="titulo">Fique milionário</header>
            <section className="container">
                <div>
                    <p>Digite o número do jogo que deseja ter o resultado:</p>
                    <ol>
                        <li>Mega-sena</li>
                        <li>Quina</li>
                        <li>Lotofacil</li>
                    </ol>
                    <div className="container">
                        <input value={loteria}
                            onChange={handleLoteriaInputChange} id='loteria' placeholder="número de 1 a 3" />
                        <input value={concurso}
                            onChange={handleConcursoInputChange} id='concurso' placeholder="Digite o concurso" />
                        <button id="button" disabled={disable} onClick={handleGenerateClick} >Gerar</button>
                    </div>
                    <div className="resultado">
                        <button id="limpar" onClick={handleClearClick}>X</button>
                        <p>Resultado</p>
                        <p id="resultado">{resultado}</p>
                    </div>
                </div>

            </section>
        </>
    )
}