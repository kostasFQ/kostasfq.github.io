import React from 'react';
import { ReactComponent as Phone } from 'components/Icons/phone.svg';
import { ReactComponent as Email } from 'components/Icons/email.svg';
import { ReactComponent as Home } from 'components/Icons/home.svg';
import { ReactComponent as Skype } from 'components/Icons/skype.svg';
import { ReactComponent as Github } from 'components/Icons/github.svg';
import { ReactComponent as Linked } from 'components/Icons/linked.svg';

const Icon = ({ type, className }) => {
  switch(type) {
    case 'phone':
      return<Phone />
    case 'email':
      return <Email />
    case 'home':
      return <Home />
    case 'skype':
      return <Skype />
    case 'github':
      return <Github />
    case 'linkedIn':
      return <Linked />
    default:
    return ''  
  }
}

export default Icon;