/* eslint-disable react/prop-types */
import { getLatestNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { NewsApiResponse } from "../../interfaces";
import BannersListWithSkeleton from "../BannersList/BannersList";
import styles from "./styles.module.css";
export const LatestNews = () => {
    const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

    return (
            <section className={styles.section}>
                <BannersListWithSkeleton
                    banners={data && data.news}
                    isLoading={isLoading}
                />
            </section>
    );
};
