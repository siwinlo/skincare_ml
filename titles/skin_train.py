from textgenrnn import textgenrnn

# #soko glam product titles
g = textgenrnn()
g.train_from_file("all_titles.txt", num_epochs=2)

