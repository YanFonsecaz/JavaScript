import styles from './Login.module.css'
import { Envelope } from "phosphor-react";
export function Login() {
    return (
        <div className={styles.box}>
            <div>
                <h1>Kayden Tecnology</h1>
            </div>
            <div className={styles.group}>
                <div className={styles.overlapGroup}>
                    <div className={styles.login}>
                        <div className={styles.iconUsers}>
                            <Envelope size={32} className={styles.icon} />
                        </div>
                        <input className={styles.users} type="text" name="" id="" placeholder='Email ID' />
                        <input className={styles.password} type="text" name="" id="" placeholder='Password' />
                        <button className={styles.signIn} type="submit">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}