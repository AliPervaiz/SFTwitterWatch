import twitter, json

consumer_key = 'uSSjBIphPRxfYEtECzmcmjuCA'
consumer_secret = 'EqDxoqzO7vc1kvjY05q33lM5CAS1E2CNnTn4cjeirMKIJNe74S'
access_token = '1006929377794428929-u8SQKrRklmeVq03vUvdMfqKhwEh2Cm'
access_token_secret = 'Kx4fpS4XTQB01A2Jg7HkcHjeEZFzhT7SZXH6ldWjsNIjU'
query_list = 'querylist.txt'
responded = 'responded.txt'

def auth():
    api = twitter.Api(consumer_key=consumer_key,
                      consumer_secret=consumer_secret,
                      access_token_key=access_token,
                      access_token_secret=access_token_secret)
    return api

def removeResponded(urls): #removes URLs listed in respondedurls.txt
    respondedURLs = open(responded, "r")
    for url in respondedURLs:
        urls.remove(url)

def getTweets():
    api = auth()
    urls = set([]) #set of all ids w/ no duplicates
    queries = open(query_list, "r")
    for q in queries:
        search = api.GetSearch(q, count=50)
        for tweet in search:
            try:
                url = "https://twitter.com/" + tweet.user.screen_name+"/status/"+str(tweet.id)
                urls.add(url)
            except UnicodeEncodeError:
                print("Could not add")
    
    removeResponded(urls)            
    j = "{\"urls\": [\"" +  "\", \"".join(urls) + "\"]}"
    j = json.loads(j)
    return j
