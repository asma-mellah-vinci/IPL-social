import { isValidEmail } from "../src/emailValidator";


test("email valide", () => {
  expect(isValidEmail("test@mail.com")).toBe(true);
});

test("email sans @ est invalide", () => {
  expect(isValidEmail("testmail.com")).toBe(false);
});

test("email avec espace est invalide", () => {
  expect(isValidEmail("test @mail.com")).toBe(false);
});

test("email sans point dans le domaine est invalide", () => {
  expect(isValidEmail("test@mailcom")).toBe(false);
});

