function translate_to_asciiscript(code, cb){
var int = 0;
var fin=[];
var str=code;
var array=str.split('');
array.forEach(function(entry){
int = int + 1;
fin.push(entry.charCodeAt(0) + '-');
if (int == array.length){
cb(fin.join('').slice(0, -1));
}
})
}
