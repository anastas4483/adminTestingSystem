import React, { FC, useState } from 'react'
import { users } from '../../assets/data/users';
import { UserInfo } from '../../components/UserInfo';
import { Placeholder } from '../../components/UserInfo/UserInfo.styled';
import { User } from '../../utils/types/User';
import { InfoBlock, ListBlock, MainTitle, UserItem, Blocks, SearchUser, SearchUserWrapper, UsersTable } from './UserPage.styled';

export const UsersPage: FC = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<User | undefined>()
    return (
        <>
            <MainTitle>Choose user to see the information</MainTitle>
            <Blocks>
                <ListBlock>
                    <SearchUserWrapper>
                        <SearchUser type="text" placeholder='User name' onChange={(e) => setName(e.target.value)} />
                    </SearchUserWrapper>
                    <UsersTable>
                        <UserItem>
                            <span>ID</span>
                            <span>Name</span>
                            <span>Passed tests</span>
                        </UserItem>
                        {
                            users.filter(user => user.name.toLowerCase().includes(name.toLowerCase())).map((user) => (
                                <UserItem onClick={() => setUser(user)}>
                                    <span>{user.id}</span>
                                    <span>{user.name}</span>
                                    <span>{user.passedTests.length}</span>
                                </UserItem>
                            ))
                        }
                    </UsersTable>
                </ListBlock>
                <InfoBlock>
                    {user
                        ? <UserInfo user={user} />
                        : <Placeholder>Select the user to see his info</Placeholder>
                    }
                </InfoBlock>
            </Blocks>
        </>
    )
}