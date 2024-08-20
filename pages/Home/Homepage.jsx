import styles from './Homepage.module.css';

export default function Homepage(){
    return (
        <main className={styles.homepage}>
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
           </section>
        </main>
    )
}