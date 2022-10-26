import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import React, { FC, useEffect, useState } from 'react'
import { tests } from '../../assets/data/tests'
import { getAttemptStatistics } from '../../utils/func/getAttemptStatistics'
import { PassedTest as PassedTestI } from '../../utils/types/User'
import { Attempt } from './Attempt'
import { Value, Property, TestPreview, TestInfo, AttemptList, PassedTestBlock, TitleAttempts } from './UserInfo.styled'

interface PassedTestProp {
    test: PassedTestI
}

export const PassedTest: FC<PassedTestProp> = ({ test }) => {
    const [isShow, setIsShow] = useState(false)

    const objTests = tests.reduce((data: any, test) => {
        data[test.id] = test
        return data
    }, {})

    useEffect(() => {
        setIsShow(false)
    }, [test])

    return (
        <PassedTestBlock>
            <TestPreview
                key={test.testId}
                onClick={() => setIsShow(prev => !prev)}
            >
                <span> {objTests[test.testId].title}</span>
                {isShow ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </TestPreview>
            <TestInfo isShow={isShow}>
                <Property>
                    successfully attempts: <Value>{getAttemptStatistics(test.attempts).successfullyTests}</Value>
                </Property>
                <Property>
                    all attempts: <Value>{test.attempts.length}</Value>
                </Property>
                <Property>GPA: <Value>{getAttemptStatistics(test.attempts).GPA.toFixed(1)}</Value> /10</Property>
                <Property>
                    percentage of all attempts:
                    <Value> {`${getAttemptStatistics(test.attempts).successfullyPercentage}%`}</Value>
                </Property>
                <TitleAttempts>Attempts</TitleAttempts>
                <AttemptList>
                    {test.attempts.map((attempt) => (
                        <Attempt attempt={attempt} key={attempt.id} />
                    ))}
                </AttemptList>
            </TestInfo>
        </PassedTestBlock>
    )
}
