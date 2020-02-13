import requests
import json


def fetch_listings():
    response = requests.get("https://artopod.herokuapp.com/api")
    product_json = response.json()
    with open("all_listings.json", "w") as write_file:
        json.dump(product_json, write_file)


def parse_listings():
    with open("all_listings.json", "r") as read_file:
        data = json.load(read_file)
        press_releases = []
        for exh in data:
            if type(exh["description"]) == str:
                press_releases.append(exh["description"][:700])
        return press_releases


def write_prs():
    t = open("all_press_releases.txt", "w")
    data = parse_listings()
    data_str = "\n "
    data_str = data_str.join(data)
    t.write(data_str)
    t.close()


# fetch_listings()

write_prs()

