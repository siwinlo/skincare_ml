from textgenrnn import textgenrnn

# Soko glam skincare
g = textgenrnn("textgenrnn_weights.hdf5")
g.generate_to_file("generated_products.txt", n=100, temperature=1.0)

# for gh pages site
# g.generate_to_file(
#     "../skincare_ml_ator/src/generated_products.txt",
#     n=50,
#     temperature=0.5
# )

