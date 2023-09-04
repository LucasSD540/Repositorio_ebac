class Ferrari {
    constructor(modelo, ano, potencia, cor) {
        this.modelo = modelo;
        this.ano = ano;
        this.potencia = potencia;
        this.marca = "Ferrari";
        this.cor = cor;
    }

    acelerar() {
        console.log("Vrum!");
    }
}

class F430_vermelha extends Ferrari {
    constructor() {
        super("F430", 2004, 490, "Vermelha");
    }
}

class F40_vermelha extends Ferrari {
    constructor() {
        super("F40", 1992, 428, "Vermelha");
    }
}

class F40_branca extends Ferrari {
    constructor() {
        super("F40", 1992, 428, "Branca");
    }
}

const f430_vermelha = new F430_vermelha();
const f40_vermelha = new F40_vermelha();
const f40_branca = new F40_branca();

f40_branca.acelerar();
f430_vermelha.acelerar();
f40_vermelha.acelerar();

console.log(f430_vermelha);
console.log(f40_branca);
console.log(f40_vermelha);