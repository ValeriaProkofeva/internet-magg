import styles from './About.module.css'

function About() {

    return (
        <>
            <div className={styles.Back}>
                <div className={styles.Inner}>
                    <div className={styles.TextBlock}>
                        <p className={styles.Tz}>о <span className={styles.Tv}>НАС</span> </p>
                        <p className={styles.Ta}>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLoreLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumipLorem ipsumLoremLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem</p>
                    </div>
                    <div className={styles.Photo}>
                        <img src="/img/AboutImg.webp" alt="AboutImg" loading='lazy' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About