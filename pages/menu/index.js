import Layout from "@/components/Layout";
import Button from "@/components/Button";
import styles from "@/pages/menu/Menu.module.css";

export default function Menu() {
  return (
    <Layout>
      <div className={styles.cover}>
        <div className={styles.coverText}>
          <h3>It’s menu</h3>
        </div>
      </div>

      <div className={styles.menus}>
        <div className={styles.menuCategory}>
          <div className={styles.menuCategoryName}>
            <h6>Snacks</h6>
          </div>
          <div className={styles.menuList}>
            <div className={styles.menu}>
              <div className={styles.menuDetails}>
                <p className={styles.menuName}>Bagels</p>
                <p className={styles.menuPrice}>1.00$</p>
              </div>
              <p className={styles.menuDesc}>
                Soft and chewy, choose from our daily fillings ranging from
                cream cheese to smoked salmon
              </p>
            </div>
            <div className={styles.menu}>
              <div className={styles.menuDetails}>
                <p className={styles.menuName}>White bread with olive oil</p>
                <p className={styles.menuPrice}>2.00$</p>
              </div>
              <p className={styles.menuDesc}>
                Our signature French bread served with sustainably sourced
                Mediterranean olive oil
              </p>
            </div>
            <div className={styles.menu}>
              <div className={styles.menuDetails}>
                <p className={styles.menuName}>French toast</p>
                <p className={styles.menuPrice}>2.00$</p>
              </div>
              <p className={styles.menuDesc}>
                Sweet French toast made with free-range eggs and served with a
                selection of local marmalades
              </p>
            </div>
            <div className={styles.menu}>
              <div className={styles.menuDetails}>
                <p className={styles.menuName}>Banana bread</p>
                <p className={styles.menuPrice}>4.00$</p>
              </div>
              <p className={styles.menuDesc}>
                A brunch table classic, served with wildflower honey or maple
                syrup
              </p>
            </div>
            <div className={styles.menu}>
              <div className={styles.menuDetails}>
                <p className={styles.menuName}>Organic toast for two</p>
                <p className={styles.menuPrice}>1.00$</p>
              </div>
              <p className={styles.menuDesc}>
                The breakfast table isn’t complete with a generous serving of
                toast, served with an array of toppings
              </p>
            </div>
            <div className={styles.menu}>
              <div className={styles.menuDetails}>
                <p className={styles.menuName}>5 seed bread</p>
                <p className={styles.menuPrice}>8.00$</p>
              </div>
              <p className={styles.menuDesc}>
                Sourdough bread with rye flour, oats, and sunflower, poppy and
                sesame seeds
              </p>
            </div>
          </div>
        </div>
        <div className={styles.menuCategory}>
          <div className={styles.menuCategoryName}>
            <h6>Meals</h6>
          </div>
          <div className={styles.menuList}>
            <div className={styles.menu}>
              <div className={styles.menuDetails}>
                <p className={styles.menuName}>Eggs and Toast</p>
                <p className={styles.menuPrice}>4.00$</p>
              </div>
              <p className={styles.menuDesc}>
                Toasted bread of your choice, served with fried, boiled or
                poached eggs
              </p>
            </div>
            <div className={styles.menu}>
              <div className={styles.menuDetails}>
                <p className={styles.menuName}>Eggs and beff bacon</p>
                <p className={styles.menuPrice}>6.00$</p>
              </div>
              <p className={styles.menuDesc}>
                Toasted bread with eggs and a generous serving of locally
                sourced back beef bacon
              </p>
            </div>
            <div className={styles.menu}>
              <div className={styles.menuDetails}>
                <p className={styles.menuName}>Avocado toast</p>
                <p className={styles.menuPrice}>6.00$</p>
              </div>
              <p className={styles.menuDesc}>
                Toasted 5 seed bread with avocado and a drizzle of extra virgin
                olive oil
              </p>
            </div>
            <div className={styles.menu}>
              <div className={styles.menuDetails}>
                <p className={styles.menuName}>Bread basket</p>
                <p className={styles.menuPrice}>10.00$</p>
              </div>
              <p className={styles.menuDesc}>
                A selection of our freshly baked bread, served with cold cuts
                and continental cheeses
              </p>
            </div>
            <div className={styles.menu}>
              <div className={styles.menuDetails}>
                <p className={styles.menuName}>Brunch for two</p>
                <p className={styles.menuPrice}>14.00$</p>
              </div>
              <p className={styles.menuDesc}>
                A loaf of our sourdough bread, served with eggs, beef bacon and
                locally sourced sausages, with a side salad
              </p>
            </div>
            <div className={styles.menu}>
              <div className={styles.menuDetails}>
                <p className={styles.menuName}>Celebration brunch</p>
                <p className={styles.menuPrice}>20.00$</p>
              </div>
              <p className={styles.menuDesc}>
                For up to 3 people, our celebration brunch includes the
                breadbasket of choice, eggs, beef bacon, and sausages, as well
                as a glass of sparkling tea
              </p>
            </div>
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
          <Button title="Book a table" />
        </div>
      </div>
    </Layout>
  );
}
