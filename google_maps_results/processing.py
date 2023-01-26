import json


with open('scraping_output.json', 'r') as f:
	data = json.load(f)

def getImage():
    image_links = []

    for d in data:
        print(d["image"])
        # image_links.append(data[i].image)
    return image_links
    
getImage()
# print(getImage())

