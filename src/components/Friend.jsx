import React from "react";
import styles from './Friend.module.css'

const Friend =({avatar, name, isOnline}) => {
    return (
        <li className={styles.item}>
             {isOnline ? (
             <span className={styles.status}></span> 
                ) : (
             <span className={styles.offlineStatus}></span> 
                )}
            <div className={styles.avatarContainer}>
                 <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            </div>
            <p className={styles.name}>{name}</p>
        </li>        
    )
}

export default Friend;
