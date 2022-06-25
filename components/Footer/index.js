import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <h6>campos.</h6>
      </div>
      <div className={styles.address}>
        <p>
          1445 Floral Ave. New York City,
          <br /> United States
        </p>
      </div>
      <div className={styles.openHours}>
        <p>
          MONDAY - FRIDAY
          <br />
          6:00 AM TO 9:00 PM
        </p>
        <p>
          SATURDAY - SUNDAY
          <br />
          10:00 AM TO 8:00 PM
        </p>
      </div>
      <div className={styles.office}>
        <p>Office: 56C Gimblinton Street, New York City, United States</p>
      </div>
      <div className={styles.contact}>
        <p>Contact: 4400 - 88 - 823</p>
      </div>
      <div className={styles.socials}>
        <a
          href="https://facebook.com"
          target="__blank"
          className={`${styles.icon} ${styles.fb}`}
        >
          <FacebookIcon />
        </a>
        <a
          href="https://instagram.com"
          target="__blank"
          className={`${styles.icon} ${styles.ig}`}
        >
          <InstagramIcon />
        </a>
        <a
          href="https://youtube.com"
          target="__blank"
          className={`${styles.icon} ${styles.youtube}`}
        >
          <YoutubeIcon />
        </a>
      </div>
      <div className={styles.credit}>
        <p>Developed by LookQ</p>
      </div>
    </footer>
  );
}
