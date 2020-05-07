import React from 'react'

import { HomeHeart as  Home } from '@styled-icons/boxicons-solid/HomeHeart'
import { SearchAlt as Search } from '@styled-icons/boxicons-regular/SearchAlt'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { LightBulb as Light } from '@styled-icons/heroicons-outline/LightBulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'

import * as S from './styled'

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenubarLink to="/" title="Back to home">
                <S.MenuBarItem><Home /></S.MenuBarItem>
            </S.MenubarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
        <S.MenubarLink to="/search/" title="Search">
                <S.MenuBarItem><Search /></S.MenuBarItem>
            </S.MenubarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
            <S.MenuBarItem title="Change theme"><Light /></S.MenuBarItem>
            <S.MenuBarItem title="Change visualization"><Grid /></S.MenuBarItem>
            <S.MenuBarItem title="Go to the top"><Arrow /></S.MenuBarItem>

        </S.MenuBarGroup>

    </S.MenuBarWrapper>
)

export default MenuBar