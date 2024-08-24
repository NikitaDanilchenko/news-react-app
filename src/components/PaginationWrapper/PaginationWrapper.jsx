/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Pagination } from "../Pagination/Pagination";
export const PaginationWrapper = ({
    top,
    bottom,
    children,
    ...paginationProps
}) => {
    return (
        <>
            {top && <Pagination {...paginationProps} />}
            {children}
            {bottom && <Pagination {...paginationProps} />}
        </>
    );
};
