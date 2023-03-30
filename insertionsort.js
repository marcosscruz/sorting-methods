function insertionsort(vet, tamanho) {
    let aux, j;
    for (let i = 1; i < tamanho; i++) {
        aux = vet[i];
        for (j = i - 1; j >= 0; j--) {
            if (vet[j] > aux) {
                vet[j + 1] = vet[j];
            } else {
                break;
            }
        }
        vet[j + 1] = aux;
    }
}

const TMN = 11;
const vetor = [9, 3, 6, 1, 8, 0, 5, 2, 7, 4];

console.log("Vetor desordenado: " + vetor.join(" "));
insertionsort(vetor, TMN);
console.log("Vetor ordenado: " + vetor.join(" "));