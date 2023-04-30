const  digitalRoot = require("../digitalRoot/digitalRoot")

describe('digitalRoot', () => {
  test('returns the correct digital root for 16', () => {
    expect(digitalRoot(16)).toBe(7);
  });

  test('returns the correct digital root for 942', () => {
    expect(digitalRoot(942)).toBe(6);
  });

  test('returns the correct digital root for 132189', () => {
    expect(digitalRoot(132189)).toBe(6);
  });

  test('returns the correct digital root for 493193', () => {
    expect(digitalRoot(493193)).toBe(2);
  });

  test('returns the correct digital root for 999999999', () => {
    expect(digitalRoot(999999999)).toBe(9);
  });
});
