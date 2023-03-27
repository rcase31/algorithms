#!/bin/bash

insertion_sort() {
  arr=("$@")
  n=${#arr[@]}

  for ((i=1; i<n; i++)); do
    key=${arr[i]}
    j=$((i - 1))

    while ((j >= 0 && arr[j] > key)); do
      arr[j+1]=${arr[j]}
      j=$((j - 1))
    done

    arr[j+1]=$key
  done

  echo "${arr[@]}"
}

# Example usage
arr=(5 2 4 6 1 3)
sorted=$(insertion_sort "${arr[@]}")
echo "Sorted array: $sorted"
