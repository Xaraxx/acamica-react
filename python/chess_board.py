
def chess_line(char1,char2,size):
    line = ''
    for i in range(1, size + 1):
        parity = i % 2
        if parity == 0:
            line += char1
        else:
            line += char2

    return line

def chess_board(size):
    for i in range(1, size + 1):
        parity = i % 2
        if parity == 0:
            board = chess_line('#',' ',size)
            print(board)
        else:
            board = chess_line(' ','#',size)
            print(board)


if __name__ == "__main__":
    chess_board(8)