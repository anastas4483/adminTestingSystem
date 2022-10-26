import React, { FC } from "react";
import { User } from "../../utils/types/User";
import { PassedTest } from "./PassedTest";
import { Name } from "./UserInfo.styled";

interface UserInfoProp {
    user: User;
}

export const UserInfo: FC<UserInfoProp> = ({ user }) => (
    <>
        <Name>{user.name}</Name>
        {user.passedTests.map(test => <PassedTest test={test} />)}
    </>
);

