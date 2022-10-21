import React from "react";
import styles from './ChooseEmirate.module.css'
import config from '../../config'
import { Link } from "react-router-dom";

export {};

const ChooseEmirate = () => {

const {emirates} = config
  return (
    <>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Explore Places People Love</h1>
          <p>choose your emirate</p>
        </div>
        <div className={styles.chooseEmirate}>
          {emirates.map((emirate: any) => {
            return (
              <Link key={emirate.name} to={`/em/${emirate.slug}`}>
                <div className={styles.selectEmirate}>
                  <p>{emirate.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default ChooseEmirate;
