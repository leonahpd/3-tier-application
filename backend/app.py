from flask import Flask, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api")
def home():
    try:
        db = pymysql.connect(host="db", user="root", password="root", database="testdb")
        cursor = db.cursor()
        cursor.execute("SELECT message FROM messages LIMIT 1;")
        message = cursor.fetchone()
        db.close()
        return message[0] if message else "No data found!"
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
