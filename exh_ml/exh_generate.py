from textgenrnn import textgenrnn

# Artforum press releases
t = textgenrnn("textgenrnn_weights.hdf5")
t.generate_to_file("generated_press.txt", n=100, temperature=0.3, prefix="This")