function intercala(vet, inicio, meio, fim) {
    let vetaux = new Array(fim + 1);
    let i = inicio;
    let a = inicio;
    let b = meio + 1;

    while (a <= meio && b <= fim) {
        if (vet[a] < vet[b]) {
            vetaux[i] = vet[a];
            a++;
        } else {
            vetaux[i] = vet[b];
            b++;
        }
        i++;
    }
    while (a <= meio) {
        vetaux[i] = vet[a];
        i++;
        a++;
    }
    while (b <= fim) {
        vetaux[i] = vet[b];
        i++;
        b++;
    }
    for (i = inicio; i <= fim; i++) {
        vet[i] = vetaux[i];
    }
}

function mergesort(vet, inicio, fim) {
    if (inicio < fim) {
        let meio = Math.floor((inicio + fim) / 2);
        mergesort(vet, inicio, meio);
        mergesort(vet, meio + 1, fim);
        intercala(vet, inicio, meio, fim);
    }
}

const TMN = 10;
let vetor = [9, 3, 6, 1, 8, 0, 5, 2, 7, 4];

console.log("Vetor desordenado: " + vetor.join(" "));
mergesort(vetor, 0, TMN - 1);
console.log("Vetor ordenado: " + vetor.join(" "));
