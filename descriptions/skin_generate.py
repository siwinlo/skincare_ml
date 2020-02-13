from textgenrnn import textgenrnn

# Soko glam skincare
g = textgenrnn("textgenrnn_weights.hdf5")
# g.generate_to_file("generated_products.txt", n=10, temperature=1.0)
# g.generate_to_file("generated_descriptions.txt", n=100, temperature=0.5, prefix="This")
g.generate_to_file(
    "../skincare_ml_ator/src/generated_descriptions.txt",
    n=5,
    temperature=0.5,
    prefix="This",
)

