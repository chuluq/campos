import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import FacebookIcon from "@/assets/facebook.svg";
import InstagramIcon from "@/assets/instagram.svg";
import YoutubeIcon from "@/assets/youtube.svg";
import aboutCover from "@/assets/about-cover.png";
import offersCover from "@/assets/offers-cover.png";
import igImg1 from "@/assets/ig-img-1.png";
import igImg2 from "@/assets/ig-img-2.png";
import igImg3 from "@/assets/ig-img-3.png";
import igImg4 from "@/assets/ig-img-4.png";
import igImg5 from "@/assets/ig-img-5.png";
import igImg6 from "@/assets/ig-img-6.png";
import styles from "@/pages/home/Home.module.css";

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

      <div className={styles.about}>
        <div className={styles.aboutTitle}>
          <h3>We care</h3>
        </div>
        <div className={styles.aboutDesc}>
          <p>
            Our philosophy is to be part of the neighborhood and give back to
            our community.
            <br />
            <br />
            We publish monthly sourdough recipe booklets both online and
            in-store, organize workshops and evening courses, and even rent out
            our shop for local artists and musicians.
          </p>
        </div>
        <div className={styles.aboutCover}>
          <Image
            src={aboutCover}
            className={styles.aboutCoverImg}
            alt="about"
            layout="fill"
          />
        </div>
      </div>

      <div className={styles.offers}>
        <div className={styles.offerCategory}>
          <h5 className={styles.offerName}>Hand crafted</h5>
          <p className={styles.offerDesc}>
            Want to learn more about baking and the secrets of bread making?
            <br />
            Join our quarterly Hand Crafted courses in our store.
          </p>
        </div>
        <div className={styles.offerCategory}>
          <h5 className={styles.offerName}>Community</h5>
          <p className={styles.offerDesc}>
            Looking for a venue to host an event?
            <br />
            CAMPOS welcomes creative souls from all walks of life.
          </p>
        </div>
        <div className={styles.offerCategory}>
          <h5 className={styles.offerName}>Recipes</h5>
          <p className={styles.offerDesc}>
            Sourdough can be intimidating for a novice baker, but it doesn’t
            have to be.
            <br />
            Every month, we combine some of our favorite sourdough recipes
            together.
          </p>
        </div>
        <div className={styles.offerCover}>
          <Image
            src={offersCover}
            alt="offers"
            className={styles.offerCoverImg}
            layout="fill"
          />
        </div>
      </div>

      <div className={styles.follow}>
        <div className={styles.followText}>
          <h6>Follow us on Instagram @CAMPOS.</h6>
        </div>
        <div className={styles.followImages}>
          <div className={styles.igImgs}>
            <Image
              src={igImg1}
              alt="ig-img-1"
              className={styles.igImg}
              layout="fill"
            />
          </div>
          <div className={styles.igImgs}>
            <Image
              src={igImg2}
              alt="ig-img-2"
              className={styles.igImg}
              layout="fill"
            />
          </div>
          <div className={styles.igImgs}>
            <Image
              src={igImg3}
              alt="ig-img-3"
              className={styles.igImg}
              layout="fill"
            />
          </div>
          <div className={styles.igImgs}>
            <Image
              src={igImg4}
              alt="ig-img-4"
              className={styles.igImg}
              layout="fill"
            />
          </div>
          <div className={styles.igImgs}>
            <Image
              src={igImg5}
              alt="ig-img-5"
              className={styles.igImg}
              layout="fill"
            />
          </div>
          <div className={styles.igImgs}>
            <Image
              src={igImg6}
              alt="ig-img-6"
              className={styles.igImg}
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div className={styles.booking}>
        <div className={styles.bookingDesc}>
          <h3>Book a table</h3>
          <p>
            Breakfast, lunch, or weekend brunch, we’re always open for
            reservations.
          </p>
        </div>
        <div className={styles.bookingCta}>
          <Button title="Book a table" dark={true} />
        </div>
      </div>
    </Layout>
  );
}
