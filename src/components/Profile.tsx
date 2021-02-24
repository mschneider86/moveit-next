import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/mschneider86.png' alt='Matheus Schneider' />
      <div>
        <strong>Matheus Schneider</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}