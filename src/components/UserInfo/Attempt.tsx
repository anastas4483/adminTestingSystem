
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import React, { FC, useEffect, useState } from 'react'
import { getTimeFromSec } from '../../utils/func/getTimeFromSec'
import { AttemptI } from '../../utils/types/User'
import { AttemptPreview, AttemptInfo, Value, Property } from './UserInfo.styled'

interface AttemptProp {
    attempt: AttemptI
}

export const Attempt: FC<AttemptProp> = ({ attempt }) => {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        setIsShow(false)
    }, [attempt])

    const dateStart = new Date(attempt.start).toLocaleString()
    return (
        <>
            <AttemptPreview
                key={attempt.id}
                onClick={() => setIsShow(prev => !prev)}
            >
                <span>ID: {attempt.id}</span>
                {isShow ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </AttemptPreview>
            <AttemptInfo isShow={isShow}>
                <Property>Start time: <Value>{dateStart}</Value></Property>
                <Property>Spend time: <Value>{getTimeFromSec(attempt.timeSec)}</Value></Property>
                <Property>Right answers: <Value>{attempt.rightAnswers}/{attempt.allAnswers}</Value></Property>
            </AttemptInfo>
        </>
    )
}