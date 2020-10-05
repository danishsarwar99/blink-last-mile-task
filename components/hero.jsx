import styles from '../styles/hero.module.css';
export default function hero(props) {
  return (
    <React.Fragment>
      <article className={styles.hero}>
        <figure className={styles.overlay}>
          <img src={props.src} alt='bio c bon' />
          <figcaption className={styles.figCap}>
            <section className={styles.callToAction}>
              <p> SPEDIZIONE N° {props.code}</p>
              <figure>
                <img
                  className={styles.button}
                  src='/assets/Group 415.svg'
                  alt='modify button'
                />
              </figure>
            </section>
            <section className={styles.status}>
              <p>
                Ciao <strong>{props.reciever}</strong>
                <br />
                la tua spedizione è
              </p>
              <h2>{props.status}</h2>
            </section>
          </figcaption>
        </figure>
      </article>
    </React.Fragment>
  );
}
{
  /* <p className='cord'>cord</p>
          <p className='greet'>Greet</p>
          <p className='status'>status</p> */
}
