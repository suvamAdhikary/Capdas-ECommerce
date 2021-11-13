import { useCallback, useState } from 'react';
import searchimg from '../Mend/img/search.png'
import styles from './Search.module.css'
function Search(){
const [search, setSearch] = useState([]);
const debouncing = (event) =>{
    let time;
    return function (...arg){
        const context = this;
        if(time) clearTimeout(time)
        time = setTimeout(() => {
            time = null
            event.apply(context, arg)
        }, 500);
    }
}
const callApi=async(item) => {
    const {value} = item.target;
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${value}`
    fetch(url).then(res => res.json()).then(json=>setSearch(json))
}

const newdata = useCallback(debouncing(callApi), [])
    return <>
import styles from './Search.module.css'
        <div id={styles.seachheader}>
            <input id={styles.inputbar} type="text" placeholder="Type keyword" onChange={newdata}/>
            <img alt="no img" id={styles.searchicon} src={searchimg} />

            {search.length > 0 &&
            <div className={styles.divider}>
                {search.map((el, i)=>
                <div kry={i} className={styles.divideritem}>
                    <span>{el.name}</span>
                </div>
                )}
            </div>
            }
        </div>
    </>
}
export default Search;