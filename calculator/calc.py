tokens = input("what would you like to calculate?: ")
print(tokens)
x = tokens.split(',')
n = len(tokens)
print(x)
if (x[0] == '+'):
    print(sum(float(x[1:n])))
elif (x[0] == '-'):
    print(float(x[1:n]))
elif (x[0] == '*'):
    print(x[1:n])
elif (x[0] == '/'):
    print(x[1:n])
elif (x[0] == '^/'):
    print(float(x[1:n])**.5)
else:
    print('itsbroken')