import { socials } from 'assets/resume.json';
// import { saveAs } from 'file-saver';

const toGitHub = () => { window.open(socials.github) };
const toLinked = () => { window.open(socials.linkedin) };
const download = () => {
  const x = __dirname;
  console.log(x)
  // const file = new File(["test"], "resume.pdf", {type: "application/pdf; charset=utf-8"});
  // saveAs(file);
};
const print = () => { window.print(); }

export const commands = {
  'download': download,
  'open gitHub': toGitHub,
  'open linkedIn': toLinked,
  'print': print
}


