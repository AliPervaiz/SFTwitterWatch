from flask import Flask, render_template, url_for, request
import main

# IBM WATSON
import json
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, EntitiesOptions, KeywordsOptions

natural_language_understanding = NaturalLanguageUnderstandingV1(
        username='cbc2f010-cc2a-437f-8add-8144b4bc2152',
        password='3Y3QIC2KDBO2',
        version='2018-03-16')

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
            #text = "Hello how are youd doing today, because I am really tired but good",

            features=Features(
                entities=EntitiesOptions(
                    emotion=True,
                    sentiment=True,
                    limit=2
                    ),
                keywords=KeywordsOptions(
                    emotion=True,
                    sentiment=True,
                    limit=2
                    )
                )   
           ) 

    # return json.dumps(response, indent=2)
    data = json.loads(json.dumps(response, indent=2))
    # return json.dumps(response, indent=2)['keywords'][0]['sentiment']['score']
    sentiment =data['keywords'][0]['emotion']['joy']
    return str((sentiment))

    # return data
# ['keywords'][0]['sentiment']['score']
     #   return data
    # except:
     #   return "test"





if __name__ == "__main__":
    app.run()
