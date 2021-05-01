/*
 * Komponent bezklasowy będacy menu pionowym
 * Pozwala przejść z menu głównego na stronę ...
 */

import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as DashboardSVG } from '../images/Dashboard.svg';
import { ReactComponent as SelectedAlgorithmSVG } from '../images/SortingAlgorithm.svg';
import { ReactComponent as SettingsSVG } from '../images/settings.svg';
import { ThemeContextUpdate } from './ThemeContext';

function VerticalNav() {
	const location = useLocation();

	//Pobieranie motywu [jasny/ciemny]
	const updateValue = useContext(ThemeContextUpdate);
	return (
		<div className="wrapper">
			<div className="verticalNav">
				<ul>
					<li>
						<Link to="/" className={location.pathname === '/' ? 'current' : ''}>
							<DashboardSVG width="24px" height="24px" className="svg-image" />
						</Link>
					</li>
					<li>
						<Link
							to="#"
							className={
								location.pathname.includes('/algorithm/') ? 'current' : 'disabled'
							}
						>
							<SelectedAlgorithmSVG width="24px" height="24px" className="svg-image" />
						</Link>
					</li>
					<li>
						<hr />
						<button type="button" className="settings" onClick={updateValue}>
							<SettingsSVG height="24px" width="24px" className="svg-image" />
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default VerticalNav;
