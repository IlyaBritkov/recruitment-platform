import React, { useContext } from 'react';
import { List, ListItem } from '@material-ui/core';
import { LogOut as LogOutIcon } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { AuthLoggedContext } from 'app/context/AuthLoggedContext';
import { items } from './helpers/items';
import NavItem from './NavItem';
import { SideBarListItemIcon, SideBarListItemText } from './components';

export const NavList: React.FunctionComponent = () => {
	const history = useHistory();
	const { setIsLogged } = useContext(AuthLoggedContext);

	const logOut = () => {
		setIsLogged?.(false);
		history.push('/');
		localStorage.setItem('IsLoaded', 'false');
	};
	return (
		<List>
			{items.map((item) => (
				<NavItem
					key={item.title}
					href={item.href}
					title={item.title}
					icon={item.icon}
				/>
			))}
			<ListItem button onClick={logOut}>
				<SideBarListItemIcon>
					<LogOutIcon />
				</SideBarListItemIcon>
				<SideBarListItemText primary="Logout" />
			</ListItem>
		</List>
	);
};
