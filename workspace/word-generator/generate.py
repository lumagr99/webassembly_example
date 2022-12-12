import random

words_file = open("input.txt", mode="r")

words = []

for word in words_file:
    words.append(word)


def getRandomWords(amount):
    random_words = []
    random.shuffle(words)
    for x in range(0, amount):
        random_words.append(words[x])
    return random_words


def writeFile(amount, file):
    e = open(file, mode="w")
    for word in getRandomWords(amount):
        e.write(word)


writeFile(100, "./export/100.txt")
writeFile(250, "./export/250.txt")
writeFile(500, "./export/500.txt")
writeFile(1000, "./export/1000.txt")
writeFile(5000, "./export/5000.txt")
writeFile(10000, "./export/10000.txt")

