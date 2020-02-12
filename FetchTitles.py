import requests
import json


def fetchTitles():
    response = requests.get("https://sokoglam.com/products.json?limit=500")
    product_json = response.json()
    with open("data_file.json", "w") as write_file:
        json.dump(product_json, write_file)


fetchTitles()
