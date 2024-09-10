import { useAppSelector } from "@/app/AppStore";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { NewsDatails } from "@/entities/news";


export const NewsPage = () => {
    const currentNews = useAppSelector(state => state.news.currentNews)
    if (!currentNews) {
        return (
            <>
                <h3>Cannot find news</h3>
                <Link to={'/'}>
                    <p>Go to main page</p>
                </Link>

            </>
        )
    }
    return (
        <main className={styles.news}>
            <h1>{currentNews.title}</h1>
            <NewsDatails item={currentNews}/>
        </main>
    );
};
