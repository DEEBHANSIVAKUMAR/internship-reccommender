import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class Recommender:
    def __init__(self, csv_path):
        self.df = pd.read_csv(csv_path)
        self.df.fillna("", inplace=True)

        self.df["combined"] = (
            self.df["title"] + " " +
            self.df["skills_required"] + " " +
            self.df["description"]
        )

        self.vectorizer = TfidfVectorizer(stop_words="english")
        self.tfidf = self.vectorizer.fit_transform(self.df["combined"])

    def recommend(self, location, skill, top_k=10):
        q_vec = self.vectorizer.transform([skill])
        scores = cosine_similarity(q_vec, self.tfidf).flatten()
        self.df["score"] = scores
        result = self.df.sort_values("score", ascending=False).head(top_k)
        return result.to_dict(orient="records")
