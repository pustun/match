# About
Simple library inspired by pattern matching in functional languages like F# and others.
Of cause it's not so powerful however it simplify some scenarios and as pattern matching can either return a new value or simply control execution flow.

# Installation
Simply run 
```
npm install --save alta-match
```

# Examples
Let's solve a classical issue called [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz)
```
import {Match} from 'alta-match';

const  fizzBuzzMatch  =  Match.create<number, string>()
	.with(x => x % 5 === 0 && x % 3 === 0, _ => 'Fizz Buzz')
	.with(x => x % 3 === 0, _ => 'Fizz')
	.with(x => x % 5 === 0, _ => 'Buzz')
	.with(_ => true, x  =>  x.toString());

for(let i = 1; i < 100; i++) {
	console.log(fizzBuzzMatch.execute(i));
}
```
We define here matching rules and what to do in each case.
It's how we can simply match something and then map it to something else. Actually when we created a match object we defined the input and output types. In this case input is  a **number** and output is a **string**. We also can use it just to control execution flow, in this case we don't need an output type, we can't omit it, but we can use type **void**. Here is an example:

```
import {Match} from 'alta-match';

Match.create<number, void>()
    .with(x => x < 42, _ => console.log('It\'s a small number'))
    .with(x => x > 42, _ => console.log('It\'s too big'))
    .with(x => x < 42, _ => console.log('Magic number !!!'))
    .execute(73);
```

We do not return anything here, just execute different code.