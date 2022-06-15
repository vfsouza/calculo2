export function Integrar(funcao) {
	console.log("INTEGRAR: ");
	let a = 0,
		b = 0,
		tA,
		x1 = 0,
		x2 = 0,
		str = "",
		fatstr = "",
		divisorA = 0,
		divisorB = 0,
		dividendoA = 0,
		dividendoB = 0;

	tA = funcao[1].split("x")[0].replaceAll("(", "");

	if (tA == "-") tA = -1;

	if (!tA) tA = 1;

	tA = parseInt(tA);

	console.log("integ|" + funcao[0] + "|" + funcao[1]);
	if (funcao[1].charAt(0) != "(") {
		[x1, x2] = Fatorar(funcao[1]);
		console.log("TA BUG: " + funcao);

		// console.log(typeof tA);
		fatstr = ConstruirFatorado(x1, x2, tA);

		divisorB = x1 * -1 * tA;
		divisorA = x2 * -1;

		// console.log("div")
		// encontrarValoresDivisor(str);

		// x1 = x1 * -1;
		// x2 = x2 * -1;
		console.log("tA: " + tA);
	} else {
		// tA = funcao[1].split("x")[0].replaceAll("(", "");
		// if (tA == "-") tA = -1;

		// if (!tA) tA = 1;

		// tA = parseInt(tA);
		console.log("tA ELSE " + tA);
		[divisorA, divisorB] = encontrarValoresDivisor(funcao[1]);
	}

	[dividendoA, dividendoB] = encontrarValoresDividendo(funcao[0]);

	console.log("dividendoA: " + dividendoA + " dividendoB: " + dividendoB);
	console.log("divisorA: " + divisorA + ", divisorB: " + divisorB);
	console.log("ta: " + tA);
	a = (dividendoB - divisorB * dividendoA) / (divisorA - divisorB * tA);
	b = dividendoA - tA * a;

	console.log("a: " + a + ", b: " + b);

	str = "";
	str += a + "ln|";
	if (tA != 1) {
		if (tA == -1) {
			str += "-";
		} else {
			str += tA;
		}
	}

	str += "x";

	if (divisorA != 0) {
		if (divisorA > 0) str += "+";
		str += divisorA;
	}

	str += "| ";

	if (b >= 0) {
		str += "+ ";
	}

	str += b + "ln|x";

	if (divisorB != 0) {
		if (divisorB > 0) str += "+";
		str += divisorB;
	}

	str += "| + C";

	console.log("integ1:" + str);

	return str;
	// return ConstruirFatorado(a, b);
}

function encontrarValoresDividendo(str) {
	let valArr = str.replaceAll(" ", "").split("x");
	console.log("valArr:" + valArr);
	// let a = parseInt((valArr[0] == '-' ? "-1" : valArr[0]));

	let a = 0;

	if (!valArr[0]) {
		a = 1;
	} else if (valArr[0] == "-") {
		a = -1;
	} else {
		a = parseInt(valArr[0]);
	}

	let b = 0;
	if (valArr[1]) {
		b = parseInt(valArr[1].replaceAll("+", ""));
	}

	b = !b ? 0 : b;

	return [a, b];
}

function encontrarValoresDivisor(str) {
	str = str.replaceAll("(", "").replaceAll(")", "").replaceAll(" ", "").split("x");
	// str = str.replaceAll("(", "").replaceAll(")", "")
	let divisorB = str[1],
		divisorA = str[2];
	if (!divisorB) divisorB = 0;
	if (!divisorA) divisorA = 0;

	divisorB = parseInt(divisorB);
	divisorA = parseInt(divisorA);
	// console.log("encdivisor: divisorB: " + divisorB + "divisorA: " + divisorA);

	return [divisorA, divisorB];
}

export function Fatorar(funcao) {
	// b2 - 4ac
	let str = funcao.replaceAll(" ", "").replaceAll("+", "|").replaceAll("-", "|-").split("|");
	let a = "",
		b = "",
		c = "",
		x1 = 0,
		x2 = 0;
	console.log("fatorar:" + str);

	if (str.length == 4) {
		str[0] = str[1];
		str[1] = str[2];
		str[2] = str[3];
	}

	console.log("EQUACAO | a: " + str[0] + " | b: " + str[1] + " | c: " + str[2]);

	if (str.length >= 3) {
		[a, b, c] = PegarVariaveis(str);
	}

	console.log("VARIAVEIS | a: " + a + " | b: " + b + " | c: " + c);

	if ((a && b && c) || (a && c)) {
		[x1, x2] = Bhaskara(a, b, c);
		console.log("fatorar x1 " + x1 + " x2 " + x2);

		console.log(ConstruirFatorado(x1, x2, a));
		// let integ = Integrar(ConstruirFatorado(x1, x2));
	}
	return [x1, x2];
}

function Sistema(f) {}

function Bhaskara(a, b, c) {
	let x1, x2;
	const delta = b * b - 4 * a * c;

	console.log("DELTA: " + delta);

	if (delta >= 0) {
		x1 = (-b + Math.sqrt(delta)) / (2 * a);
		x2 = (-b - Math.sqrt(delta)) / (2 * a);
		console.log("Xs | x1: " + x1 + " x2: " + x2);
		return [x1, x2];
	} else {
		console.log("Equação sem raiz");
	}

	return [x1, x2];
}

function ConstruirFatorado(x1, x2, a) {
	console.log("construirFatorado|" + x1 + "|" + x1 + "|" + a);

	// let str = "(" + (a == 1 ? "" : a) + "x";
	let str = "(";
	if (a != 1) {
		if (a == -1) {
			str += "-";
		} else {
			str += a;
		}
	}

	str += "x";

	if (x1 * -1 * a != 0) {
		str += x1 * -1 * a > 0 ? "+" + x1 * -1 * a : x1 * -1 * a;
	}

	str += ")(x";

	if (x2 * -1 != 0) {
		str += x2 * -1 > 0 ? "+" + x2 * -1 : x2 * -1;
	}
	str += ")";
	console.log(str);

	return str;

	// return "(" + (a == 1 ? "" : a) + "x" + ((x1*-1*a) >= 0 ? "+" + (x1*-1*a) : (x1*-1*a)) + ")(x" + ((x2*-1)>= 0 ? "+" + (x2*-1) : (x2*-1)) + ")";
}

function PegarVariaveis(str) {
	console.log(str);
	let a = "",
		b = "",
		c = "";
	if (str[0].includes("^") && str[0].includes("x")) {
		a = str[0].replaceAll("x^2", "");

		if (a.length == 0 || (a.includes("-") && a.length <= 1)) {
			a += "1";
		} else if (a.includes("-") && a.length < 1) {
			a += "1";
		}
		if (str[1] && str[1].includes("x")) {
			b = str[1].replaceAll("x", "");

			if (b.length == 0 || (b.includes("-") && b.length <= 1)) {
				b += "1";
			} else if (b.includes("-") && b.length < 1) {
				b += "1";
			}
			if (str[2]) {
				c = str[2];
			}
			if (c.length == 0 || (c.includes("-") && c.length <= 1)) {
				c += "1";
			}
		} else {
			b = 0;
			c = str[1];
		}
	} else if (!str[0].includes("^") && str[0].includes("x")) {
		b = str[0];
		if (!str[1].includes("x")) {
			c = str[1];
		}
	}

	console.log("VARIAVEIS METODO | a: " + a + " | b: " + b + " | c: " + c);

	return [a, b, c];
}
