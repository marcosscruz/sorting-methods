function bubblesort(vet, tamanho) {
    let aux, troca;
    for (let i = 0; i < tamanho; i++) {
        troca = 0;
        for (let j = 1; j < tamanho - 1; j++) {
            if (vet[j] < vet[j - 1]) {
                aux = vet[j];
                vet[j] = vet[j - 1];
                vet[j - 1] = aux;
                troca = 1;
            }
        }
        if (troca == 0) {
            break;
        }
    }
}

const TMN = 11;
const vetor = [9, 3, 6, 1, 8, 0, 5, 2, 7, 4];

console.log("Vetor desordenado: " + vetor.join(" "));
bubblesort(vetor, TMN);
console.log("Vetor ordenado: " + vetor.join(" "));