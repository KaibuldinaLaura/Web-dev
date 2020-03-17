def power(a, n):
    d = 1
    for x in range(1, n + 1):
        d = d * a
    print(d)


num = input().split()
power(float(num[0]), int(num[1]))
