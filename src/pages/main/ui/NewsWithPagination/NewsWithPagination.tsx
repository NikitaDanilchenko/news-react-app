
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { Pagination } from "@/features/pagination";
import { NewsList } from "@/widgets/news";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
    filters: IFilters
    news: INews[]
    isLoading: boolean
}

export const NewsWithPagination = ({filters, news, isLoading}: Props) => {
    const {handleNextPage, handlePreviousPage, handlePageClick} = usePaginationNews(filters)
    
    return (
            <Pagination
                top
                bottom
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
                totalPages={TOTAL_PAGES}

            >
                <NewsList
                    news={news}
                    direction="column"
                    type='item'
                    isLoading={isLoading} />
            </Pagination>
    );
};
