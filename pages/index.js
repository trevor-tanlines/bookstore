import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { bookStore } from "@/data/books";
import { useState } from "react";
import Footer from "@/components/Footer";
import Product from "@/components/Product";
import Header from "@/components/Header";


export default function Home() {

  const [data, useData] = useState([]);

  const allBooks = () => {
    setData(bookStore);
  }

  const book = (course) => {
    const filter = bookStore.filter(item => item.course.includes(course));
    setData(filter);
   }

   console.log('filter', data);

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
                      <li onClick={() => bookStore('MKTG')}>Communications</li>
                      <li onClick={() => bookStore('COMM')}>Computer Science</li>
                      <li onClick={() => bookStore('COMP')}> Marketing</li>
                      <li onClick={() => bookStore('MATH')}>Math</li>
                  </ul>
        </div>

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
