import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <footer className="navbar footer navbar-expand justify-content-center mt-5">
      <a className="nav-link" href="https://twitter.com/jooami1" target="blank">
        <TwitterIcon />
      </a>
      <a className="nav-link" href="https://github.com/jooami" target="blank">
        <GitHubIcon />
      </a>
      <a
        className="nav-link"
        href="https://www.linkedin.com/in/julian-m"
        target="blank"
      >
        <LinkedInIcon />
      </a>
    </footer>
  );
};

export default Footer;
