import os
from flask import Flask, request, jsonify
from model.recommender import Recommender

app = Flask(__name__)

model = Recommender("model/internships.csv")

@app.post("/recommend")
def recommend():
    data = request.json
    location = data.get("location", "")
    skill = data.get("skill", "")
    return jsonify(model.recommend(location, skill))

if __name__ == "__main__":
    app.run(port=8000)
