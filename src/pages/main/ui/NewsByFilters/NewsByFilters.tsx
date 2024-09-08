
import { useAppSelector, useAppDispatch } from "@/app/AppStore";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { NewsList } from "@/widgets/news/ui";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import styles from "./styles.module.css";
import { Pagination } from "@/features/pagination";


export const NewsByFilters = () => {
   
    const filters = useAppSelector(state => state.news.filters)
    const dispatch = useAppDispatch()
    const debouncedKeywords = useDebounce(filters.keywords, 1500);
    const { data, isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords
    })

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            dispatch(setFilters({key: "page_number", value: filters.page_number + 1}))
        }
    };
    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            dispatch(setFilters({key: "page_number", value: filters.page_number - 1}))

        }
    };
    const handlePageClick = (pageNumber: number) => {
        dispatch(setFilters({key: "page_number", value: pageNumber}))

    };
    return (
        <section className={styles.section}>
            <NewsFilters filters={filters}  />

            <Pagination
                top
                bottom
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
                totalPages={TOTAL_PAGES}

            >
                <NewsList isLoading={isLoading} news={data?.news} />
            </Pagination>
        </section>
    );
};
