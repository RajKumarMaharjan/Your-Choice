import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import {setLogout} from '../../redux/reducerSlice/userSlice'

export default function BasicMenu() {
    const dispatch = useDispatch()
    const [anchorEl, elementOn] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        elementOn(event.currentTarget);
    };
    const handleClose = () => {
        elementOn(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Logout</MenuItem>
            </Menu>
        </div>
    );
}