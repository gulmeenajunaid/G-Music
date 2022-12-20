import { SetStateAction, useEffect, useState } from "react";
import Albums from "./Components/Albums";
import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { IAlbum } from "./Interface/AlbumInterface";
import Search from "./Components/Search";

export default function App() {
	const [albums, setAlbums] = useState<IAlbum[]>([]);
	const [filteredAlbums, setFilteredAlbums] = useState<IAlbum[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [filterMusicGenre, setFilterMusicGenre] = useState<string>("");

	useEffect(() => {
		const fetchAlbums = () => {
			fetch(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`)
				.then((res) => res.json())
				.then((data) => {
					setAlbums(data.feed.entry);
					setFilteredAlbums(data.feed.entry);
				});
		};
		fetchAlbums();
	}, []);

	useEffect(() => {
		const filtered = albums
			.filter(
				(album) =>
					!filterMusicGenre ||
					filterMusicGenre.includes(album.category.attributes.term)
			)
			.filter(
				(album) =>
					!searchQuery ||
					album.title.label
						.toLowerCase()
						.includes(searchQuery.toLocaleLowerCase())
			);
		setFilteredAlbums(filtered);
	}, [filterMusicGenre, searchQuery]);

	function searchHandler(searchString: string) {
		setSearchQuery(searchString);
	}

	function filterHandler(category: SetStateAction<string>) {
		if (category === filterMusicGenre) {
			setFilterMusicGenre("");
		} else {
			setFilterMusicGenre(category);
		}
	}
	return (
		<div className="container-fluid bg-black m-0 p-0 min-vh-100">
			<div className="text-bg-dark sticky-top">
				<Header />
			</div>
			<Search onSearch={searchHandler} searchQuery={searchQuery} />
			<Filter onFilter={filterHandler} category={filterMusicGenre} />
			<Albums albums={filteredAlbums} />
			{/* <Footer /> */}
		</div>
	);
}
