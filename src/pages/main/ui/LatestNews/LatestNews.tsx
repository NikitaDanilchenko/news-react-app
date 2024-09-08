
import { BannersList } from "@/widgets/news/ui";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
export const LatestNews = () => {
    const { data, isLoading } = useGetLatestNewsQuery(null)

    return (
            <section className={styles.section}>
                <BannersList
                    banners={data && data.news}
                    isLoading={isLoading}
                />
            </section>
    );
};
