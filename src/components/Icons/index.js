import React from 'react';
import PhoneIcon from './phone.icon';
import SkypeIcon from './skype.icon';
import LinkedInIcon from './linkedIn.icon';
import HomeIcon from './home.icon';
import GitHubIcon from './gitHub.icon';
import EmailIcon from './email.icon';

const Icon = ({
  style = {},
  width = "24px",
  height = "24px",
  className = "",
  type
}) => {
  switch(type) {
    case 'phone':
      return ( <PhoneIcon width={width} style={style} height={height} fill={className} className={className} /> )
    case 'skype':
      return ( <SkypeIcon width={width} style={style} height={height} fill={className} className={className} /> )
    case 'linkedIn':
      return ( <LinkedInIcon width={width} style={style} height={height} fill={className} className={className} /> )
    case 'home':
      return ( <HomeIcon width={width} style={style} height={height} fill={className} className={className} /> )
    case 'gitHub':
      return ( <GitHubIcon width={width} style={style} height={height} fill={className} className={className} /> )
    case 'email':
      return ( <EmailIcon width={width} style={style} height={height} fill={className} className={className} /> )
    default:
      return ''  
  }
}

export default Icon;