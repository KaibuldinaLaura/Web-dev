a = int(input())
i = a
nod = a
while i > 1:
    if a % i == 0:
        nod = i
    i -= 1
print(nod)