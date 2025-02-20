// import Head from 'next/head'; 
import  styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nemo soluta dolore temporibus unde mollitia adipisci aliquid nesciunt recusandae nisi!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim et aperiam quod placeat deserunt est, earum aut. Sint, eveniet vitae?</p>
      <Link className={styles.btn} href="/Route">See Route</Link>
    </div>
  );
}

export default Home;