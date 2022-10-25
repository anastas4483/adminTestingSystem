
import React, { FC } from 'react'
import { getAttemptStatistics } from '../../utils/func/getAttemptStatistics'
import { User } from '../../utils/types/User'
import { Attempt } from './Attempt'
import { Name, AttemptList, Property, Value } from './UserInfo.styled'

interface UserInfoProp {
    user: User
}

export const UserInfo: FC<UserInfoProp> = ({ user }) => {
    const {
        totalAttempts,
        successfullyPercentage,
        successfullyTests,
        GPA
    } = getAttemptStatistics(user.attempts)
    return (
        <>
            <Name>{user.name}</Name>
            <Property>total number of attempts: <Value>{totalAttempts}</Value></Property>
            <Property>successfully passed tests: <Value>{successfullyTests}</Value></Property>
            <Property>GPA: {GPA}</Property>
            <Property>percentage of all attempts: <Value>{`${successfullyPercentage}%`}</Value></Property>
            <AttemptList>
                {user.attempts.map((attempt => (
                    <Attempt attempt={attempt} />
                )))}
            </AttemptList>
        </>
    )
}