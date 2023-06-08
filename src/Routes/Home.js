import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.home}>
    <h2 className={styles.header}>Welcome To My Page</h2>
    <p className={styles.firstpar}>
      A website designed to assist you in using a calculator for basic
      calculations effortlessly. We provide step-by-step instructions,
      intuitive interface, and helpful tips, ensuring a smooth and accurate
      calculation experience. Whether it&apos;s addition, subtraction,
      multiplication, or division, our user-friendly platform simplifies the
      process, making math a breeze.
    </p>

    <span className={styles.secondpar}>
      Through my website, you&apos;ll gain confidence in utilizing a
      calculator effectively. From entering numbers and selecting operators to
      understanding the order of operations, we cover it all. You&apos;ll
      master the art of using a calculator, saving time and minimizing errors
      in your calculations. Start exploring now and unlock the full potential
      of your calculator!
    </span>
  </div>
);

export default Home;
