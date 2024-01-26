import css from './SocialLinks.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function SocialLinks() {
  const email = 'jose.gonzales08@ymail.com';

  return (
    <div className={css.headerLinksContainer}>
      <a
        href="https://www.linkedin.com/in/jose-gonzales/"
        className={css.iconLink}
        aria-label="LinkedIn"
        rel="noreferrer"
        target="_blank"
      >
        <LinkedInIcon style={{ fill: 'black', width: '30', height: '30' }} />
      </a>
      <a href={`mailto:${email}`} className={css.iconLink} aria-label="Mail">
        <EmailIcon style={{ fill: 'black', width: '30', height: '30' }} />
      </a>
      <a
        href="https://github.com/gogonzogo"
        className={css.iconLink}
        aria-label="GitHub"
        rel="noreferrer"
        target="_blank"
      >
        <GitHubIcon style={{ fill: 'black', width: '30', height: '30' }} />
      </a>
    </div>
  );
}

export default SocialLinks