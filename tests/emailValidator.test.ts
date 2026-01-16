import { isValidEmail } from "../src/emailValidator";


test("email valide", () => {
  expect(isValidEmail("test@mail.com")).toBe(true);
});

test("email sans @ est invalide", () => {
  expect(isValidEmail("testmail.com")).toBe(false);
});

