
import { useEffect, useState } from "react"
import { NewsBunner } from "../../components/NewsBunner/NewsBunner"
import styles from "./styles.module.css"
import { getNews } from "../../api/apiNews"
import { NewsList } from "../../components/NewsList/NewsList"

export const Main = () => {
const [news, setNews] = useState([])
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews()
                setNews(response.news)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews()
    }, [])
  return (
    <main className={styles.main}>
        {news.length > 0 ? <NewsBunner item={news[0]}/> : null}
        <NewsList news={news}/>
    </main>
  )
}
