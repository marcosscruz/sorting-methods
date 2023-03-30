function quicksort(vet, inicio, fim) {
    let aux, i = inicio, j = fim;
    let pivo = Math.floor((inicio + fim) / 2);

    while (i <= j) {
        while (vet[i] < vet[pivo]) {
            i++;
        }
        while (vet[j] > vet[pivo]) {
            j--;
        }

        if (i <= j) {
            aux = vet[i];
            vet[i] = vet[j];
            vet[j] = aux;
            i++;
            j--;
        }

        if (inicio < j) {
            quicksort(vet, inicio, j);
        }
        if (i < fim) {
            quicksort(vet, i, fim);
        }
    }
}

const TMN = 11;
let vetor = [9, 3, 6, 1, 8, 0, 5, 2, 7, 4];

console.log("Vetor desordenado: " + vetor.join(" "));
quicksort(vetor, 0, TMN);
console.log("Vetor ordenado: " + vetor.join(" "));