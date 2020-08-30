// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// exec() - Return results in array or null
// const res = re.exec('Helo World aheloc');
// console.log(res);
// console.log(res.index);

// test() - Return true or false
// const res = re.test('HeLlO World');
// console.log(res);

// match() - Return results in array or null
// const str = 'Hello World';
// const res = str.match(re);
// console.log(res);

// search() - Return index of the first match, if not return -1
// const str = 'World Hello';
// const res = str.search(re);
// console.log(res);

// replace() - Return new string with some or all matches of a pattern

// const str = 'World Hello';
// const newStr = str.replace(re, 'dumb');
// console.log(newStr);

// Literal character
let re = /hello/;
re = /hello/i;
re = /^h/i; // Must start with
re = /d$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /^h.llo$/i; // Matches any ONE character
re = /h*llo/i; // Matches any 0 and more character
re = /gre?a?y/i; // 'e' or 'a' optional
re = /gre?a?y\?/i; // Escape char

// Brackets [] - character sets
re = /gr[ae]y/i; // must be a or e
re = /[^GF]ray/i; // except anything except G or F
re = /^[GF]ray/i; // must G or F
re = /[A-Z]/; // except one or all upper case
re = /[a-z]/; // except one or all lower case
re = /[A-Za-z]/; // all upper case & lower case
re = /[0-9]ray/; // accept any digits

// Curly brackets {} - quantitifiers
re = /Hel{2}o/; // must occur n times
re = /Hel{2,4}o/; // range must occur n,m times
re = /Hel{2,}o/; // at least occur n times

// Parentheses() - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Characters classes
re = /\w/; // Word character : Alphanumeric or _ (one)
re = /\w+/; // + = One or More Word character : Alphanumeric or _
re = /\W/; // None Word character : Alphanumeric or _ (one)
re = /\d/; // Match any digit (one)
re = /\d+/; // + = One or more Match any digit
re = /\D/; // None Digits
re = /\s/; // White space character
re = /\S/; // None whitespace character
re = /Hell\b/i; // Word boundary

// Assertions ( Conditional )
re = /x(?=y)/; // x match only if follow by y
re = /x(?!y)/; // x match only if NOT follow by y
// String to match
const str = 'saxxwedsxytewe';

// Console.log
const res = re.exec(str);
console.log(res);

function regTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} doesn't matched ${re.source}`);
  }
}

regTest(re, str);
