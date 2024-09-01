/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IPaginationProps } from "../../interfaces";
import { Pagination } from "../Pagination/Pagination";


interface Props {
    children: React.ReactNode
    top?: boolean
    bottom?: boolean
    totalPages: number
}
export const PaginationWrapper = ({
    top,
    bottom,
    children,
    ...paginationProps
}: Props & IPaginationProps) => {
    return (
        <>
            {top && <Pagination {...paginationProps} />}
            {children}
            {bottom && <Pagination {...paginationProps} />}
        </>
    );
};
