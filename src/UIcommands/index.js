import { socials } from 'assets/resume.json';

const toGitHub = () => { window.open(socials.github) };
const toLinked = () => { window.open(socials.linkedin) };
const print = () => { window.print() };
const email = () => { window.location.href = "mailto:kostasfq@gmail.com"; };

export const commands = {
  'open gitHub': toGitHub,
  'open linkedIn': toLinked,
  'print': print,
  'send email': email
}


