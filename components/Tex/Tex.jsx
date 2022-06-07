import { MathJax, MathJaxContext } from "better-react-mathjax";
import styles from "./Tex.module.scss";
import { Bhaskara, Fatorar } from "../Result/Calculator";

export function Tex(props) {
	function fatorar(fatora) {}

	let finalContent = "";

	const hasSlash = props.equation.includes("/");
	const str = props.equation.split("/");

	// if (!baixo.includes("(") || (!baixo.includes(")") && baixo.includes("^"))) {
	// 	let number = "",
	// 		variavel = "",
	// 		expoente = "";
	// 	for (let i = 0; i < baixo.length; i++) {
	// 		let char = baixo.charAt(i);
	// 		if (char > "0" && char < "9") {
	// 			number += char;
	// 		} else if ((char > "a" && char < "z") || (char > "A" && char < "Z")) {
	// 			variavel += char;
	// 		} else if (char == "^") {
	// 			i++;
	// 			do {
	// 				char = baixo.charAt(i);
	// 				if (char > "0" && char < "9") {
	// 					expoente += char;
	// 				}
	// 			} while (char != "+" && char != "-");
	// 		}
	// 		console.log("number = " + number + " variavel = " + variavel + " expoente = " + expoente);
	// 		(number = ""), (variavel = ""), (expoente = "");
	// 	}
	// }

	if (str[0].length > 0 && hasSlash && props.inf && props.sup) {
		finalContent = "$$\\int_{" + props.inf + "}^{" + props.sup + "}\\frac{" + str[0] + "}{" + str[1] + "} \\ dx $$";
	} else if (str[1] != undefined || (str[0].length > 0 && hasSlash && !props.inf && !props.sup)) {
		finalContent = "$$\\int\\frac{" + str[0] + "}{" + str[1] + "} \\ dx $$";
	} else if (props.inf && props.sup && str[0].length > 0) {
		finalContent = "$$\\int_{" + props.inf + "}^{" + props.sup + "}" + props.equation + " \\ dx $$";
	} else if (props.equation.length > 0) {
		finalContent = "$$\\int " + props.equation + " \\ dx $$";
	}

	if (props.sup < props.inf) {
		finalContent = "Limite superior menor que limite inferior";
	}

	return (
		<div className={styles.texContainer}>
			<MathJaxContext>
				<MathJax>{finalContent}</MathJax>
			</MathJaxContext>
		</div>
	);
}
