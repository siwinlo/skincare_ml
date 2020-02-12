from textgenrnn import textgenrnn

# Artforum press releases
t = textgenrnn()
t.train_from_file("all_press_releases.txt", num_epochs=3)
