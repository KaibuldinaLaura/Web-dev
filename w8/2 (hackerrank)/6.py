def f(a):
    s = ""
    for x in range(1, a + 1):
        s = s + str(x)
    return s


a = int(input())
print(f(a))
