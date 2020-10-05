import styles from '../styles/card.module.css';
export default function card(props) {
  return (
    <React.Fragment>
      <article className={styles.card}>
        <figure className={styles.flex}>
          <img src={props.icon} alt='' />
          <figcaption>{props.fc}</figcaption>
        </figure>
        <p>{props.p}</p>
      </article>
    </React.Fragment>
  );
}
