import styles from "./women.module.css";

export default function Women({e}) {

    return (
        <>
            <div className={styles.filterFooterDiv}>
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
    )
}