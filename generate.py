from textgenrnn import textgenrnn

# Soko glam skincare
# g = textgenrnn("textgenrnn_weights.hdf5")
# g.generate_to_file("generated_products.txt", n=10, temperature=1.0)

# Artforum press releases
t = textgenrnn("textgenrnn_weights.hdf5")
t.generate_to_file("generated_press.txt", n=10, temperature=0.2)

