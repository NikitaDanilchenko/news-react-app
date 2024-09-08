
import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.css";
import { IPaginationProps } from "../../model/types";

export const PaginationButtons = ({
    totalPages,
    handleNextPage,
    handlePreviousPage,
    handlePageClick,
    currentPage,
}: IPaginationProps) => {
    const {isDark} = useTheme()
    return (
        <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
            <button disabled={currentPage <= 1} onClick={handlePreviousPage} className={styles.arrow}>
                {"<"}
            </button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        onClick={() => handlePageClick(index + 1)}
                        key={index}
                        className={styles.pageNumber}
                        disabled={index + 1 === currentPage}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <button disabled={currentPage >= totalPages} onClick={handleNextPage} className={styles.arrow}>
                {">"}
            </button>
        </div>
    );
};
