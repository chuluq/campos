import Image from "next/image";
import Layout from "@/components/Layout";
import cover from "@/assets/ig-img-3.png";
import styles from "@/pages/contact/Contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <div className={styles.contact}>
        <div className={styles.contactText}>
          <div className={styles.contactTitle}>
            <h3>Contact us</h3>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactDetailsText}>
              <p className={styles.contactDetailsName}>Cafe</p>
              <p className={styles.contactDetailsValue}>4400 - 88 - 823</p>
            </div>
            <div className={styles.contactDetailsText}>
              <p className={styles.contactDetailsName}>Email</p>
              <p className={styles.contactDetailsValue}>info@campos.com</p>
            </div>
            <div className={styles.contactDetailsText}>
              <p className={styles.contactDetailsName}>Bookings</p>
              <p className={styles.contactDetailsValue}>
                info@ccampossales.com
              </p>
            </div>
            <div className={styles.contactDetailsText}>
              <p className={styles.contactDetailsName}>Press</p>
              <p className={styles.contactDetailsValue}>info@campospress.com</p>
            </div>
            <div className={styles.contactDetailsText}>
              <p className={styles.contactDetailsName}>Events</p>
              <p className={styles.contactDetailsValue}>
                info@camposevents.com
              </p>
            </div>
            <div className={styles.contactDetailsText}>
              <p className={styles.contactDetailsName}>Marketing</p>
              <p className={styles.contactDetailsValue}>
                info@campospartners.com
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cover}>
          <Image
            src={cover}
            alt="contact"
            layout="fill"
            className={styles.coverImg}
          />
        </div>
      </div>
    </Layout>
  );
}
