import React, { ChangeEvent, useEffect } from "react"
import styles from './styles.css';
import { LinksFunction } from "@remix-run/node";
import { useState } from 'react';
import axios from 'axios';
import BackButton from "../../components/BackButton";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: styles },
    ];
}

export default function Surprise() {

    const [loteria, setLoteria] = useState<number | ''>('');
    const [resultado, setResultado] = useState<string>('');
    const [disable, setDisable] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setLoteria(inputValue !== '' ? Number(inputValue) : '');
    };

    const handleButtonClick = async (e) => {
        e.preventDefault();
        try {
            if (loteria !== '' && loteria >= 1 && loteria <= 3) {
                const response = await axios.post("https://api-fique-milionario.onrender.com/", { loteria });
                const resultadoString = response.data.join(' - ');
                setResultado(resultadoString);
                setDisable(true);
            } else {
                console.error("Loteria inválida");
                setResultado("Loteria inválida. Escolha um número entre 1 e 3.");
            }
        } catch (error) {
            console.error(error);
            setResultado("Erro ao buscar números sorteados.");
        }
    };

    const handleClearClick = async () => {
        try {
            await axios.delete("https://api-fique-milionario.onrender.com/");
            setResultado('');
            setLoteria('');
            setDisable(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const inputLoteria = document.getElementById("loteria") as HTMLInputElement;
        if (inputLoteria) {
            inputLoteria.focus();
        }
    }, []);
    return (
        <>
            <BackButton />
            <header id="titulo">Fique milionário</header>
            <section className="container">
                <div>
                    <p>Digite o número do jogo desejado:</p>
                    <ol>
                        <li>Mega-sena</li>
                        <li>Quina</li>
                        <li>Lotofacil</li>
                    </ol>
                    <input value={loteria}
                        onChange={handleInputChange} id='loteria' placeholder="número de 1 a 3" />
                    <button id="button" disabled={disable} onClick={handleButtonClick}>Gerar</button>
                    <div className="resultado">
                        <button id="limpar" onClick={handleClearClick}>X</button>
                        <p>Resultado</p>
                        <p id="resultado">{resultado}</p>
                    </div>
                </div>

            </section>
            <footer>🍀 Boa Sorte!!! 🍀 </footer>
        </>
    )
}