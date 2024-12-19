
import Image from "next/image";
import SearchIcon from "../../../public/images/icon-search.svg";
import styles from "./searchbar.module.css"


export default function Searchbar ({handleSearch, fetchData}) {

    return (
        <section className="search-bar-container">
            <form action="" className={styles.form} onSubmit={fetchData}> 
                <input aria-label="search" type="search" id="searchbar" className={styles.searchbar} name="searchbar" onChange={handleSearch}/>
                <button type="submit" className={`${styles.search} ${styles.button}`}>
                    <Image 
                        width={15.55}
                        height={15.55}
                        alt=""
                        src={SearchIcon}
                    />
                </button>
            </form> 
        </section>
    )
}