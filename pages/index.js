import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const products = [
  { url: 'https://example.com', name: 'Bo Jiden Mask', image: 'mask.jpg' },
  { url: 'https://example.com', name: 'Bo Jiden Wig', image: 'wig.jpg' },
  { url: 'https://example.com', name: 'Invincible Man Light sword', image: 'sword.jpg' },
  // Add more products as needed
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <title>Bo Jiden</title>
      </Head>
      <header className={styles.titleBar}>
        <h1>Bo Jiden Masks</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.grid}>
          {products.map(product => (
            <Link key={product.url} href={product.url}>
              <a className={styles.card}>
                <img src={product.image} alt={product.name} height="200px" />
                <h3>{product.name}</h3>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
