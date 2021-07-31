import { FC, useState, useEffect } from "react";
import {
	Hero,
	Schweppes,
	FearlessEnergy,
	Sprite,
	Filter,
	DownArrow,
} from "assets";
import { Pagination } from "components";
import { GetAllProducts } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Home: FC = () => {
	const dispatch = useDispatch();
	const getProducts = GetAllProducts();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { products, totalItems } = useSelector((state: any) => state.product);

	const [currPage, setCurrPage] = useState(1);

	const handlePagination = (page: number) => {
		setCurrPage(page);
		dispatch(getProducts(page));
	};

	useEffect(() => {
		dispatch(getProducts(1));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="homeCont pt-4 w-full">
			<div>
				<img src={Hero} alt="hero" />
			</div>

			<div>
				<div className="midSection w-full mt-12 flex justify-between">
					<div className="w-1/2 flex flex-col mr-8">
						<h3 className="font-medium text-xl">About the eCommerce Website</h3>
						<h4 className="font-normal text-xl text-gray-300 pt-1">
							Groceries
						</h4>
						<p className="description pt-8">
							eTranzact is your number one online shopping site in Nigeria. We
							are an online store where you can purchase all your electronics,
							as well as books, home appliances, kiddies items, fashion items
							for men, women, and children; cool gadgets, computers, groceries,
							automobile parts, and more on the go.{" "}
						</p>
						<p className="description pt-8">
							eTranzact is your number one online shopping site in Nigeria. We
							are an online store where you can purchase all your electronics,
							as well as books, home appliances, kiddies items, fashion items
							for men, women, and children; cool gadgets, computers, groceries,
							automobile parts, and more on the go.{" "}
						</p>
					</div>
					<div className="w-1/2 hotCont">
						<div className="hotTitle">HOT SALE!!!</div>

						<div className="drink-cont">
							<div className="drink-card">
								<img src={Schweppes} alt="Schweppes" />
								<div className="drink-name">Schweppes 33CL Bitter...</div>
								<div className="price">N 2,900</div>
							</div>
							<div className="drink-card">
								<img src={FearlessEnergy} alt="FearlessEnergy" />
								<div className="drink-name">Fearless Energy Drinks ...</div>
								<div className="price">N 2,000</div>
							</div>
							<div className="drink-card">
								<img src={Sprite} alt="Sprite" />
								<div className="drink-name">Sprite 1Liter X 12 (Sprite)</div>
								<div className="price">N 2,100</div>
							</div>
						</div>
					</div>
				</div>
				<hr className="hr my-8" />
			</div>

			<div className="product-catalog w-full">
				<div>
					<div className="product-header flex justify-between">
						<h5 className="font-semibold">Product Catalog</h5>
						<div className="filter-cont flex">
							<div className="flex items-center cursor-pointer pr-4">
								<img src={Filter} className="w-4 h-4 mr-1" alt="filter" />
								<div className="font-light">Sort</div>
							</div>
							<div className="flex items-center cursor-pointer">
								<div className="pr-2">Date</div>
								<img src={DownArrow} className="h-3 w-3" alt="select" />
							</div>
						</div>
					</div>
					<hr className="blue-hr mt-2 mb-4" />
				</div>

				<div className="product-cont">
					{products?.map((item: any) => (
						<div className="product-card" key={item._id}>
							<img src={item.productImageUrl} alt={item.productName} />
							<div className="product-name">{item.productName}</div>
							<div className="price">N{item.productPrice}</div>
						</div>
					))}
				</div>
			</div>

			<div>
				{/* I am making an assumption that total items amounts to 37, this is because when i fetch products by page, i only get amount of products for that particular page */}
				<Pagination
					onPageChange={(page) => {
						setCurrPage(page);
						handlePagination(page);
					}}
					totalCount={37}
					currentPage={currPage}
					pageSize={8}
					className="my-12 w-full flex justify-center"
				/>
			</div>
		</div>
	);
};

export default Home;
