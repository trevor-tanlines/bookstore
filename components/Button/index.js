import styles from "@/components/Button/Button.module.css"

export default function Button ({ sort, onClick }) {

    return (
        <button className={styles.button} onClick={onClick}>{ sort }</button>
    )
}
