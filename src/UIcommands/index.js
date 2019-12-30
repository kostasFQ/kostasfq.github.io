import { socials } from 'assets/resume.json';
// import { saveAs } from 'file-saver';

const toGitHub = () => { window.open(socials.github) };
const toLinked = () => { window.open(socials.linkedin) };
const print = () => { window.print(); }

const save = () => {
  console.log('save')
  // const file = new File(["test"], "resume.pdf", {type: "application/pdf; charset=utf-8"});
  // saveAs(file);
};

export const commands = {
  'open gitHub': toGitHub,
  'open linkedIn': toLinked,
  'save': save,
  'print': print
}


