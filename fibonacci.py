# sequência de Fibonacci	- Alan Teixeira de Matos - alanteixeiradematos@gmail.com
num = int(input("digite um número: "))

i = 0
j = 1
while i < num:
    ant = i
    i = i + j
    j = ant

    if i == num:
        break   
    
if i == num:
        print(f"O número {num} está na sequência de Fibonacci.")
else:
        print(f"O número {num} não está na sequência de Fibonacci.")
