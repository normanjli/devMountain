def best():
    arr =[int(x) for x in input('enter array to check: ').split(',')]
    print(arr)
    profit = []

    for i in range(len(arr)):
        for j in range(i, len(arr)):
            print(i,j)
            if arr[i]>arr[j]:
                profit[i] = arr[j]-arr[i]
    profit.sort()
    print(profit)
    return profit

best()