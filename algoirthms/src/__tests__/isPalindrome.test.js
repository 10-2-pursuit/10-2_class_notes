const { isPalindrome } = require('../isPalindrome/isPalindrome.js');

test('returns true for a palindrome string', () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("Madam")).toBe(true);
});

test('returns false for a non-palindrome string', () => {
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("OpenAI")).toBe(false);
});


