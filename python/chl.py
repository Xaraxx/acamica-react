
def christmasTree(string, times):
    for i in range(0, times + 1):
        # print(i)
        new_str = ''
        new_str = string * i
        
        print(new_str)
    return new_str

def fizz_buzz(num1, num2):
    for i in range(num1, num2 + 1):
        three_divisible = i % 3
        five_divisible = i % 5

        if three_divisible == 0:
            print('Fizz')
        elif five_divisible == 0:
            print('Buzz')
        else:
            print(i)


if __name__ == "__main__":
    christmasTree('#', 7)
    fizz_buzz(1, 100)
    