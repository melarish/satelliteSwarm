import json
import requests
from http.server import HTTPServer, BaseHTTPRequestHandler


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', 'http://localhost:3000')
        BaseHTTPRequestHandler.end_headers(self)

    def do_GET(self):
        url = 'https://api.leolabs.space/v1/catalog/objects'
        headers = {'Authorization': 'basic vHycyWNgvv-sxa56:rUMcQb2dct1AKKCol6kkkEK6Ev64pIOdQSp7G9nbg54'}
        r = requests.get(url, headers=headers)
        swarm = []
        for satellite in r.json()['objects']:
            if "SWARM" in satellite['name']:
                swarm.append(satellite)
        for satellite in swarm:
            url = 'https://api.leolabs.space/v1/catalog/objects/{}/states?latest=true'.format(satellite['catalogNumber'])
            r = requests.get(url, headers=headers)
            satellite['stateTimestamp'] = r.json()['states'][0]['timestamp']
        self.send_response(200)
        self.end_headers()
        self.wfile.write(bytes(json.dumps({"results": swarm}), 'utf8'))


httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
httpd.serve_forever()