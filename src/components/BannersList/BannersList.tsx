/* eslint-disable react/prop-types */
import withSkeleton from "../../helpers/hocs/WithSkeleton";
import { INews } from "../../interfaces";
import { NewsBunner } from "../NewsBunner/NewsBunner";
// import NewsBunnerWithSkeleton from "../NewsBunner/NewsBunner";
import styles from "./styles.module.css";

interface Props {
    banners?: INews[] | null
}
const BannersList = ({ banners }: Props) => {
    return (
        <ul className={styles.banners}>
            {banners?.map((banner) => {
                return <NewsBunner key={banner.id} item={banner}/>;
            })}
        </ul>
    );
};

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, "bunner", 10, "row");
export default BannersListWithSkeleton;
