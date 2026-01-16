import { isValidEmail } from "../src/emailValidator";


test("email valide", () => {
  expect(isValidEmail("test@mail.com")).toBe(true);
});