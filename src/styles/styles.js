/*
 * Przechowuje poszczególne ustawienia dla motywów [jasny/ciemny]
 */

export const styleFont = {
	darkStyle: {
		color: 'white'
	},
	lightStyle: {
		color: 'black'
	}
};

export const styleMain = {
	darkStyle: {
		backgroundColor: '#202020',
		color: styleFont.darkStyle.color
	},
	lightStyle: {
		backgroundColor: '#f8f8fb',
		color: styleFont.lightStyle.color
	}
};

export const styleCard = {
	darkStyle: {
		backgroundColor: '#606060',
		boxShadow: '2px 2px 2px black',
		color: styleFont.darkStyle.color
	},
	lightStyle: {
		backgroundColor: 'white',
		boxShadow: '2px 2px 2px lightgray',
		color: styleFont.lightStyle.color
	}
};

export const styleSelect = {
	darkStyle: {
		backgroundColor: '#606060',
		border: 'none',
		color: 'rgb(248,248,248)'
	},
	lightStyle: {
		backgroundColor: 'white',
		border: 'none',
		color: 'lightgray'
	}
};

export const styleSearchBar = {
	darkStyle: {
		backgroundColor: '#606060',
		color: styleFont.darkStyle.color
	},
	lightStyle: {
		backgroundColor: 'white',
		color: styleFont.lightStyle.color
	}
};
