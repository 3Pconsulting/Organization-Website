const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const check = process.argv.includes('--check');
const configs = [
 ['index.html','why-3p','dark'],
 ['florida.html','why-3p','light'],
 ['beyond-the-fix.html','why-3p','light'],
 ['systems-automation-integration.html','why-3p','dark'],
 ...['business-workflow-cleanup','invoice-payment-organization','missed-lead-follow-up-fix','owner-capacity-recovery-session'].map(x=>['business-fixes/'+x+'.html','why-3p','light']),
 ['florida.html','systems-design','dark','#start'],
 ['systems-automation-integration.html','systems-design','dark','contact.html?service=Systems%20Design%20%26%20Improvement']
];
for (const [file, name, shade, action=''] of configs) {
 const target = path.join(root,file);
 const before = fs.readFileSync(target,'utf8');
 const start = '<!-- shared:'+name+':start -->';
 const end = '<!-- shared:'+name+':end -->';
 const a = before.indexOf(start), b = before.indexOf(end);
 if(a<0 || b<a || before.indexOf(start,a+start.length)>=0) throw Error('Missing/duplicate shared section: '+file+' '+name);
 const source = fs.readFileSync(path.join(root,'partials',name+'.html'),'utf8').trim().replaceAll('{{shade}}',shade).replaceAll('{{action}}',action);
 const after = before.slice(0,a)+start+'\n'+source+'\n'+before.slice(b);
 if(check && before!==after) throw Error('Shared section drift: '+file+' '+name);
 if(!check && before!==after) fs.writeFileSync(target,after);
}
console.log(check?'All 10 shared sections match their sources.':'Shared sections synchronized.');
