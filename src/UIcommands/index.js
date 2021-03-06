import { socials } from 'assets/resume.json';

const toGitHub = () => { window.open(socials.gitHub) };
const toLinked = () => { window.open(socials.linkedIn) };
const print = () => { window.print() };
const email = () => { window.location.href = "mailto:kostasfq@gmail.com"; };
const telegram = () => { window.open('https://web.telegram.org//#/im?p=@kostasfq') };


export const commands = {
  'print': print,
  'email': email,
  'telegram': telegram,
  'github': toGitHub,
  'linkedin': toLinked
}
