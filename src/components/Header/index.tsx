import { Button } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem, Menu, HeaderWrapper } from './Header.styled'

export const Header: FC = () => {
    return (
        <HeaderWrapper>
            <Menu>
                <Link to={'/'} style={{ textDecoration: 'none' }}><MenuItem>Home</MenuItem></Link>
                <Link to={'tests'} style={{ textDecoration: 'none' }}> <MenuItem>Test</MenuItem></Link>
                <Link to={'users'} style={{ textDecoration: 'none' }}> <MenuItem>Users</MenuItem> </Link>
            </Menu>
            <Link to={'/login'} onClick={() => localStorage.removeItem('isAdminAuth')}>
                <Button variant='contained' style={{
                    color: "#fff",
                    textDecoration: "none",
                    position: "absolute",
                    right: 30,
                    bottom: 10,
                    cursor: "pointer",
                }} >
                    Log out
                </Button>
            </Link>
        </HeaderWrapper >
    )
}