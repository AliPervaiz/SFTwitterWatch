import twitter

consumer_key = 'uSSjBIphPRxfYEtECzmcmjuCA'
consumer_secret = 'EqDxoqzO7vc1kvjY05q33lM5CAS1E2CNnTn4cjeirMKIJNe74S'
access_token = '1006929377794428929-u8SQKrRklmeVq03vUvdMfqKhwEh2Cm'
access_token_secret = 'Kx4fpS4XTQB01A2Jg7HkcHjeEZFzhT7SZXH6ldWjsNIjU'

query_list = 'querylist.txt'

api = twitter.Api(consumer_key=consumer_key,
                  consumer_secret=consumer_secret,
                  access_token_key=access_token,
                  access_token_secret=access_token_secret)

ids = set([]) #set of all ids w/ no duplicates
queries = open(query_list, "r")
for q in queries:
    search = api.GetSearch(q, count=50)
    for tweet in search:
        try:
            print("https://twitter.com/" + tweet.user.name.replace(" ","")+ "/status/"+str(tweet.id))
	    x.add(tweet.id) 
        except UnicodeEncodeError:
            print('Unable to print')

def removeResponded(): #removes tweets that have already been responded to
	respondedIDs = open(responded, "r")
	for tempID in respondedIDs:
		ids.remove(tempID)

