const { disemvowel } = require("../disemvowellTrolls/disemvowellTrolls");

describe("disemvowel", () => {
    test("removes all vowels from a string", () => {
      expect(disemvowel("hello world")).toBe("hll wrld");
    });
  
    test("handles strings with mixed case vowels", () => {
      expect(disemvowel("The quick brown fox JUMPS over the LAZY dog")).toBe(
        "Th qck brwn fx JMPS vr th LZY dg"
      );
    });
  
    test("returns an empty string when given only vowels", () => {
      expect(disemvowel("aeiouAEIOU")).toBe("");
    });
  
    test("returns the original string if it contains no vowels", () => {
      expect(disemvowel("xyz")).toBe("xyz");
    });
  });
  