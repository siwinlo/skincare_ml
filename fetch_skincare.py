import requests
import json
from bs4 import BeautifulSoup


def fetch_products():
    response = requests.get("https://sokoglam.com/products.json?limit=500")
    product_json = response.json()
    with open("all_products.json", "w") as write_file:
        json.dump(product_json, write_file)


def parse_titles():
    with open("all_products.json", "r") as read_file:
        data = json.load(read_file)
        titles = []
        for product in data["products"]:
            titles.append(product["title"])
        return titles


def write_titles():
    t = open("all_titles.txt", "w")
    data = parse_titles()
    data_str = "\n "
    data_str = data_str.join(data)
    t.write(data_str)
    t.close()


def parse_descriptions():
    with open("all_products.json", "r") as read_file:
        data = json.load(read_file)
        descriptions = []
        for product in data["products"]:
            body_html = product["body_html"][
                :300
            ]  # trimmed to make this more manageable
            soup = BeautifulSoup(body_html)
            descriptions.append(soup.get_text())
            # we still get some tags of the <!-- --> variety...

        return descriptions


def write_descriptions():
    t = open("all_descriptions.txt", "w")
    data = parse_descriptions()
    data_str = "\n  "
    data_str = data_str.join(data)
    t.write(data_str)
    t.close()


write_descriptions()

