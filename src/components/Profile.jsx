import styles from './Profile.module.css'; 

const Profile = () => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profile}>
                <div className={styles.description}>
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar"
                    className={styles.avatar}
                    />
                    <p className={styles.name}>Petra Bolivar</p>
                    <p className={styles.tag}>pbolivar</p>
                    <p className={styles.location}>Salvador, Brasil</p>
                </div>

                <ul className={styles.statsList}>
                    <li className={styles.statsItem}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>1000</span>
                    </li>
                    <li className={styles.statsItem}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>2000</span>
                    </li>
                    <li className={styles.statsItem}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>3000</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile