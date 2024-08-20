import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

function Logo(){
    return (
        <Link to="/">
            <div className={styles.section}>
            <img src="/worldtravellogo.png" alt="worldtravel logo" className={styles.logo} />
            <p className={styles.p}>WorldTravel</p>
            </div>
        </Link>
    )
}

export default Logo;