import { useEffect, useState } from "react";
import styles from "./women.module.css";
const axios = require("axios");

const WomenCategory = function () {
  const [womenCategoryData, setwomenCategoryData] = useState([]);

  useEffect(() => {
    fetchedData();
  }, []);

  const fetchedData = async function () {
    try {
      const {
        data: { product },
      } = await axios.get("http://localhost:6060/products");
      setwomenCategoryData(product);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* {main div of page} */}
      <div className={styles.mainDiv}>
        {/* {containeriv div of page} */}
        <div className={styles.containerDiv}>
          {/* {first div containing arrow and name} */}
          <div className={styles.firstdiv}>
            <img
              src="../assets/leftarrow.svg"
              alt="leftarrow"
              className={styles.leftarrow}
            />
            <div className={styles.productname}>Sarees</div>
          </div>
          {/* {second div containing information about discount} */}
          <div className={styles.seconddiv}>
            <div className={styles.infodiv}>
              NOT FOR HIM. Just for her. 30% off. Only till 30th Nov. On
              checkout!
            </div>
          </div>
          {/* {third div containing information about cloth} */}
          <div className={styles.clothsinfodiv}>
            A tribute to the skilled weavers of India, the handwoven saree,
            draws its inspiration from the 4500 years of its existence as the
            singular attire among women, until the advent of stitching in the
            1520s. Each handwoven saree is a work of love & art and takes
            anywhere between 1 week to 2 months to weave.
          </div>
        </div>
        {/* {div containig filter footer and one static card} */}

        {womenCategoryData.map((e) => {
          return (
            <>
              <div
                className={styles.filterFooterDiv}
                key={e._id}
                onClick={() => {
                  console.log(e.name);
                }}
              >
                <img
                  src={e.image[0]}
                  alt="sareepic"
                  className={styles.filterDivSAree}
                />
                <div className={styles.sareeName}>{e.name} </div>
                <div className={styles.priceDiv}>
                  <div className={styles.ratingDiv}>{e.rating}</div>
                  <div className={styles.dPriceDiv}>{`Rs. ${e.price}`}</div>
                  <div
                    className={styles.ogPriceDiv}
                  >{`Rs. ${e.discountPrice}`}</div>
                </div>
                <div className={styles.wishlistDiv}>
                  <img
                    className={styles.wishlistImage}
                    src="../assets/WishListIcon.svg"
                    alt=""
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default WomenCategory;
