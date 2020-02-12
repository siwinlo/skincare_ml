from textgenrnn import textgenrnn

# #soko glam products
g = textgenrnn()
# g.train_from_file("all_titles.txt", num_epochs=5)
g.train_from_file("all_descriptions.txt", num_epochs=3)

