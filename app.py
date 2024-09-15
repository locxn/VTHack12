# backend/app.py
from flask import Flask, request, jsonify
from src import homegpt

app = Flask(__name__)

@app.route('/app/ml', methods=['POST'])
def run_script():
    # Debugging: Check what data is being received
    data = request.json

    # Call the homegpt.request function
    response = homegpt.request(data)
    print(f"HomeGPT response: {response}")

    return jsonify({"res": response})

if __name__ == '__main__':
    app.run(debug=True)