import styles from './Slider.module.css'


function Slider() {

    return (
        <>
            <div className={styles.Body}>
                <div className={styles.Inner}>
                    <div className={styles.InBox}>
                        <div className={styles.TextBox}>
                            <p className={styles.TextBox1}>БРЕНД</p>
                            <p className={styles.TextBox2}>AMERICAN VINTAGE</p>
                            <p className={styles.TextBox3}>Смотреть коллекцию</p>
                        </div>
                        <div className={styles.Pages}>
                            <p className={styles.Page}>01</p>
                            <p>02</p>
                            <p>03</p>
                            <p>04</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider