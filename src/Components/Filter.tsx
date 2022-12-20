export default function Filter({ onFilter, category }: any) {
	function clickHandler(event: any) {
		onFilter(event.target.name);
	}
	const musicCategories: string[] = ["Pop", "Country", "Rock", "Holiday"];

	const btnStyle = {
		background: "#E6676B",
		border: "none",
	};

	return (
		<div className="container">
			<div className="row d-flex justify-content-center align-items-center my-5">
				{musicCategories.map((cat: string) => {
					return (
						<button
							className="btn btn-danger text-center col col-sm-2 col-4 mx-1 my-1"
							onClick={clickHandler}
							name={cat}
							style={category === cat ? btnStyle : {}}
						>
							{cat}
						</button>
					);
				})}
			</div>
		</div>
	);
}
