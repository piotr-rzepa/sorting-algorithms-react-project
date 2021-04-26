/*
 * Komponent bezklasowy będacy menu poziomym, zawierającym pole wyszukiwania
 */

import React, { useState } from 'react';
import { ReactComponent as GitHubSVG } from '../images/github.svg';
import { ReactComponent as InstagramSVG } from '../images/instagram.svg';
import { ReactComponent as FacebookSVG } from '../images/facebook.svg';
import { ReactComponent as LogoSVG } from '../images/logo-p.svg';
import { Link } from 'react-router-dom';
import roundedImage from '../images/ASC_2746_v1.jpg';
import { useSelector, useDispatch } from 'react-redux';
import selectSearchText from '../selectors/searchTextSelector';
import { setTextFilter } from '../actions/filters';

export default function HorizontalNav() {
	const [visibleDropdown, setVisibleDropDown] = useState(false);
	const dispatch = useDispatch();
	const filteredAlgorithms = useSelector((state) => selectSearchText(state));
	const handleTextChange = (e) => {
		dispatch(setTextFilter(e.target.value));
		if (e.target.value !== '') setVisibleDropDown(() => true);
		else setVisibleDropDown(() => false);
	};
	return (
		<div className="HorizontalNav">
			<div className="logoContainer">
				<LogoSVG width="24px" height="24px" className="svg-image"></LogoSVG>
			</div>
			<div className="search-bar">
				<input
					type="search"
					placeholder="Search..."
					onChange={handleTextChange}
				></input>
				<div className={`dropdown-search ${visibleDropdown ? 'show' : ''}`}>
					<ul>
						{filteredAlgorithms.map((algorithm) => (
							<React.Fragment key={algorithm.id}>
								<a>
									<Link to={`/algorithm/${algorithm.name}`}>{algorithm.name}</Link>
									<hr style={{ borderTop: 'gray' }} />
								</a>
							</React.Fragment>
						))}
					</ul>
				</div>
			</div>
			<div className="creator-data">
				<div className="creator-data-wrapper">
					<img className="rounded-img" src={roundedImage} alt="Not found" />
					<div className="creator-data-name">
						<p>Piotr Rzepkowski</p>
						<h5>Creator</h5>
					</div>
				</div>
				<div className="creator-data-socials">
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
			</div>
		</div>
	);
}
