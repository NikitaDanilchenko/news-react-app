import { SkeletonType, DirectionType } from "@/shared/interfaces";
import styles from "./styles.module.css";

interface Props {
    count?: number
    type?: SkeletonType
    direction?: DirectionType
}

export const Skeleton = ({ count = 1, type = "bunner", direction = 'column' }: Props) => {
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
