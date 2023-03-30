function selectionsort(vet, tamanho) {
    let j, min, aux;
    for (let i = 0; i < tamanho - 1; i++) {
        min = i;
        for (j = i + 1; j < tamanho; j++) {
            if (vet[j] < vet[min]) {
                min = j;
            }
        }
        aux = vet[i];
        vet[i] = vet[min];
        vet[min] = aux;
    }
}

const TMN = 10;
const vetor = [9, 3, 6, 1, 8, 0, 5, 2, 7, 4];

console.log("Vetor desordenado: " + vetor.join(" "));
selectionsort(vetor, TMN);
console.log("Vetor ordenado: " + vetor.join(" "));