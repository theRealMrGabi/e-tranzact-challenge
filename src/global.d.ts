interface LayoutProps {
	children: JSX.Element;
}

interface IusePagination {
	totalCount: number;
	pageSize: number;
	siblingCount: number;
	currentPage: number;
}

interface IPagination {
	onPageChange: (currentPage) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
	className?: string;
}
