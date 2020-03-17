n = int(input())
pow2 = 1
a = 0
while pow2 <= n:
    if pow2 == n:
        break
    else:
        pow2 *= 2
        a += 1
print(a)
