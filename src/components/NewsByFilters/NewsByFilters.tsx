/* eslint-disable react/prop-types */
import { TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import NewsListWithSkeleton from "../NewsList/NewsList";
import { PaginationWrapper } from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";


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

            <PaginationWrapper
                top
                bottom
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
                totalPages={TOTAL_PAGES}

            >
                <NewsListWithSkeleton isLoading={isLoading} news={data?.news} />
            </PaginationWrapper>
        </section>
    );
};
