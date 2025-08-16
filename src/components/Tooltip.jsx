import styles from './Tooltip.module.css'
export default function Tooltip({position,text,children}){
    return(
        <>
            <div className={styles.container}>
           <div className={styles.target}>

            {children}
            <span className={`${styles.box} ${styles[position]}`}>{text}</span>
           </div>
            </div>
        </>
    )
}