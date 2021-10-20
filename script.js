// строка в обратном порядке
function reverseString(str) {

    return str\.split("").reverse().join("");
  
  }
  
  
  
  reverseString("hello"); // -> 'olleH'

// сосчитать количество символов в верзнем регистре
function countBigs(str) {
str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    count = str.split(' ').length;
    return count;
}
console.log(countBigs('Jl{P12}34Ao')); // -> 3   // 1 ?

// найти наибольшую цифру в строке

var array = [4,5,1,6,2,3,9,1,2,4,1,2,4,4];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}




console.log(largest);

// сосчитать слова
function countWords(str) {
   str = str.replace(/(^\s*)|(\s*$)/gi,"");
   str = str.replace(/[ ]{2,}/gi," ");
   str = str.replace(/\n /,"\n");
   return str.split(' ').length;
   }
console.log(countWords('Привет ну че там как там ало бля я не понял, че как там  говоорю, ало', 'там'));

// получить кусочек строки
var anyString = 'Hello';


console.log(anyString.substring(2, 3));
console.log(anyString.substring(2, 10));


console.log(anyString.substring(0, -1));
console.log(anyString.substring(-1, 5));
console.log(anyString.substring(-12, 10));

var aString = 'Hello';

console.log(aString.substr(2, 3));   
console.log(aString.substr(2, 10));  
console.log(aString.substr(0, -1));  
console.log(aString.substr(-1, 5));  
console.log(aString.substr(-12, 10));    

console.log(anyString.substring(-12, 10))



// вставить подстроку в индекс
String.prototype.insert = function(index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substr(index);
  }

  return string + this;
};


var something = "Hi name is Danya";
something = something.insert(2, " my");
console.log(something)

// найти все индексы найибольшей цифры в строке
var a = [4,5,1,6,2,3,1,2,6,4,5,1,2,4,4];
var indexOfMaxValue = a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

console.log("indexOfMaxValue = " + indexOfMaxValue);
