import tweepy
from time import sleep
from credentials import *
import random


auth = tweepy.OAuthHandler(key, secret_key)
auth.set_access_token(token, token_secret)
api = tweepy.API(auth)


def post_tweet():
    list_of_prs = []
    with open("../generated_press.txt", "r") as t:
        for line in t:
            list_of_prs.append(line)
    i = 1
    while i < 3:
        res = random.choice(list_of_prs)[:135]
        i += 1
        try:
            print(res)
            if res != "":
                api.update_status(res)
                print("TWEET: ", res)
                sleep(3600)
            else:
                pass
        except tweepy.TweepError as e:
            print(e.reason)
            sleep(2)


post_tweet()
