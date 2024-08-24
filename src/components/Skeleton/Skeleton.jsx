/* eslint-disable react/prop-types */
import styles from "./styles.module.css";



export const Skeleton = ({ count = 1, type = "bunner", direction = 'column' }) => {
    return (
        <>
            {count > 1 ? (
                <ul className={direction === 'column' ? styles.columnList : styles.rowList}>
                    {[...Array(count)].map((_, index) => (
                        <li
                            key={index}
                            className={type === "bunner" ? styles.bunner : styles.item}
                        ></li>
                    ))}
                </ul>
            ) : (
                <li
                    className={type === "bunner" ? styles.bunner : styles.item}
                ></li>
            )}
        </>
    );
};
