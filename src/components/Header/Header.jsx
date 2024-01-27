import css from './Header.module.css';
import Modal from '../Modal/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SocialLinks from 'components/SocialLinks/SocialLinks';

export default function Header() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(768));

  return (
    <div className={css.header}>
      <div className={css.headerTextContainer}>
        <h1 className={css.name}>Jose Gonzales</h1>
        <h1 className={css.title}>Full Stack Developer</h1>
      </div>
      {isLargeScreen ? <SocialLinks color='white' /> : <Modal />}
    </div>
  );
}
