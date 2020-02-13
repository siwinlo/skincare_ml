import tweepy
from time import sleep

# from credentials import *


# auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
# auth.set_access_token(access_token, access_token_secret)
# api = tweepy.API(auth)


def post_tweet():
    with open("../generated_press.txt") as t:
        pr = t.readline()
        i = 1
        while pr:
            print("{}".format(pr))
            pr = t.readline()
            i += 1
            # try:
            #     print(res)
            #     if res != "":
            #         api.update_status(res)
            #         sleep(5000)
            #     else:
            #         pass
            # except tweepy.TweepError as e:
            #     print(e.reason)
            #     sleep(2)


post_tweet()
