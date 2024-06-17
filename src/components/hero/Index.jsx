import React from 'react';

import styles from './hero.module.scss';
import logo from '../../assets/img/logo.png';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <img
                src={logo} alt="Logo"
                className={styles.logo} />
        </section>
    );
}

export default Hero;
