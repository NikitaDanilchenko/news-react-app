/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
export const Image = ({ image }) => {
    return (
        <div className={styles.wrapper}>
            {image ? (
                <img src={image} alt="news" className={styles.image} />
            ) : null}
        </div>
    );
};
