# Sherlock's Valid String

## Source
This problem was found on [HackerRank][hr].  The problem and its description is
not my property.

## Problem
Sherlock considers a string to be valid if all characters of the string appear
the same number of times. It is also valid if he can remove just **1**
character at **1** index in the string, and the remaining characters will occur
the same number of times. Given a string `s`, determine if it is valid. If so,
return `true`, otherwise return `false`.

For example, if `s = 'abc'`, it is a valid string because frequencies are `{a:
1, b: 1, c: 1}`. So is `s = 'abcc'` because we can remove one `c` and have
**1** of each character in the remaining string. If `s = 'abccc'` however, the
string is not valid as we can only remove **1** occurrence of `c`. That would
leave character frequencies of `{a: 1, b: 1, c: 2}`. 

[hr]: https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
