import { useEffect, useState } from "react";
import { NewsBunner } from "../../components/NewsBunner/NewsBunner";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import { NewsList } from "../../components/NewsList/NewsList";
import { Skeleton } from "../../components/Skeleton/Skeleton";

export const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true);
                const response = await getNews();
                setNews(response.news);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    }, []);
    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBunner item={news[0]} />
            ) : (
                <Skeleton type={"bunner"} count={1} />
            )}
            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton type={"item"} count={10} />
            )}
        </main>
    );
};
