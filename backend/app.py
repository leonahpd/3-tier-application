from flask import Flask, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/items', methods=['GET'])
def get_items():
    db_conn = None
    cursor = None
    try:
        db_conn = mysql.connector.connect(
            host="database",  # The MySQL service name from Docker Compose
            user="root",
            password="rootpassword",
            database="shopping_db"
        )
        cursor = db_conn.cursor(dictionary=True)
        cursor.execute("SELECT name, price FROM items")
        items = cursor.fetchall()

        return jsonify({"items": items})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if cursor:
            cursor.close()
        if db_conn and db_conn.is_connected():
            db_conn.close()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
