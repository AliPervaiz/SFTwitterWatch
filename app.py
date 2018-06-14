from flask import Flask, render_template, url_for, request
import main

# IBM WATSON
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, EntitiesOptions, KeywordsOptions
import twitter_wrapper

natural_language_understanding = NaturalLanguageUnderstandingV1(
        username='a058b551-a067-48ad-9c08-3d57cb331a12',
        password='nW4Q8XpczFc4',
        version='2017-02-27')



app = Flask(__name__)

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/testing")
def testing():
    return render_template("testing.html")

# get data?
@app.route('/tweets', methods=['GET'])
def tweets():
    if request.method == 'GET':
        return main.getTweets()
    else:
        return main.getTweets()

@app.route('/sentiment/<message>', methods=['GET'])
def sentiment(message):
    response = natural_language_understanding.analyze(

            text = message,

            features = Features(
                keywords=KeywordsOptions(
                    emotion=True,
                    sentiment=True,
                    limit=1)),
                
            language = 'en')

    try:
        data = json.loads(json.dumps(response, indent=2))
    except:
        pass


    return data['keywords'][0]['sentiment']['score']



if __name__ == "__main__":
    app.run()
