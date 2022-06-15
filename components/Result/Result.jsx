import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useState } from "react";
import { Integrar, Bhaskara, Fatorar } from "./Calculator";
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

			if (str.length >= 2 && (count >= 2 || str[1].includes("^"))) {
				console.log("str1 " + str[0] + "|" + str[1]);
				resultFatorar = Integrar(str);
				// Integrar(() => str);
				equation1 = str[0] + "/" + resultFatorar;
				console.log(equation1);
			} else {
				console.log("Não é aceito equações que não sejam de primeiro e segundo grau!");
			}
		} else {
			resultFatorar = Integrar(str);
			equation1 = props.equation;
		}
	}

	if (props.equation)
		return (
			<div className={styles.container}>
				<MathJaxContext>
					<MathJax>{"$$" + resultFatorar + "$$"}</MathJax>
				</MathJaxContext>
			</div>
		);
}
