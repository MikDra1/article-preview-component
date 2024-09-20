import { useState } from 'react'
import styles from './Person.module.css'

function Person() {
    const [isOpen, setIsOpen] = useState(false)

    function handleOpening() {
        setIsOpen(v => !v)
    }

    return (
        <div className={styles.person}>
            <img src="./images/avatar-michelle.jpg" alt="" className={styles.imageAvatar} />
            <div>
                <h3>Michelle Appleton</h3>
                <p>28 Jun 2020</p>
            </div>

            <img src="./images/icon-share.svg" alt="" className={styles.imageShare} onClick={handleOpening} />

            {isOpen && <div className={styles.shareIcons}>
                <div className={styles.shareIconsContent}>
                <h4>SHARE</h4>
                <img src="./images/icon-facebook.svg" alt="icon facebook" />
                <img src="./images/icon-twitter.svg" alt="icon twitter" />
                <img src="./images/icon-pinterest.svg" alt="icon pinterest" />
                </div>
                <img src="./images/share.png" alt="" className={styles.imageAbsShare} onClick={handleOpening} />
            </div>}
        </div>
    )
}

export default Person
