/*
 * Komponent bezklasowy będacy menu pionowym
 * Pozwala przejść z menu głównego na stronę ...
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DashboardSVG } from '../images/Dashboard.svg';
import { ReactComponent as SelectedAlgorithmSVG } from '../images/SortingAlgorithm.svg';
import { ReactComponent as SettingsSVG } from '../images/settings.svg';

function VerticalNav() {
	return (
		<div className="wrapper">
			<div className="verticalNav">
				<ul>
					<li>
						<Link to="/">
							<DashboardSVG width="24px" height="24px" className="svg-image" />
						</Link>
					</li>
					<li>
						<Link to="/algorithm/">
							<SelectedAlgorithmSVG width="24px" height="24px" className="svg-image" />
						</Link>
					</li>
					<li>
						<hr />
						<a href="#" className="settings">
							<SettingsSVG height="24px" width="24px" className="svg-image" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default VerticalNav;
