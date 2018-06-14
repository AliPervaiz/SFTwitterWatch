from flask import Flask, render_template, url_for, request
import main
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("home.html")

# get data?
@app.route('/tweets', methods=['GET'])
def tweets():
    if request.method == 'GET':
        return main.getTweets()
    else:
        return main.getTweets()



if __name__ == "__main__":
    app.run()