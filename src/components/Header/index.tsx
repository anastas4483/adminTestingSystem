import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem, Menu, LogoutBtn, HeaderWrapper } from './Header.styled'

export const Header: FC = () => {
    return (
        <HeaderWrapper>
            <Menu>
                <Link to={'/'}><MenuItem>Home</MenuItem></Link>
                <Link to={'tests'}> <MenuItem>Test</MenuItem></Link>
                <Link to={'users'}> <MenuItem>Users</MenuItem> </Link>
            </Menu>
            <Link to={'/login'} onClick={() => localStorage.removeItem('isAdminAuth')}>
                <LogoutBtn>
                    Log out
                </LogoutBtn>
            </Link>
        </HeaderWrapper>
    )
}