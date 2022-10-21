import React, { FC, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../../components/LoginForm'
import { ADMIN_LOGIN, ADMIN_PASSWORD } from '../../utils/consts'
import { FormWrapper, Title, Wrapper } from './LoginPage.styled'

export const LoginPage: FC = () => {
    const [isAuthFailed, setIsAuthFail] = useState(false)
    const navigate = useNavigate()
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const login = e.currentTarget.login.value
        const password = e.currentTarget.password.value
        if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
            localStorage.setItem('isAdminAuth', 'true')
            navigate('/')
        }
        else setIsAuthFail(true)
    }
    return (
        <Wrapper>
            <FormWrapper>
                <Title>Welcome to the administration testing system. Lets log in</Title>
                <LoginForm onSubmit={onSubmit} isAuthFailed={isAuthFailed} />
            </FormWrapper>
        </Wrapper>
    )
}