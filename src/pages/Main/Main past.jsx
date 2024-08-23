import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import { Pagination } from "../../components/Pagination/Pagination";
import { Categories } from "../../components/Categories/Categories";
import { Search } from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import NewsBunnerWithSkeleton from "../../components/NewsBunner/NewsBunner";
import NewsListWithSkeleton from "../../components/NewsList/NewsList";


export const Main = () => {
    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [keywords, setKeywords] = useState("");

    const debouncedKeywords = useDebounce(keywords, 1500)


    
    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews({
                page_number: currentPage,
                page_size: PAGE_SIZE,
                category: selectedCategory === "All" ? null : selectedCategory,
                keywords: debouncedKeywords,
            });
            setNews(response.news);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage, selectedCategory, debouncedKeywords]);

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            setCategories(["All", ...response.categories]);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);

    const handleNextPage = () => {
        if (currentPage < TOTAL_PAGES) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <main className={styles.main}>
             <Categories
                categories={categories}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
            />
            <Search keywords={keywords} setKeywords={setKeywords} />

            {/* <NewsBunnerWithSkeleton isLoading={isLoading} item={data && data.news.length > 0 && data.news[0]}/> */}

            {/*Использование скелетона без hoc withSkeleton */}
            {news.length > 0 && !isLoading ? (
                <NewsBunner item={news[0]} />
            ) : (
                <Skeleton type={"bunner"} count={1} />
            )}

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
                totalPages={TOTAL_PAGES}
            />

            {/* <NewsListWithSkeleton isLoading={isLoading} news={data?.news}/> */}

            {/*Использование скелетона без hoc withSkeleton */}
            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton type={"item"} count={10} />
            )}

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
                totalPages={TOTAL_PAGES}
            />
        </main>
    );
};
