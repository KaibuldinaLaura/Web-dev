v = int(input())
t = int(input())
s = 109
d = (s + (v * t % s)) % s
print(d)