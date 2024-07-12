import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const products = [
  { url: 'https://creations.mtdv.me/BOJIDEN', name: 'Bo Jiden Mask', image: 'https://m.media-amazon.com/images/I/51wi7VqKroL._AC_SX679_.jpg' },
  { url: 'https://creations.mtdv.me/BOJIDEN', name: 'Bo Jiden Wig', image: 'https://i.etsystatic.com/18173219/r/il/1865a2/5388230307/il_570xN.5388230307_7pgg.jpg' },
  { url: 'https://creations.mtdv.me/BOJIDEN', name: 'Invincible Man Light sword', image: 'https://m.media-amazon.com/images/I/51Kq9U2xu-L._AC_UF894,1000_QL80_FMwebp_.jpg' },
  // Add more products as needed
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href="https://img.icons8.com/color/96/joe-biden.png" />
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
