export function Integrar(funcao) {
	let str = Fatorar(funcao);
	console.log("integ" + str);
	return str;
	// return ConstruirFatorado(a, b);
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

		console.log(ConstruirFatorado(x1, x2));
		// let integ = Integrar(ConstruirFatorado(x1, x2));
		return ConstruirFatorado(x1, x2);
	}
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

function ConstruirFatorado(x1, x2) {
	if (x1 < 0 && x2 < 0) {
		return ("(x+" + x1 + ")(x+" + x2 + ")").replaceAll("-", "");
	} else if (x1 > 0 && x2 < 0) {
		return "(x-" + x1 + ")" + ("(x+" + x2 + ")").replace("-", "");
	} else if (x1 < 0 && x2 > 0) {
		return ("(x+" + x1 + ")(x-" + x2 + ")").replace("-", "");
	} else if (x1 > 0 && x2 > 0) {
		return "(x-" + x1 + ")(x-" + x2 + ")";
	}
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
