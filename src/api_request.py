import json
import requests
from http.server import HTTPServer, BaseHTTPRequestHandler


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        BaseHTTPRequestHandler.end_headers(self)

    def do_GET(self):
        url = 'https://api.leolabs.space/v1/catalog/objects'
        headers = {'Authorization': 'basic vHycyWNgvv-sxa56:rUMcQb2dct1AKKCol6kkkEK6Ev64pIOdQSp7G9nbg54'}
        r = requests.get(url, headers=headers)
        print(r.json())
        self.send_response(200)
        self.end_headers()
        self.wfile.write(bytes(json.dumps(r.json()), 'utf8'))


httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
httpd.serve_forever()