import Layout from "@/components/Layout";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "@/pages/booking/Booking.module.css";

export default function Booking() {
  return (
    <Layout>
      <div className={styles.bookingForm}>
        <div className={styles.bookingFormTitle}>
          <h3>Book a table</h3>
        </div>
        <div className={styles.bookingFormCaption}>
          <p>
            Whatever the occasion, we’re certain that you can make it special at
            CAMPOS.
          </p>
        </div>
        <form className={styles.bookingFormField}>
          <Input label="Name" placeholder="Your Name" isRequired={true} />
          <Input label="Last name" placeholder="Your last name" />
          <Input
            label="Your email"
            placeholder="Your email address"
            isRequired={true}
          />
          <Input
            label="Message"
            type="textarea"
            placeholder="Enter your message"
            isRequired={true}
          />
        </form>
        <div>
          <Button title="Submit" dark={true} />
        </div>
      </div>
      <div className={styles.caption}>
        <h3>
          Be part of the chews family: we’ve celebrated our customers’
          birthdays, engagement parties and hen dos at here campos.
        </h3>
      </div>
    </Layout>
  );
}
