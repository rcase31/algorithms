

def insertion_sort(A: list[int]):
    """
    >>> A = [1,45,2,3,4]
    >>> insertion_sort(A)
    [1, 2, 3, 4, 45]
    """
    n = len(A)
    for i in range(n):
        key = A[i]
        j = i -1
        while A[j] > key and j > 0:
            A[j+1] = A[j]
            j = j - 1
        A[j+1] = key
    return A
if __name__ == "__main__":
    import doctest
    doctest.testmod() #test the whole module.