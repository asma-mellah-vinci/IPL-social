# DEVOPS EXAM – IPL Social - JANUARY 2026

# AUTHOR 
Student : Asma Mellah 
Email   : asma.mellah@student.vinci.be

# REPOSITORY
https://github.com/asma-mellah-vinci/IPL-social

# PROJECT DESCRIPTION

This project was developed for the DevOps course exam.
It contains an email validation function written in TypeScript using
Test Driven Development (TDD).

Unit tests are implemented with Jest and automatically executed through
a Continuous Integration pipeline using GitHub Actions on Pull Requests.

An email is considered valid if:
- it contains one @
- it has text before and after the @
- the domain contains a dot (.) that is not the last character
- it does not contain spaces

Technologies used 

- TypeScript
- Node.js
- Jest
- GitHub Actions

# RUN TESTS
```bash
npm test
