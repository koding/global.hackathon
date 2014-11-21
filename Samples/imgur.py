# Imgur is used to share photos with social networks and
# on-line communities.
#
# This example uses python sdk to make an anonymous request
# to get the links of latest photos in the gallery.
#
# Please see these for more information:
#
# https://api.imgur.com
# https://github.com/Imgur/imgurpython

from imgurpython import ImgurClient

client_id     = '<YOUR CLIENT ID>'
client_secret = '<YOUR CLIENT SECRET>'

client = ImgurClient(client_id, client_secret)

# Example request
items = client.gallery()
for item in items:
    print(item.link)
