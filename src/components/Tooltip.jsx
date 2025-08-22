import styles from './Tooltip.module.css'

//-----> Tooltip component
export default function Tooltip({position,text,children}){
    //-----> props --> position , text, children
    return(
        <>
            <div className={styles.container}>
           <div className={styles.target}>
            {/* render the button */}
            {children}
             {/*uses dynamic class  */}
            <span className={`${styles.box} ${styles[position]}`}>{text}</span>
           </div>
            </div>
        </>
    )
}