import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.scss";
import { Tex } from "../components/Tex/Tex";
import { Result } from "../components/Result/Result";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Home() {
	const [equation, setEquation] = useState("");
	const [supLim, setSupLim] = useState("");
	const [infLim, setInfLim] = useState("");
	const [result, setResult] = useState("0");

	return (
		<div className={styles.container}>
			<Head>
				<title>Calculo Integral</title>
				<meta name="description" content="Site para cálculo de integrais por frações parciais" />
			</Head>

			<header className={styles.header}>
				<h1>Cálculo de Integrais por frações parciais</h1>
			</header>

			<main className={styles.main}>
				<div>
					<div className={styles.userTitle}>
						<h2>Equação</h2>
					</div>
					<div className={styles.userInput}>
						<input type="text" name="user-input" onChange={(event) => setEquation(event.target.value)} />
					</div>
					<div className={styles.userInputLimits}>
						<div className={styles.userInputLimit}>
							<div>
								<p>Limite superior</p>
							</div>
							<input type="text" name="user-input-limitsup" onChange={(event) => setSupLim(event.target.value)} />
						</div>
						<div className={styles.userInputLimit}>
							<div>
								<p>Limite inferior</p>
							</div>
							<input type="text" name="user-input-limitinf" onChange={(event) => setInfLim(event.target.value)} />
						</div>
					</div>
				</div>
				<div className={styles.equationResult}>
					<h2>Equação Resultante:</h2>
					<Tex equation={equation} sup={supLim} inf={infLim} />
				</div>
				<div className={styles.etapas}>
					<div>
						<h2>Equação fatorada</h2>
					</div>
					<Result equation={equation} sup={supLim} inf={infLim}></Result>
					<div>
						<h2>Resultado final</h2>
					</div>
					<MathJaxContext>
						<MathJax>{"$$ 4 \\ln|x-2| + 6 \\ln|x-3| + C$$"}</MathJax>
					</MathJaxContext>
				</div>
			</main>

			<footer className={styles.footer}>
				<p>Site desenvolvido para o primeiro trabalho prático de Cálculo 2 da PUC de Minas Gerais - Praça da Liberdade</p>
			</footer>
		</div>
	);
}
