import {mkdir,copyFile} from 'node:fs/promises';
import {join} from 'node:path';
const root=process.cwd();
await mkdir(join(root,'dist'),{recursive:true});
for(const name of ['index.html','admin.html','site.css','site.js','admin.js','data.js'])await copyFile(join(root,name),join(root,'dist',name));
console.log('Static website and admin prototype built in dist/');
