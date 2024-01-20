import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import countryLookup from '../../images/countryLookup.png';
import memory from '../../images/memory.png';
import phonebook from '../../images/phonebook.png';
import webstudio from '../../images/webstudio.png';
import icecream from '../../images/icecream.png';
import filmoteka from '../../images/filmoteka.png';
import slimmom from '../../images/slimmom.png';
import css from './Projects.module.css';

export default function Projects() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentDescription, setCurrentDescription] = useState('');

  const handlePopoverOpen = (event, description) => {
    setAnchorEl(event.currentTarget);
    setCurrentDescription(description);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setCurrentDescription('');
  };

  const open = Boolean(anchorEl);

  return (
    <div className={css.projectsSection}>
      <p className={css.title}>Front End, REST API, Responsive</p>
      <div className={css.projectsSectionFrontEnd}>
        {frontendImageList.map(image => (
          <div key={image.name}>
            <div className={css.repoLinkContainer}>
              <a href={image.repoLink} target="_blank" rel="noreferrer" className={css.repoLink}>
                Repo:<br/>
                {image.repoLink}
              </a>
            </div>
            <a
              href={image.livePageLink}
              style={{ textDecoration: 'none' }}
              rel="noreferrer"
              target="_blank"
              onMouseEnter={event => {
                handlePopoverOpen(event, image.description);
              }}
              onMouseLeave={handlePopoverClose}
              className={css.projectImage}
            >
              <img
                src={image.image}
                alt={image.name}
                height="300"
                width="300"
              />
            </a>
          </div>
        ))}

        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>{currentDescription}</Typography>
        </Popover>
      </div>
      <p className={css.title}>Team Projects I Lead</p>
      <div className={css.projectsSectionTeam}>
        {teamImageList.map(image => (
          <div key={image.name}>
            <div className={css.repoLinkContainer}>
              <a
                href={image.repoLink}
                target="_blank"
                rel="noreferrer"
                className={css.repoLink}
              >
                Repo:<br/>
                {image.repoLink}
              </a>
            </div>
            <a
              href={image.livePageLink}
              style={{ textDecoration: 'none' }}
              rel="noreferrer"
              target="_blank"
              onMouseEnter={event => {
                handlePopoverOpen(event, image.description);
              }}
              onMouseLeave={handlePopoverClose}
              className={css.projectImage}
            >
              <img
                src={image.image}
                alt={image.name}
                height="300"
                width="300"
              />
            </a>
          </div>
        ))}

        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>{currentDescription}</Typography>
        </Popover>
      </div>
      <div className={css.projectsSectionBackend}>
        <p className={css.title}>Node Backend Projects Coming Soon</p>
      </div>
    </div>
  );
}

const frontendImageList = [
  {
    name: 'Gonzo Phonebook',
    image: phonebook,
    livePageLink: 'https://gogonzogo.github.io/Gonzo-Phonebook/',
    repoLink: 'https://github.com/gogonzogo/Gonzo-Phonebook',
    description: 'A phonebook CRUD app styled with MUI and custom styles.',
  },
  {
    name: 'Gonzo Web Studio',
    image: webstudio,
    livePageLink: 'https://gogonzogo.github.io/Web-Studio/',
    repoLink: 'https://github.com/gogonzogo/Web-Studio',
    description: 'A landing page demonstrating responsive design.',
  },
  {
    name: 'Gonzo Memory',
    image: memory,
    livePageLink: 'https://gogonzogo.github.io/Gonzo-Memory-Game/',
    repoLink: 'https://github.com/gogonzogo/Gonzo-Memory-Game',
    description: 'Fun game with a unique UI experience.',
  },
  {
    name: 'Gonzo Country Lookup',
    image: countryLookup,
    livePageLink: 'https://gogonzogo.github.io/Gonzo-Country-Lookup/',
    repoLink: 'https://github.com/gogonzogo/Gonzo-Country-Lookup',
    description:
      'Unique approach to the standard country lookup with the help of Mapbox.',
  },
];

const teamImageList = [
  {
    name: 'IceCream Shop',
    image: icecream,
    livePageLink: 'https://jiml268.github.io/team-project1/',
    repoLink: 'https://github.com/jiml268/team-project1',
    description:
      'A landing page project. -Role: SCRUM Master. -Team Size: 9 devs. -Stack: HTML, SCSS, JS.',
  },
  {
    name: 'Filmoteka',
    image: filmoteka,
    livePageLink: 'https://gogonzogo.github.io/Filmoteka/',
    repoLink: 'https://github.com/gogonzogo/Filmoteka',
    description:
      'A CRUD app of movies and TV shows which users can create their own watchlists. -Role: Team Lead. -Team Size: 5 devs -Stack: HTML, SCSS, JS. ',
  },
  {
    name: 'Slimmom',
    image: slimmom,
    livePageLink: 'https://gogonzogo.github.io/Slimmom/',
    repoLink: 'https://github.com/gogonzogo/Slimmom',
    description:
      'Full Stack food diary app for tracking calories. -Role: Team Lead. -Team Size: 8 devs. -Stack: React, Node, Express, MongoDB, MUI.',
  },
];
