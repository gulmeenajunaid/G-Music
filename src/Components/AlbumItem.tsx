export default function AlbumItem({ album }: any) {
	const releaseYear = album["im:releaseDate"].label.split("-", 1);

	return (
		<div className="card text-bg-dark h-100 border border-dark rounded p-2">
			<div className="card-img-top ">
				<div className="bg-image rounded position-relative">
					<img
						className="w-100"
						src={album["im:image"][2].label}
						alt={album.title.label}
					/>
					<a href={album.link.attributes.href} target="_blank">
						<div className="text-light d-flex justify-content-center align-items-center position-absolute top-50 start-50">
							<h1>
								<i className="fas fa-play" aria-hidden="true"></i>
							</h1>
						</div>
					</a>
				</div>
			</div>
			<div className="card-body">
				<h5 className="card-title">{album["im:name"].label}</h5>
				<p className="card-text">{album["im:artist"].label}</p>
				<span className="card-text me-3">
					&#x2022; {album.category.attributes.term}
				</span>
				<span className="card-text">&#x2022; {releaseYear}</span>
			</div>
		</div>
	);
}
