import { sum } from "../sum";

test("basic sum ", () => {
  expect(sum(1, 2)).toBe(3);
});

test("negaitve positive sum ", () => {
  expect(sum(1, -2)).toBe(-1);
});

test("negaitve negative sum ", () => {
  expect(sum(-1, -2)).toBe(-3);
});
