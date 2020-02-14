from textgenrnn import textgenrnn

# Soko glam skincare
g = textgenrnn("textgenrnn_weights.hdf5")

batch = g.generate(n=10, return_as_list=True, temperature=0.2, prefix="T")

with open("../docs/src/generated_descriptions.txt", "a") as myfile:
    for line in batch:
        myfile.write("\n" + line)

