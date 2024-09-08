/* eslint-disable react/prop-types */

import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { INews } from "../../model/types";
import styles from "./styles.module.css";
import { Image } from "@/shared/ui/Image/Image";

interface Props {
    item: INews
}
export const NewsBunner = ({ item }: Props) => {
    return (
        <div className={styles.bunner}>
            <Image image={item?.image} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>
                {formatTimeAgo(item.published)} by {item.author}
            </p>
        </div>
    );
};

// const NewsBunnerWithSkeleton = withSkeleton(NewsBunner, "bunner", 1, 'row');
// export default NewsBunnerWithSkeleton;
