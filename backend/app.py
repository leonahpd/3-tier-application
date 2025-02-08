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

@app.route('/api', methods=['GET'])
def get_api():
    """API endpoint to fetch a message from the database."""
    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        
        cursor.execute("SELECT message FROM messages LIMIT 1;")  
        message = cursor.fetchall()
        
        cursor.close()
        connection.close()
        
        return jsonify(message[0]) if message else jsonify({"message": "No data found!"})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Return JSON error response with HTTP 500 status

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # Debug mode for development
