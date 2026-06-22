import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.glow} />
      
      <div className={styles.content}>
        <div className={styles.badge}>Next.js Demo Project</div>
        
        <h1 className={styles.title}>
          Experience the Future of Web Development
        </h1>
        
        <p className={styles.description}>
          A premium Next.js structure configured for optimal performance, built with pure Vanilla CSS, featuring stunning glassmorphism, dynamic animations, and an immersive user interface.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>View Source</button>
        </div>
        
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.cardIcon}>⚡</div>
            <h2>Next.js 14 App Router</h2>
            <p>
              Leverage React Server Components, powerful routing, and edge computing for unmatched performance.
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <div className={styles.cardIcon}>✨</div>
            <h2>Premium Aesthetics</h2>
            <p>
              Custom designed with harmonious colors, smooth gradients, and elegant typography that wow at first glance.
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <div className={styles.cardIcon}>🚀</div>
            <h2>Vanilla CSS</h2>
            <p>
              Built using standard, robust CSS modules for maximum flexibility, free from utility-class clutter.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
