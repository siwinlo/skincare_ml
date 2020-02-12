from textgenrnn import textgenrnn

# Artforum press releases
# t = textgenrnn()
# t.train_from_file("all_press_releases.txt", num_epochs=5)

# #soko glam products
g = textgenrnn()
# g.train_from_file("all_titles.txt", num_epochs=5)
g.train_from_file("all_descriptions.txt", num_epochs=5)

