package insertionsort

func InsertionSort(A []int) []int {
	n := len(A)
	for i := 1; i < n; i++ {
		key := A[i]
		var k int
		for j := i - 1; (j >= 0) && (A[j] > key); j-- {
			A[j+1] = A[j]
			k = j
		}
		A[k] = key
	}
	return A
}
