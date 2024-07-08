"use client"

import * as S from './styles'
import Image from 'next/image'

import Logo from '../../../public/logo.png'

export const Headerzada = () => {
  return (
    <S.Container>
        <S.HeaderOptions>
            <Image src={Logo} style={{height: '40px', width:'40px'}}/>
            <S.TextHeader href='#'>Players</S.TextHeader>
            <S.TextHeader href='#'>Squad Builder</S.TextHeader>
            <S.TextHeader href='#'>SBCs</S.TextHeader>
            <S.TextHeader href='#'>Drafts</S.TextHeader>
            <S.TextHeader href='#'>Squads</S.TextHeader>
            <S.TextHeader href='#'>Market</S.TextHeader>
            <S.TextHeader href='#'>Evolution</S.TextHeader>
        </S.HeaderOptions>

        <S.HeaderOptions>
            <S.SignUpButton>Sign in</S.SignUpButton>
        </S.HeaderOptions>
    </S.Container>
  )
}
