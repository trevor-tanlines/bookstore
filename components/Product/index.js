import styles from "./Product.module.css"
import Image from "next/image";

export default function Product({ book }) {

    return (
        <div className={styles.book}>
            <div className={styles.border}>
                <div className={styles.textContainer}>
                <Image src={book.image} width={200} height={300} />
                <p className={styles.course}>{book.course}</p>
                <p className={styles.title}>{book.title}</p>
                </div>
            </div>
        </div>
                            
    )
}