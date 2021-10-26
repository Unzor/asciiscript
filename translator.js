var int = 0;
var fin=[];
var str=process.argv[2];
var array=str.split('');
array.forEach(function(entry){
int = int + 1;
fin.push(entry.charCodeAt(0) + '-');
if (int == array.length){
console.log(fin.join('').slice(0, -1));
}
})
