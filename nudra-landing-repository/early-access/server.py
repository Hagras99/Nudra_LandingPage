import http.server, json, os, re, sqlite3, time
from pathlib import Path
from urllib.parse import urlparse
BASE=Path(__file__).resolve().parent.parent
DATA=Path(os.environ.get('NUDRA_DATA_DIR', BASE/'data')).resolve()
DATA.mkdir(parents=True, exist_ok=True)
DB=DATA/'early-access.sqlite'
with sqlite3.connect(DB) as db: db.execute('CREATE TABLE IF NOT EXISTS early_access (id INTEGER PRIMARY KEY, first_name TEXT NOT NULL, last_name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, phone TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)')
class Handler(http.server.SimpleHTTPRequestHandler):
 def __init__(self,*args,**kwargs): super().__init__(*args,directory=str(BASE/'landing-page'/'dist'),**kwargs)
 def translate_path(self,path):
  p=urlparse(path).path
  if p.startswith('/early-access/'):
   suffix=p[len('/early-access/'):]; root=BASE/'early-access'/'public'; candidate=(root / (suffix or 'index.html')).resolve()
   return str(candidate if candidate.is_relative_to(root.resolve()) else root/'__invalid__')
  return super().translate_path(path)
 def do_GET(self):
  if urlparse(self.path).path=='/early-access': self.send_response(301); self.send_header('Location','/early-access/'); self.end_headers(); return
  super().do_GET()
 def do_POST(self):
  if self.path!='/api/early-access': self.send_error(404); return
  try:
   size=int(self.headers.get('Content-Length','0'))
   if size<=0 or size>12288: raise ValueError()
   d=json.loads(self.rfile.read(size)); first=str(d.get('firstName','')).strip(); last=str(d.get('lastName','')).strip(); email=str(d.get('email','')).strip().lower(); phone=str(d.get('phone','')).strip()
   if not first or not last or len(first)>80 or len(last)>80 or len(email)>254 or not re.fullmatch(r'[^\s@]+@[^\s@]+\.[^\s@]+',email) or not re.fullmatch(r'[+()\d\s.\-]{7,24}',phone): raise ValueError()
   with sqlite3.connect(DB,timeout=10) as db: db.execute('INSERT OR IGNORE INTO early_access(first_name,last_name,email,phone) VALUES(?,?,?,?)',(first,last,email,phone))
   self.respond(200,{'ok':True,'message':'You’re on the early access list.'})
  except (ValueError,TypeError,json.JSONDecodeError): self.respond(400,{'error':'Check your name, email, and phone number.'})
  except Exception: self.respond(500,{'error':'We could not save your request. Please try again.'})
 def respond(self,status,data):
  b=json.dumps(data).encode(); self.send_response(status); self.send_header('Content-Type','application/json'); self.send_header('Cache-Control','no-store'); self.send_header('Content-Length',str(len(b))); self.end_headers(); self.wfile.write(b)
 def end_headers(self):
  self.send_header('X-Content-Type-Options','nosniff'); self.send_header('Referrer-Policy','strict-origin-when-cross-origin'); super().end_headers()
http.server.ThreadingHTTPServer((os.environ.get('HOST','127.0.0.1'),int(os.environ.get('PORT','4181'))),Handler).serve_forever()
