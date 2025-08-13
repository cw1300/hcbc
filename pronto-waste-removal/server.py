#!/usr/bin/env python3
"""
Pronto Waste Removal - Web Server
Simple Python server to serve the landing page
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
import mimetypes

class CustomHTTPRequestHandler(SimpleHTTPRequestHandler):
    """Custom HTTP handler with proper MIME types"""

    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def guess_type(self, path):
        """Handle MIME types for JSX files"""
        mimetype, _ = mimetypes.guess_type(path)

        if path.endswith('.jsx'):
            mimetype = 'text/babel'
        elif path.endswith('.js'):
            mimetype = 'application/javascript'
        elif path.endswith('.css'):
            mimetype = 'text/css'

        return mimetype

def run_server(port=8000):
    """Start the web server"""
    server_address = ('', port)
    httpd = HTTPServer(server_address, CustomHTTPRequestHandler)

    print(f"""
    ╔══════════════════════════════════════════╗
    ║   PRONTO WASTE REMOVAL - SERVER RUNNING  ║
    ╠══════════════════════════════════════════╣
    ║   Server: http://localhost:{port}          ║
    ║   Press Ctrl+C to stop                   ║
    ╚══════════════════════════════════════════╝
    """)

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n✓ Server stopped")
        httpd.shutdown()

if __name__ == '__main__':
    run_server()