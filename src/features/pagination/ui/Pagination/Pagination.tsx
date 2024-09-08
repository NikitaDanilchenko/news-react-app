import { IPaginationProps } from "../../model/types";
import { PaginationButtons } from "../PaginationButtons/PaginationButtons";

interface Props {
    children: React.ReactNode
    top?: boolean
    bottom?: boolean
    totalPages: number
}
export const Pagination = ({
    top,
    bottom,
    children,
    ...paginationProps
}: Props & IPaginationProps) => {
    return (
        <>
            {top && <PaginationButtons {...paginationProps} />}
            {children}
            {bottom && <PaginationButtons {...paginationProps} />}
        </>
    );
};
