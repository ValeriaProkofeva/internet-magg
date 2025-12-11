import styles from "./Footer.module.css"

function Footer() {

  return (
    <>
     <div className={styles.Body}>
        <div className={styles.Inner}>
            <p>БУДЬТЕ В КУРСЕ СОБЫТИЙ</p>
            <div className={styles.Line}></div>
            <div className={styles.Navig}>
                <p>О нас</p>
                <p>Распростаненные вопросы</p>
                <p>Бренды</p>
            </div>
        </div>
     </div>
    </>
  )
}

export default Footer
