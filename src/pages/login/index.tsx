import React, { FormEvent, useState } from 'react'
import { LoginForm } from '../../components/LoginForm'
import { ADMIN_LOGIN, ADMIN_PASSWORD } from '../../utils/consts'
import { FormWrapper, Title, Wrapper } from './LoginPage.styled'

export const LoginPage = () => {
    const [isAuthFailed,setIsAuthFail]= useState(false)
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const login=e.currentTarget.login.value
        const password=e.currentTarget.password.value
        if( login===ADMIN_LOGIN && password===ADMIN_PASSWORD) {
            console.log('auth is successfull');
        }
        else setIsAuthFail(true)
    }
    return (
        <Wrapper>
            <FormWrapper>
                <Title>Welcome to the administration testing system. Lets log in</Title>
                <LoginForm onSubmit={onSubmit} isAuthFailed={isAuthFailed}/>
            </FormWrapper>
        </Wrapper>
    )
}