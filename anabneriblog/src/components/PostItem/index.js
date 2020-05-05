import React from 'react'

import * as S from './styled'

const PostItem = () => (
    <S.PostItemLink to="/slug/">
        <S.PostItemWrapper>
            <S.PostItemTag>Teste</S.PostItemTag>
                <S.PostItemInfo>30 de julho de 2020 - 300 min de leitura</S.PostItemInfo>
                <S.PostItemTitle>Teste ao teste, tentando o teste</S.PostItemTitle>
                <S.PostItemDescription>testenao 12332dahsndjsadbsldbasdlasbdjwdb</S.PostItemDescription>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem