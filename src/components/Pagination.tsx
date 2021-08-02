import { usePagination, DOTS } from "hooks";

export const Pagination = ({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
	className,
}: IPagination) => {
	const { paginationRange }: any = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || paginationRange?.length < 2) return null;

	const onNext = () => onPageChange(currentPage + 1);
	const onPrevious = () => onPageChange(currentPage - 1);

	let lastPage =
		(paginationRange && paginationRange[paginationRange?.length - 1]) ||
		totalCount - 1;

	return (
		<ul
			className={`pagination-container ${className}`}
			data-testid="pagination"
		>
			<li
				className={`pagination-item ${currentPage === 1 && "disabled"}`}
				onClick={onPrevious}
			>
				<div className="arrow left" />
			</li>
			{paginationRange?.map((pageNumber: any, i: any) => {
				if (pageNumber === DOTS) {
					return (
						<li key={i} className="pagination-item dots">
							&#8230;
						</li>
					);
				}

				return (
					<li
						key={i}
						className={`pagination-item ${
							pageNumber === currentPage && "selected"
						}`}
						onClick={() => onPageChange(pageNumber)}
					>
						{pageNumber}
					</li>
				);
			})}
			<li
				className={`pagination-item ${currentPage === lastPage && "disabled"}`}
				onClick={onNext}
			>
				<div className="arrow right" />
			</li>
		</ul>
	);
};
