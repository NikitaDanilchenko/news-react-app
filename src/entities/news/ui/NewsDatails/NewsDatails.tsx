
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { INews } from "../../model/types";
import styles from "./styles.module.css";
import { Image } from "@/shared/ui/Image/Image";
interface Props {
    item: INews
}
export const NewsDatails = ({ item }: Props) => {
    return (
        <div className={styles.details}>
            <Image image={item.image} />
            <div className={styles.description}>
                <p>{item.description} ({item.language})
                    <a target='_blank' href={item.url}>
                        Link from website
                    </a>
                </p>
                <p className={styles.extra}>
                    {formatTimeAgo(item.published)} by {item.author}
                </p>
                <ul style={{ display: 'flex', gap: '12px' }}>
                    {item.category.map((category, key) => (
                        <button key={key} className={styles.active}>{category}</button>
                    ))}
                </ul>
            </div>
        </div>
    );
};
