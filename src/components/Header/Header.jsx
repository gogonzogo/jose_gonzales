import css from './Header.module.css';
import Modal from '../Modal/Modal';

export default function Header() {

  return (
    <div className={css.header}>
      <div className={css.headerTextContainer}>
        <h1 className={css.name}>Jose Gonzales</h1>
        <h1 className={css.title}>Full Stack Developer</h1>
      </div>
      <Modal />
    </div>
  );
}
