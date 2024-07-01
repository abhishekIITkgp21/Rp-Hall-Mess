import { useState } from 'react';
import styles from '../styles/Signup.module.css';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, rollNumber, password }),
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div className={styles.container}>
            <h1>Welcome to <span className={styles.highlight}>RP Hall MESS</span></h1>
            <img src="/rp-hall.jfif" alt="RP Hall of Residence" className={styles.image} />
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Roll Number</label>
                    <input
                        type="text"
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.button}>Sign Up</button>
            </form>
            <p>Already Have an Account? <a href="/login" className={styles.link}>Login Here</a></p>
        </div>
    );
}
