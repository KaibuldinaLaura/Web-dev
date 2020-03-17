def f1(a, b):
    if a > b:
        return b
    else:
        return a


def min(a, b, c, d):
    return f1(f1(a, b), f1(c, d))


a, b, c, d = [int(i) for i in input().split()]
print(min(a, b, c, d))