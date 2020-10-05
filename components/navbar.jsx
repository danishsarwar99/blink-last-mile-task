import Link from 'next/link';
import styles from '../styles/navbar.module.css';
export default function navbar() {
  return (
    <React.Fragment>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link href='/'>
              <a className={styles.logo}>
                <img src='/assets/vector.svg' alt='' />
                <img src='/assets/vector-1.svg' alt='' />
                <p className={styles.blink}>blink</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className={styles.site}>vai al sito</a>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
