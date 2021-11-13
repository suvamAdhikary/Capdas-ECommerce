import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { base } from "../utils/request";
import Women from "./Women";
import styles from "./women.module.css";


const WomenCategory = function () {
  const [womenCategoryData, setwomenCategoryData] = useState([]);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");





  useEffect(() => {

    const brandNow = JSON.parse(localStorage.getItem('capdasBrandFilter'));
    if(brandNow) {
      setBrand(brandNow)
    }

    const priceNow = JSON.parse(localStorage.getItem('capdasPriceFilter'));
    if(priceNow) {
      setPrice(priceNow)
    }

    fetchedData();


  }, []);

  const fetchedData = async function () {
    try {
      const {
        data: { product },
      } = await base.get("/products");
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

        {womenCategoryData
          .filter(
            e => brand === "local" ?
              e.scope === "Local" :
                brand === "national" ?
                  e.scope === "National" :
                    undefined
          )
          .filter(
            e => price === 1500 ?
              e.price < 1500 :
                price === 2500 ?
                  e.price < 2500 :
                    price === 2501 ?
                      e.price > 2500 :
                        price > 0
          )
          .map((e) => (
          <Women key={e?._id} e={e} />
        ))}
        <div className={styles.filterIcon}>
          <Link to="/filter">
            <img src="../assets/filter_list.svg" alt="filtericon" />
          </Link>
        </div>
      </div>
      {/* {!nodisplay ? <Filter 
        handleBrandFilter={handleBrandFilter}
        handlePriceFilter={handlePriceFilter}
        handleSizeFilter={handleSizeFilter}
      /> : null} */}
    </>
  );
};
export default WomenCategory;
