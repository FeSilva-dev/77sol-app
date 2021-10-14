import styles from './header.module.scss';

import logoImg from '../../../assets/logo.png'

export function Header(){
  return(
    <header>
      <div className={styles.content}>
        <img src={logoImg} alt="77sol logo" />
      </div>
    </header>
  );
}