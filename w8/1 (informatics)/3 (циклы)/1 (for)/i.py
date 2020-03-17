import math
a = int(input())
b = 0
for x in range(1, int(math.sqrt(a))):
    if a % x == 0:
        b += 2
с = int(math.sqrt(a))
с *= с
if с == a:
    b += 1
print(b)
