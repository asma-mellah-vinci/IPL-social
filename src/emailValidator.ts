export function isValidEmail(email: string): boolean {
  if (email.includes(" ")) {
    return false;
  }

  if (!email.includes("@")) {
    return false;
  }

  const [localPart, domainPart] = email.split("@");

  if (!localPart || !domainPart) {
    return false;
  }

  if (!domainPart.includes(".")) {
    return false;
  }

  if (domainPart.endsWith(".")) {
    return false;
  }

  return true;
}
