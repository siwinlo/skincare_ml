from textgenrnn import textgenrnn

# Artforum press releases
t = textgenrnn("textgenrnn_weights.hdf5")
batch = t.generate(n=10, return_as_list=True, temperature=0.2, prefix="The i")

with open("../docs/src/generated_press.txt", "a") as myfile:
    for line in batch:
        myfile.write("\n" + line)

