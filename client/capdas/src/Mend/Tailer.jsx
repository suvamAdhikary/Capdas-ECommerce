import styles from './Tailer.module.css'
import Tailerdetails from './Tailerdetails'

import img13 from './img/image 13.png'
import img14 from './img/image 14.png'
import img15 from './img/image 15.png'
import img17 from './img/image 17.png'
import img18 from './img/image 18.png'
import img16 from './img/image 16.png'
function Tailer(){
    var obj=[
        {
            "img":img13,
            "name":"Mr. Amit",
            "star":4.7,
            "exp": "8 years"

        },
        {
            "img":img14,
            "name":"Mrs. Divya",
            "star":4.5,
            "exp": "7 years"

        },
        {
            "img":img15,
            "name":"Mrs. Arti",
            "star":4.9,
            "exp": "5 years"

        },
        {
            "img":img17,
            "name":"Mr. Sikandar",
            "star":4.6,
            "exp": "4 years"

        },
        {
            "img":img18,
            "name":"Mr. Rajesh",
            "star":4.9,
            "exp": "10 years"

        },
        {
            "img":img16,
            "name":"Mrs. Sunita",
            "star":3.2,
            "exp": "3 years"

        }
    ]
    return <>
        <div className={styles.title}>Tailors near You</div>
        <div id={styles.tailergird}>
            {obj.map(item => {
                return (
                    // <div>{item.img}</div>
                < Tailerdetails prop={item} />
                )
            })}
        </div>
    </>
}

export default Tailer;