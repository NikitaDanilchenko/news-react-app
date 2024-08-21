/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
export const Pagination = ({
    totalPages,
    handleNextPage,
    handlePreviousPage,
    handlePageClick,
    currentPage,
}) => {
    return (
        <div className={styles.pagination}>
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
