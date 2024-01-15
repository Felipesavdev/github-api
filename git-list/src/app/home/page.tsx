'use client'
import Link from "next/link"
import { ButtonSerach, FormLink, InputContainer, InputSearch, SearchContainer, TitleContainer } from "./styled"
import Card from "../card/page"
import { useState } from "react"

const Search = () => {
  const [user, setUser] = useState('')
  const handle.Search=()=>{

  }
  return (
  <SearchContainer>
    <TitleContainer>
      <h1>Repositórios do GitHub</h1> 
    </TitleContainer>
    <InputContainer>
    <InputSearch >
    </InputSearch>
    <ButtonSerach>
        <Link href={'/profile'}>
            <FormLink> Buscar Repositórios </FormLink>
          </Link>
        </ButtonSerach>
    </InputContainer>
    <Card></Card>
  </SearchContainer>
  

  ) 
}
export default Search