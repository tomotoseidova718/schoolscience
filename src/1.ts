import random
a = []
b = []
for i in range(1, 5):
    c = random.randint(1, 10)
    if c % 2 == 0:
        a.append(c)
    else:
        b.append(c)
print(" ".join([str(x) for x in a]))