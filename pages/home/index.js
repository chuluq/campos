import Layout from "@/components/Layout";
import Button from "@/components/Button";
import FacebookIcon from "@/assets/facebook.svg";
import InstagramIcon from "@/assets/instagram.svg";
import YoutubeIcon from "@/assets/youtube.svg";
import styles from "@/pages/Home/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.cover}>
        <div className={styles.coverText}>
          <h1>campos.</h1>
          <p>1445 Floral Ave. New York City, United States</p>
        </div>
        <div className={styles.socials}>
          <a
            href="https://facebook.com"
            target="__blank"
            className={`${styles.icon} fb`}
          >
            <FacebookIcon />
          </a>
          <a
            href="https://instagram.com"
            target="__blank"
            className={`${styles.icon} ig`}
          >
            <InstagramIcon />
          </a>
          <a
            href="https://youtube.com"
            target="__blank"
            className={`${styles.icon} youtube`}
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
      <div className={styles.coverCaption}>
        <h3>
          Home Bakes Made With Love, Passion, and Meticulous Attention to Detail
        </h3>
      </div>
      <div className={styles.menus}>
        <div className={styles.menuCategory}>
          <h3>Small Bites</h3>
        </div>
        <div className={styles.menuList}>
          <div className={styles.menu}>
            <div className={styles.menuDetails}>
              <p className={styles.menuName}>Bagels</p>
              <p className={styles.menuPrice}>1.00$</p>
            </div>
            <p className={styles.menuDesc}>
              Choose from a selection of fillings, from cream cheese to smoked
              salmon
            </p>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuDetails}>
              <p className={styles.menuName}>Bread rolls</p>
              <p className={styles.menuPrice}>2.00$</p>
            </div>
            <p className={styles.menuDesc}>
              Our handmade bread rolls come in all shapes and sizes
            </p>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuDetails}>
              <p className={styles.menuName}>French bread</p>
              <p className={styles.menuPrice}>4.00$</p>
            </div>
            <p className={styles.menuDesc}>
              Feeling indulgent? Our rich French toast is perfect for special
              occasions
            </p>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuDetails}>
              <p className={styles.menuName}>Banana bread</p>
              <p className={styles.menuPrice}>8.00$</p>
            </div>
            <p className={styles.menuDesc}>
              An all-time favorite for both kids and grown-ups, now available in
              regular and sharing sizes
            </p>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuDetails}>
              <p className={styles.menuName}>5 seeds bread</p>
              <p className={styles.menuPrice}>8.00$</p>
            </div>
            <p className={styles.menuDesc}>
              Our nutritious 5 seed bread goes through a 12-hour cold raise and
              is baked in our stone ovens
            </p>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuDetails}>
              <p className={styles.menuName}>Organic toast</p>
              <p className={styles.menuPrice}>3.00$</p>
            </div>
            <p className={styles.menuDesc}>
              Healthy and delicious, our organic toast is served with locally
              sourced butter and condiments
            </p>
          </div>
        </div>
        <Button title="View the menu" />
      </div>
    </Layout>
  );
}
