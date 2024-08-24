/* eslint-disable react/prop-types */
import { TOTAL_PAGES } from "../../constants/constants";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import NewsListWithSkeleton from "../NewsList/NewsList";
import { Pagination } from "../Pagination/Pagination";
import styles from "./styles.module.css";
export const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilter("page_number", filters.page_number + 1);
        }
    };
    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            changeFilter("page_number", filters.page_number - 1);
        }
    };
    const handlePageClick = (pageNumber) => {
        changeFilter("page_number", pageNumber);
    };
    return (
        <section className={styles.section}>
            <NewsFilters filters={filters} changeFilter={changeFilter} />
            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
                totalPages={TOTAL_PAGES}
            />
            <NewsListWithSkeleton isLoading={isLoading} news={news} />
            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
                totalPages={TOTAL_PAGES}
            />
        </section>
    );
};
