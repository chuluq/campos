import styles from "@/components/Navbar/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>CAMPOS.</h1>
      </div>
    </header>
  );
}
