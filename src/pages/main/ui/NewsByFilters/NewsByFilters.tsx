import { useAppSelector } from "@/app/AppStore";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { useDebounce } from "@/shared/hooks/useDebounce";
import styles from "./styles.module.css";
import { NewsFilters } from "@/widgets/news";
import { useGetCategoriesNewsQuery } from "@/entities/category/api/categoriesApi";
import { NewsWithPagination } from "../NewsWithPagination/NewsWithPagination";

export const NewsByFilters = () => {
    const filters = useAppSelector(state => state.news.filters)
    const news = useAppSelector(state => state.news.news)
    const { data } = useGetCategoriesNewsQuery(null)

    const debouncedKeywords = useDebounce(filters.keywords, 1500);
    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords
    })
    
    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} categories={data?.categories || []}/>
            <NewsWithPagination isLoading={isLoading} news={news} filters={filters}/>
        </section>
    );
};
