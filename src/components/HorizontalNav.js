/*
 * Komponent bezklasowy będacy menu poziomym, zawierającym pole wyszukiwania
 */

import React from 'react';
import { ReactComponent as SearchSVG } from '../images/search.svg';
import { ReactComponent as GitHubSVG } from '../images/github.svg';
import { ReactComponent as InstagramSVG } from '../images/instagram.svg';
import { ReactComponent as FacebookSVG } from '../images/facebook.svg';
import { ReactComponent as LogoSVG } from '../images/logo-p.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import selectSearchText from '../selectors/searchTextSelector';
import { setTextFilter } from '../actions/filters';

export default function HorizontalNav() {
	const dispatch = useDispatch();
	const filteredAlgorithms = useSelector((state) => selectSearchText(state));
	const handleTextChange = (e) => {
		dispatch(setTextFilter(e.target.value));
	};
	return (
		<div className="HorizontalNav">
			<div className="logoContainer">
				<LogoSVG width="24px" height="24px" className="svg-image"></LogoSVG>
			</div>
			<SearchSVG width="24px" height="24px" />
			<input
				type="search"
				placeholder="Search..."
				onChange={handleTextChange}
			></input>
			<ul>
				{filteredAlgorithms.map((algorithm) => (
					<React.Fragment key={algorithm.id}>
						<Link to={`/algorithm/${algorithm.name}`}>{algorithm.name}</Link>
					</React.Fragment>
				))}
			</ul>
			<p>Piotr Rzepkowski</p>
			<h5>Creator</h5>
			<Link to={{ pathname: 'https://github.com/piotr-rzepa' }} target="_blank">
				<GitHubSVG width="24px" height="24px" />
			</Link>
			<Link
				to={{ pathname: 'https://www.instagram.com/piotrullo_/' }}
				target="_blank"
			>
				<InstagramSVG width="24px" height="24px" />
			</Link>
			<Link
				to={{ pathname: 'https://www.facebook.com/piotr.rzepkowski.3' }}
				target="_blank"
			>
				<FacebookSVG width="24px" height="24px" />
			</Link>
		</div>
	);
}
