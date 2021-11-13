import star from './img/star.png'
import styles from './Tailer.module.css'
function Tailerdetails({prop}){
    console.log(prop);
return <>
    <div className={styles.detailcontainer}>
        <img id={styles.tailerimg} alt="no img" src={prop.img} />
        <div id={styles.flax}>
            <div id={styles.tailername}>{prop.name}</div>
            <div id={styles.startext}>
                {prop.star}<img alt="star" src={star} />
            </div>

        </div>
        <div id={styles.exp}>Exp. {prop.exp}</div>
    </div>
</>
}

export default Tailerdetails;