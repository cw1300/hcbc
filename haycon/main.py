from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
import webbrowser
from threading import Timer

class MyHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def open_browser():
    webbrowser.open('http://localhost:8000')

def run_server():
    port = 8000
    server_address = ('', port)

    # Change to the directory where the script is located
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    httpd = HTTPServer(server_address, MyHTTPRequestHandler)

    print(f"Server running at http://localhost:{port}")
    print("Press Ctrl+C to stop the server")

    # Open browser after a short delay
    Timer(1, open_browser).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        httpd.server_close()

if __name__ == '__main__':
    run_server()