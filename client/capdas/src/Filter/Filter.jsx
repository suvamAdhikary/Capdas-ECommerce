import { useState } from "react";
import styles from "./filter.module.css";

const Filter = function ({handleFilter}) {
  const [showFilterOption, setShowFilterOption] = useState(false);
  const [showFilterOption1, setShowFilterOption1] = useState(false);
  const [showFilterOption2, setShowFilterOption2] = useState(false);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [filterSize, setFilterSize] = useState("");

  return (
    <>
      <div className={styles.mainPageDiv}>
        <div className={styles.FilterCategoryDiv}>
          <div className={styles.bannerDiv}>
            <div className={styles.bannerCrossDiv}>
              <img
                src="../assets/cross.svg"
                alt="cross"
                className={styles.bannerCrossimg}
              />
            </div>
            <div className={styles.bannerCrossName}>Filters</div>
          </div>
          <div className={styles.firstFilterCat}>
            <div
              className={styles.cardInfoDiv}
              onClick={() => {
                setShowFilterOption(!showFilterOption);
              }}
            >
              <div className={styles.filterName}>Brands</div>
              <div className={styles.filterPlusSign}>+</div>
            </div>
            {showFilterOption ? (
              <div>
                <div className={styles.filterCategoryDiv}>Local Brands</div>
                <div className={styles.filterCategoryDiv}>National Brands</div>
              </div>
            ) : null}
          </div>

          <div className={styles.firstFilterCat}>
            <div
              className={styles.cardInfoDiv}
              onClick={() => {
                setShowFilterOption1(!showFilterOption1);
              }}
            >
              <div className={styles.filterName}>Price</div>
              <div className={styles.filterPlusSign}>+</div>
            </div>
            {showFilterOption1 ? (
              <div>
                <div className={styles.filterCategoryDiv}>Less Than 1500</div>
                <div className={styles.filterCategoryDiv}>Less Than 2500</div>
                <div className={styles.filterCategoryDiv}>Above 2500</div>
              </div>
            ) : null}
          </div>

          <div className={styles.firstFilterCat}>
            <div
              className={styles.cardInfoDiv}
              onClick={() => {
                setShowFilterOption2(!showFilterOption2);
              }}
            >
              <div className={styles.filterName}>Size</div>
              <div className={styles.filterPlusSign}>+</div>
            </div>
            {showFilterOption2 ? (
              <div>
                <div className={styles.filterCategoryDiv}>L</div>
                <div className={styles.filterCategoryDiv}>XL</div>
              </div>
            ) : null}
          </div>

          <div className={styles.firstFilterCat}>
            <div className={styles.cardInfoDiv}>
              <div className={styles.filterName}>Color</div>
              <div className={styles.filterPlusSign}>+</div>
            </div>
          </div>
          <button className={styles.filterButton}>APPLY</button>
        </div>
      </div>
    </>
  );
};

export default Filter;
