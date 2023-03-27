function insertionSort(A) {
    n = A.length;
    for (let i = 0; i < n; i++) {
        let key = A[i];
        let j = i - 1;
        while ((j >= 0) && (A[j] > key)) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j + 1] = key;
    }
    return A;
}

module.exports = insertionSort;
