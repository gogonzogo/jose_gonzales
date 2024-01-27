import css from './SocialLinks.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function SocialLinks({color}) {
  const email = 'jose.gonzales08@ymail.com';
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(480));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between(481, 768));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between(769, 1024));

  const getWidth = () => {
    if (isSmallScreen) {
      return '30px';
    } else if (isMediumScreen) {
      return '40px';
    } else if (isLargeScreen) {
      return '50px';
    } else {
      return '60px';
    }
  };

  const getHeight = () => {
    if (isSmallScreen) {
      return '30px';
    } else if (isMediumScreen) {
      return '40px';
    } else if (isLargeScreen) {
      return '50px';
    } else {
      return '60px';
    }
  };

  return (
    <div className={css.headerLinksContainer}>
      <a
        href="https://www.linkedin.com/in/jose-gonzales/"
        className={css.iconLink}
        aria-label="LinkedIn"
        rel="noreferrer"
        target="_blank"
      >
        <LinkedInIcon
          style={{ fill: color, width: getWidth(), height: getHeight() }}
        />
      </a>
      <a href={`mailto:${email}`} className={css.iconLink} aria-label="Mail">
        <EmailIcon
          style={{ fill: color, width: getWidth(), height: getHeight() }}
        />
      </a>
      <a
        href="https://github.com/gogonzogo"
        className={css.iconLink}
        aria-label="GitHub"
        rel="noreferrer"
        target="_blank"
      >
        <GitHubIcon
          style={{ fill: color, width: getWidth(), height: getHeight() }}
        />
      </a>
    </div>
  );
}

export default SocialLinks;
