import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {extname,join,normalize} from 'node:path';
const root=process.cwd(),port=Number(process.env.PORT||4173);
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8'};
createServer(async(req,res)=>{let path=decodeURIComponent((req.url||'/').split('?')[0]);if(path==='/')path='/index.html';let file=normalize(join(root,path));if(!file.startsWith(root)){res.writeHead(403).end();return}try{if(!(await stat(file)).isFile())throw Error('not file');let body=await readFile(file);res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-store'}).end(body)}catch{res.writeHead(404,{'Content-Type':'text/plain'}).end('Not found')}}).listen(port,()=>console.log(`Open http://localhost:${port}/ and http://localhost:${port}/admin.html`));
