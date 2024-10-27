def diamond(rows):
    total_rows = 2 * rows - 1

    for i in range(total_rows):
        if i < rows:
            stars = 2 * i + 1
            spaces = rows-i-1
        else:
            stars = 2 * (total_rows - i) - 1
            spaces = i - rows +1
        print(" " * spaces + "*" * stars)

try:
    rows = int(input("Enter the number of rows: "))
    diamond(rows)
except ValueError:
    print("Please enter a valid number.")
