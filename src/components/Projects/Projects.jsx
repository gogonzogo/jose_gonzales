import { useState } from 'react';
import countryLookup from '../../images/countryLookup.png';
import memory from '../../images/memory.png';
import phonebook from '../../images/phonebook.png';
import webstudio from '../../images/webstudio.png';
import icecream from '../../images/icecream.png';
import filmoteka from '../../images/filmoteka.png';
import slimmom from '../../images/slimmom.png';
import slimmomBackend from '../../images/slimmomBackend.png';
import css from './Projects.module.css';
import { Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export default function Projects() {
  const [currentDescription, setCurrentDescription] = useState('');

  const openToolTip = (event, description) => {
    setCurrentDescription(description);
  };

  return (
    <div className={css.projectsSection}>
      <p className={css.title}>Front End, REST API, Responsive</p>
      <div className={css.projectsSectionFrontEnd}>
        {frontendImageList.map(image => (
          <div key={image.name}>
            <div className={css.repoLinkContainer}>
              <a
                href={image.repoLink}
                target="_blank"
                rel="noreferrer"
                className={css.repoLink}
              >
                Click Me for Repo
              </a>
            </div>
            <a
              href={image.livePageLink}
              style={{ textDecoration: 'none' }}
              rel="noreferrer"
              target="_blank"
              onMouseEnter={event => {
                openToolTip(event, image.description);
              }}
              className={css.projectLink}
            >
              <Tooltip title={currentDescription} arrow placement="bottom">
                <Avatar
                  alt={image.description}
                  src={image.image}
                  className={css.projectLinkImage}
                  variant="rounded"
                />
              </Tooltip>
            </a>
          </div>
        ))}
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
                Click Me for Repo{' '}
              </a>
            </div>
            <a
              href={image.livePageLink}
              style={{ textDecoration: 'none' }}
              rel="noreferrer"
              target="_blank"
              className={css.projectLink}
              onMouseEnter={event => {
                openToolTip(event, image.description);
              }}
            >
              <Tooltip title={currentDescription} arrow placement="bottom">
                <Avatar
                  alt={image.description}
                  src={image.image}
                  className={css.projectLinkImage}
                  variant="rounded"
                />
              </Tooltip>
            </a>
          </div>
        ))}
      </div>
      <div className={css.projectsSectionBackend}>
        <p className={css.title}>Node Backend Team Project I Lead</p>
      </div>
      <div className={css.projectsSectionTeam}>
        {backendImageList.map(image => (
          <div key={image.name}>
            <a
              href={image.repoLink}
              style={{ textDecoration: 'none' }}
              rel="noreferrer"
              target="_blank"
              className={css.projectLink}
              onMouseEnter={event => {
                openToolTip(event, image.description);
              }}
            >
              <Tooltip title={currentDescription} arrow placement="bottom">
                <Avatar
                  alt={image.description}
                  src={image.image}
                  className={css.projectLinkImage}
                  variant="rounded"
                />
              </Tooltip>
            </a>
          </div>
        ))}
      </div>
      <div className={css.projectsSectionBackend}>
        <p className={css.title}>Node Backend Personal Projects Coming Soon</p>
      </div>
    </div>
  );
};

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
      'Unique approach to the standard country lookup with the help of Mapbox. Note: Not Responsive Yet.',
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

const backendImageList = [
  {
    name: 'Slimmom API',
    image: slimmomBackend,
    repoLink: 'https://github.com/gogonzogo/Slimmom-Backend-API',
    description:
      'Backend for the Slimmom application. -Role: SCRUM Master. -Team Size: 9 devs. -Stack: MongoDB, Express, Node.',
  },
];
