package insertionsort

import "testing"

func TestInsertionSort(t *testing.T) {
	input := []int{5, 3, 1, 2}
	expected := []int{1, 2, 3, 5}

	out := InsertionSort(input)

	if len(out) != len(expected) {
		t.Error("lists are not equal")
	}
	for i := range out {
		if out[i] != expected[i] {
			t.Error("lists should be equal")
		}
	}

}
