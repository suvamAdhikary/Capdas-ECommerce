import { useState } from "react";
import styles from "./filter.module.css";

const Filter = function () {

  const [showFilterOption, setShowFilterOption] = useState(false);
  const [showFilterOption1, setShowFilterOption1] = useState(false);
  const [showFilterOption2, setShowFilterOption2] = useState(false);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterPrice, setFilterPrice] = useState("");


  const handleBrandFilter = (e) => {
    setFilterBrand(e);
    
  }

  const handlePriceFilter = (e) => {
    setFilterPrice(e);
    
  }

  const handleApply = () => {
    if(filterBrand.length) localStorage.setItem('capdasBrandFilter', JSON.stringify(filterBrand));
    if(filterPrice > 0) localStorage.setItem('capdasPriceFilter', JSON.stringify(filterPrice));
  }

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
                <div
                  className={styles.filterCategoryDiv}
                  onClick={()=>handleBrandFilter("local")}
                >Local Brands</div>
                <div
                  className={styles.filterCategoryDiv}
                  onClick={()=>handleBrandFilter("national")}
                >National Brands</div>
                <div
                  className={styles.filterCategoryDiv}
                  onClick={()=>handleBrandFilter("clear")}
                >Clear Filter</div>
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
                <div
                  className={styles.filterCategoryDiv}
                  onClick={()=>handlePriceFilter(1500)}
                >Less Than 1500</div>
                <div
                  className={styles.filterCategoryDiv}
                  onClick={()=>handlePriceFilter(2500)}
                >Less Than 2500</div>
                <div
                  className={styles.filterCategoryDiv}
                  onClick={()=>handlePriceFilter(2501)}
                >Above 2500</div>
                <div
                  className={styles.filterCategoryDiv}
                  onClick={()=>handlePriceFilter(999999)}
                >Clear Filter</div>
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
          <button onClick={handleApply} className={styles.filterButton}>APPLY</button>
        </div>
      </div>
    </>
  );
};

export default Filter;
