import React, { FC, FormEvent, FormEventHandler } from 'react'
import { Form, InfoBlock, Input, SubmitBtn } from './LoginForm.styled'

interface LoginFormProp{
    onSubmit: (e: FormEvent<HTMLFormElement>)=> void
    isAuthFailed: boolean
}

export const LoginForm: FC<LoginFormProp> = ({onSubmit, isAuthFailed}) => {
    return (
        <Form onSubmit={onSubmit}>
            <Input type="text" placeholder='Your login' redBorder={isAuthFailed} name='login'/>
            <Input type="password" placeholder='Your password' redBorder={isAuthFailed} name='password'/>
            <InfoBlock>{isAuthFailed && 'Login or password was wrong. Try again'}</InfoBlock>
            <SubmitBtn type='submit'>Submit</SubmitBtn>
        </Form>
    )
}