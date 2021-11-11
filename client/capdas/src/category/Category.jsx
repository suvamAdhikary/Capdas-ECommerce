import { useState } from "react";
import styles from "./category.module.css";

const Category = function () {
  const [showSubCategoryDiv, setShowSubCategoryDiv] = useState(false);
  return (
    <div className={styles.Category_main}>
      <div className={styles.CategoryBox}>
        {/* {festive category} */}
        <div className={styles.Category_festiveWear}>
          <div className={styles.CategoryName}>FESTIVE WEAR</div>
          <img
            src="../assets/categoriesImages/festive.png"
            alt="Kurta Pic"
            className={styles.CategoryImages}
          />
          <img
            src="../assets/Arrow.svg"
            alt="topArrow"
            className={styles.CategoryArrow}
          />
        </div>

        {/* {women category} */}
        <div
          className={styles.Category_festiveWear}
          // style={{ marginBottom: "0px" }}
          onClick={() => {
            setShowSubCategoryDiv(!showSubCategoryDiv);
          }}
          style={
            showSubCategoryDiv
              ? {
                  marginBottom: "0px",
                  borderRadius: " 10px 10px 0px 0px",
                  border: "1px solid black",
                }
              : {
                  marginBottom: "5px",
                  borderRadius: "10px",
                  border: "none",
                }
          }
        >
          <div className={styles.CategoryName}>WOMEN</div>
          <img
            src="../assets/categoriesImages/women.png"
            alt="Kurta Pic"
            className={styles.CategoryImages}
          />
          <img
            src="../assets/Arrow.svg"
            alt="topArrow"
            className={styles.CategoryArrow}
          />
        </div>

        {/* {women subcategory} */}
        {showSubCategoryDiv ? (
          <div className={styles.subcategory}>
            <div className={styles.subcategory_names}>Tops</div>
            <div className={styles.subcategory_names}>Tank Tops</div>
            <div className={styles.subcategory_names}>Sarees</div>
            <div className={styles.subcategory_names}>Shirts</div>
            <div className={styles.subcategory_names}>Accessories</div>
          </div>
        ) : null}

        {/* {men subcategory} */}
        <div className={styles.Category_festiveWear}>
          <div className={styles.CategoryName}>MEN</div>
          <img
            src="../assets/categoriesImages/men.png"
            alt="Kurta Pic"
            className={styles.CategoryImages}
          />
          <img
            src="../assets/Arrow.svg"
            alt="topArrow"
            className={styles.CategoryArrow}
          />
        </div>

        {/* {kids subcategory} */}
        <div className={styles.Category_festiveWear}>
          <div className={styles.CategoryName}>KIDS</div>
          <img
            src="../assets/categoriesImages/kids.png"
            alt="Kurta Pic"
            className={styles.CategoryImages}
          />
          <img
            src="../assets/Arrow.svg"
            alt="topArrow"
            className={styles.CategoryArrow}
          />
        </div>

        {/* {wellnessand bath subcategory} */}
        <div className={styles.Category_festiveWear}>
          <div className={styles.CategoryName}>WELLNESS</div>
          <img
            src="../assets/categoriesImages/wellness.png"
            alt="Kurta Pic"
            className={styles.CategoryImages}
          />
          <img
            src="../assets/Arrow.svg"
            alt="topArrow"
            className={styles.CategoryArrow}
          />
        </div>

        {/* {Accessories subcategory} */}
        <div className={styles.Category_festiveWear}>
          <div className={styles.CategoryName}>ACCESSORIES</div>
          <img
            src="../assets/categoriesImages/Accessories.png"
            alt="Kurta Pic"
            className={styles.CategoryImages}
          />
          <img
            src="../assets/Arrow.svg"
            alt="topArrow"
            className={styles.CategoryArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
