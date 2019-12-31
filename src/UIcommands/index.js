import { socials } from 'assets/resume.json';

const toGitHub = () => { window.open(socials.github) };
const toLinked = () => { window.open(socials.linkedin) };
const print = () => { window.print() };
const email = () => { window.location.href = "mailto:kostasfq@gmail.com"; };
const telegram = () => { window.open('https://web.telegram.org//#/im?p=@kostasfq') };


export const commands = {
  'gitHub': toGitHub,
  'linkedIn': toLinked,
  'print': print,
  'email': email,
  'chat': telegram
}
