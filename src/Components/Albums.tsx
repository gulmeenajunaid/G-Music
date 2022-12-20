import AlbumItem from "./AlbumItem";

export default function Albums({ albums }: any) {
	return (
		<div className="container px-3 py-5">
			<div className="row gy-4">
				{albums.length === 0 && (
					<h3 className="text-light text-center">No results found...</h3>
				)}
				{albums.map((album: any) => {
					return (
						<div key={album.id.attributes["im:id"]} className="col-md-3 col-12">
							<AlbumItem album={album} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
