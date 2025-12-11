import styles from './Header.module.css'
import Nav from './Nav/Nav'


function Header() {

    return (
        <>
            <div className={styles.Body}>
                <div className={styles.HeaderCont}>
                    <img src="/img/logo.svg" alt="logo" loading="lazy" />
                    <Nav></Nav>
                    <div className={styles.Menu}>
                        <img className={styles.Img} src="/img/profile.svg" alt="logo" loading="lazy" />
                        <img className={styles.Img} src="/img/fav.svg" alt="logo" loading="lazy" />
                        <img className={styles.Img} src="/img/basket.svg" alt="logo" loading="lazy" />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Header