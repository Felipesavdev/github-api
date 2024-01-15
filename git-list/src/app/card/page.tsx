'use client'
import { CardBio, CardContainer, CardImage, CardSearch, CardUser } from './styled'

const Card = () => {
  return (
    <CardContainer>
      <CardImage>
      </CardImage>
      <CardUser>username</CardUser>
      <CardBio>bio</CardBio>
      <CardSearch></CardSearch>
    </CardContainer>
  ) 
}
export default Card