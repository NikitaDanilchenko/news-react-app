/* eslint-disable react/prop-types */
import withSkeleton from "../../helpers/hocs/WithSkeleton";
import NewsBunnerWithSkeleton from "../NewsBunner/NewsBunner";
import styles from "./styles.module.css";

const BannersList = ({ banners }) => {
    return (
        <ul className={styles.banners}>
            {banners?.map((banner) => {
                return <NewsBunnerWithSkeleton key={banner.id} item={banner}/>;
            })}
        </ul>
    );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "bunner", 10, "row");
export default BannersListWithSkeleton;
