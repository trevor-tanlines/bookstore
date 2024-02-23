import styles from "./Product.module.css"
import Image from "next/image";

export default function Product({ item }) {

    return (
        <div className={styles.books}>
            <div className={styles.border}>
                <Image src={item.image} width={200} height={300} />
                <p className={styles.course}>{item.course}</p>
                <p className={styles.title}>{item.title}</p>
            </div>
        </div>
                            
    )
}