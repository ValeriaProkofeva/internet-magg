import styles from './Collection.module.css'


function Collection() {

    return (
        <>
            <div className={styles.CollectionCont}>
                <div className={styles.CollectionLeft}>
                    <div className={styles.LeftTextBox}>
                        <p className={styles.textH}>NEW <br /> ARRIVAL</p>
                        <p className={styles.textP1}>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip</p>
                    </div>
                </div>
                <div className={styles.CollectionRight}>
                    <div className={styles.RightBox}>
                        <div className={styles.ImgBox}>
                            <p className={styles.textP}>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection