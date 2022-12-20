export default function Search({ onSearch, searchQuery }: any) {
	function changeHandler(event: any) {
		onSearch(event.target.value);
	}

	return (
		<form>
			<div className="input-group my-5 mx-auto w-50 d-flex align-items-center justify-content-center">
				<button type="button" className="btn btn-light">
					<i className="fas fa-search" aria-hidden="true"></i>
				</button>
				<input
					type="search"
					className="form-control d-flex"
					aria-label="Text input for album search"
					placeholder="Search for albums or artists"
					value={searchQuery}
					onChange={changeHandler}
				/>
			</div>
		</form>
	);
}
