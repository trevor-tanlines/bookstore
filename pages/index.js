import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { bookStore } from "@/data/books";
import { useState } from "react";
import Footer from "@/components/Footer";
import Product from "@/components/Product";
import Header from "@/components/Header";
import Button from "@/components/Button";


export default function Home() {

  const [data, setData] = useState([]);

  const allBooks = () => {
    setData(bookStore);
    console.log(bookStore);
  }

  const book = (course) => {
    const filter = bookStore.filter(item => item.course.includes(course));
    setData(filter);
   }

   const sortBookTitle = () => {
    data.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    console.log(data);
   }
  return (
    <>
      <Head>
        <title>BCIT Book Store</title>
        <meta name="description" content="All online pick-up orders are available at the Burnaby Campus Bookstore (SE2). PLease allow 2-3 business days for order processing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main className={`${styles.main}`}>
        <div className={styles.sidePage}>
                  <ul>
                      <li onClick={allBooks}>All</li>
                      <li onClick={() => book('MKTG')}>Marketing</li>
                      <li onClick={() => book('COMM')}>Communications</li>
                      <li onClick={() => book('COMP')}>Computer Science</li>
                      <li onClick={() => book('MATH')}>Math</li>
                  </ul>
        </div>

        <Button onClick={() => sortBookTitle()} sort={"Book Title"}/> 
        <Button sort={"↑"}/> 
        <Button sort={"↓"}/> 

        {
            data.map((book) => (
              <Product key={book.title} book={book}/>
            ))
        }

      </main>
      <Footer/>
    </>
  );
}
