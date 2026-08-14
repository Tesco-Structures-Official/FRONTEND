const { parse } = require('@babel/parser');
const fs = require('fs');
const src = fs.readFileSync('src/pages/AboutUs.jsx','utf8');
const r = parse(src, { sourceType:'module', plugins:['jsx'], errorRecovery:true });
console.log('first errors:', (r.errors||[]).slice(0,5).map(e=>`${e.reasonCode} @ ${e.loc.line}:${e.loc.column}`));
const lines = src.split('\n');
[18,19].forEach(n=>{
  const L=lines[n-1];
  const marks=[...L].map((c,i)=>c.charCodeAt(0)>127?`col${i}:U+${c.charCodeAt(0).toString(16)}`:null).filter(Boolean);
  console.log(`line ${n} non-ascii:`, marks.join(' '));
});
