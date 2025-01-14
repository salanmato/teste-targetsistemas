# reverse string 	- Alan Teixeira de Matos - alanteixeiradematos@gmail.com
string = input("digite sua string: ")

l = len(string)
reversed =  ""
while l > 0:
    l -= 1
    reversed = reversed+string[l]

print(reversed)