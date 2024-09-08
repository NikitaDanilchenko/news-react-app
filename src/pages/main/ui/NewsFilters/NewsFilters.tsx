
import { useAppDispatch } from "@/app/AppStore";
import { useGetCategoriesNewsQuery } from "@/entities/category/api/categoriesApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import { IFilters } from "@/shared/interfaces";
import styles from "./styles.module.css";

interface Props {
    filters: IFilters
}
export const NewsFilters = ({ filters }: Props) => {
    const { data } = useGetCategoriesNewsQuery(null)

    const dispatch = useAppDispatch()
    return (
        <div className={`${styles.filters}`}>
            {data ? (
                <Slider>
                    <Categories
                        categories={data.categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={(category) =>
                            dispatch(setFilters({ key: "category", value: category }))
                        }
                    />
                </Slider>
            ) : null}
            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => dispatch(setFilters({ key: "keywords", value: keywords }))}
            />
        </div>
    );
};
