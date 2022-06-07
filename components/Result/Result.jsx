import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useState } from "react";
import { Fatorar, Bhaskara } from "./Calculator";
import { Tex } from "../Tex/Tex";
import styles from "./Result.module.scss";

export function Result(props) {
	let result = "",
		resultFatorar = "",
		equation1 = "";

	if (props.equation.includes("/")) {
		let str = props.equation.trim().replaceAll(" ", "").split("/");
		if (!str[1].includes("(") && !str[1].includes(")")) {
			let count = 0;
			for (let i = 0; i < str[1].length; i++) {
				if (str[1].charAt(i) == "+" || str[1].charAt(i) == "-") {
					count += 1;
				}
			}

			if (count >= 2 || str[1].includes("^")) {
				console.log("str1 " + str[1]);
				resultFatorar = Fatorar(str[1]);
				equation1 = str[0] + "/" + resultFatorar;
				console.log(equation1);
			} else {
				console.log("Não é aceito equações que não sejam de primeiro e segundo grau!");
			}
		}
	}

	if (props.equation)
		return (
			<div className={styles.container}>
				<div className={styles.etapa1}>
					<p>Primeiro devemos fatorar o divisor</p>
				</div>
				<Tex className={styles.equation1} equation={equation1}></Tex>
			</div>
		);
}
