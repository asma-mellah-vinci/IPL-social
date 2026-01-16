import { isValidEmail } from "../src/emailValidator";

test("valid email should return true", () => {
  expect(isValidEmail("test@mail.com")).toBe(true);
});

test("email without @ should be invalid", () => {
  expect(isValidEmail("testmail.com")).toBe(false);
});

test("email with space should be invalid", () => {
  expect(isValidEmail("test @mail.com")).toBe(false);
});

test("email without dot in domain should be invalid", () => {
  expect(isValidEmail("test@mailcom")).toBe(false);
});

test("email with dot at end should be invalid", () => {
  expect(isValidEmail("test@mail.")).toBe(false);
});

test("email without local part should be invalid", () => {
  expect(isValidEmail("@mail.com")).toBe(false);
});

test("email without domain part should be invalid", () => {
  expect(isValidEmail("test@")).toBe(false);
});
