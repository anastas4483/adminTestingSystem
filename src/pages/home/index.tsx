import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './HomePage.styled'

export const HomePage: FC = () => (
    <Wrapper>
        This is home page, you can go to &nbsp; <Link to={'tests'}> Tests</Link> &nbsp; or &nbsp;<Link to={'users'}> Users</Link>
    </Wrapper>
)
