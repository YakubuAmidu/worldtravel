import styles from './Homepage.module.css';

import { Link } from 'react-router-dom';

import Pagenav from '../../src/components/Pagenav/Pagenav';

export default function Homepage(){
    return (
        <main className={styles.homepage}>
            <Pagenav />

           <section>
            <h1>
                You travel the world.
                <br />
                Worldtravel keeps track of your adventures.
            </h1>
            <h2>
                A world map that tracks your footstep into every city you can think 
                of. Never forgot your wonderful experiences, and show your friends how
                you had a wonderful world.
            </h2>
            <Link to="/app" className='cta'>Start tracking now</Link>
           </section>
        </main>
    )
}