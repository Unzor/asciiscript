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

# Example
Hello: 
```
34-72-101-108-108-111-33-34
```
