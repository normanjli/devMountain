def hasUnique():
    str = input('enter a string to check:')
    for i in range(len(str)):
        for j in range(i, len(str)-1):
            if str[i] == str[j+1]:
                return False
    return True

def hasUnique1():
    str = input('enter s string to check: ')
    for x in str:
        print(str, x, str.count(x))
        if str.count(x) != 1:
            return False
    return True

print(hasUnique1()) 