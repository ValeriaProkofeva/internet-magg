import styles from './Nav.module.css'

function Nav() {

    return (
      <>
        <div className={styles.Nav}>
            <p className={styles.NavP}>ЖЕНЩИНЫ</p>
            <p className={styles.NavP}>МУЖЧИНЫ</p>
            <p className={styles.NavP}>ПОИСК</p>
        </div>
        
      </>
    )
  }
  
  export default Nav