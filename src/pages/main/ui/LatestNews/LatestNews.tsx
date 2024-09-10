import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsList } from "@/widgets/news";
import { INews } from "@/entities/news";
import { useAppDispatch } from "@/app/AppStore";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const LatestNews = () => {
    const { data, isLoading } = useGetLatestNewsQuery(null)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const navigateTo = (news: INews) => {
        dispatch(setCurrentNews(news))
        navigate(`/news/${news.id}`)
    }

    return (
        <section className={styles.section}>
            <NewsList
                direction="row"
                type='banner'
                news={data && data.news}
                isLoading={isLoading}
                viewNewsSlot={(news: INews) => (
                    <p onClick={() => navigateTo(news)}>View more...</p>
                )}
            />
        </section>
    );
};
