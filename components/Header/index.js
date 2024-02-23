import Link from "next/link"
import styles from "@/components/Header/Header.module.css"


export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.bcit}>
                <img src="/images/bcit_logo.png" alt="bcit" width={65} height={65}></img>
            </div>
            <div className={styles.list}>
                <ul>
                    <li>Home</li>
                    <li>Hours</li>
                    <li>Merchandise</li>
                </ul>
            </div>
            <div className={styles.cart}>
                <img src="/images/shopping.png" alt="cart" width={35} height={35}></img>
            </div>
        </div>
    )
}