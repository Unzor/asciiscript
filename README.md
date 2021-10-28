# asciiscript
A simple and minimalistic program that translates ASCII chars to a string and then evaluates them.

# How it works:
#1: It splits every hyphen into an object

#2: Parse each entry as a number

#3: Get the letter from each char code

#4: Combine all the letters

#5: Translate to JavaScript

#6: Evaluate them in a JavaScript sandbox

# Future releases
Asciiscript is currently only for browser, later it will be released to other programming languages, like Python, NodeJS, C++, etc.

# How to use
```
AsciiScript.exec(<code here>, function(result){
// Do something with the result, will be returned as string
});
```
# How to generate code
Run this in your terminal to translate JavaScript code to Asciiscript:
```
npx asciiscript-translator "console.log('Hello World!');"
```
It should generate a string like this:
```
99-111-110-115-111-108-101-46-108-111-103-40-39-72-101-108-108-111-32-87-111-114-108-100-33-32-58-41-39-41
```

# Example
Hello World: 
```
99-111-110-115-111-108-101-46-108-111-103-40-39-72-101-108-108-111-32-87-111-114-108-100-33-32-58-41-39-41
```
