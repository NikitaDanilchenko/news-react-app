/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
export const Categories = ({
    categories,
    setSelectedCategory,
    selectedCategory,
}) => {
    return (
        <div className={styles.categories}>
            <button
                className={!selectedCategory ? styles.active : styles.item}
                onClick={() => setSelectedCategory(null)}
            >
                All
            </button>
            {categories.map((category) => {
                return (
                    <button
                        className={
                            selectedCategory === category
                                ? styles.active
                                : styles.item
                        }
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};
