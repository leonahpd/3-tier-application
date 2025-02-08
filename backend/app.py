from flask import Flask, jsonify
import mysql.connector
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Enable CORS for specific route and origin
CORS(app, resources={r"/api": {"origins": "http://frontend:8080"}})

def get_db_connection():
    """Establishes a connection to MySQL using environment variables."""
    return mysql.connector.connect(
        host=os.getenv('DB_HOST', 'db'),
        user=os.getenv('DB_USER', 'root'),
        password=os.getenv('DB_PASSWORD', 'root'),
        database=os.getenv('DB_NAME', 'testdb')
    )

# Get the current message
@app.route('/api', methods=['GET'])
def get_message():
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT message FROM messages LIMIT 1;")
        message = cursor.fetchone()
        cursor.close()
        connection.close()
        return jsonify({"message": message['message']}) if message else jsonify({"message": "No data found"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Update the message
@app.route('/api/update', methods=['POST'])
def update_message():
    try:
        data = request.get_json()
        new_message = data.get('message')

        if not new_message:
            return jsonify({"error": "Message cannot be empty"}), 400

        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("UPDATE messages SET message = %s WHERE id = 1;", (new_message,))
        connection.commit()
        cursor.close()
        connection.close()

        return jsonify({"message": "Message updated successfully"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
