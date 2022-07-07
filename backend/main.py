from flask import Flask
import json
import random
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)

def write_json_to_file(data):
    with open('data.json', 'r+') as f:
        f.seek(0)
        json.dump(data, f, indent=4)
        f.truncate()

def get_json_from_file():
    with open('data.json', 'r') as file:
        return json.load(file)

file_data = get_json_from_file()

@app.route('/')
@cross_origin(origin='*')
def index():
    return 'Congrats, you found the server!'

@app.route('/create_room/<user_name>')
@cross_origin(origin='*')
def create_room(user_name: str):
    # Generate random room code
    id = random.randint(1,9576)

    # Generate json data for room including setting host
    file_data['rooms'][str(id)] = {'players': [user_name], 'host': user_name}
    
    # Write the new json data back to the file
    write_json_to_file(file_data)

    # Print id to console
    print(f"New room created with id {id}")

    # Return room data to host for displaying
    return str(id)

@app.route('/join_room/<user_name>/<room_code>')
@cross_origin(origin='*')
def join_room(user_name: str, room_code:str):
    # Add player to players list if not already added
    if user_name not in file_data['rooms'][room_code]['players']:
        file_data['rooms'][room_code]['players'].append(user_name)
    
    # Write new changes to file
    write_json_to_file(file_data)

    # Return player list for client side processing
    return str(file_data['rooms'][room_code]['players'])

@app.route('/get_players/<room_code>')
@cross_origin(origin='*')
def get_players(room_code):
    return str(file_data['rooms'][room_code]['players'])

if __name__ == '__main__':
    print(file_data)
    app.run(host='0.0.0.0', port=80, debug=True)
