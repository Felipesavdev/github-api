'use client'
import Card from "../card/page"
import { ProfileContainer, ProfileDescripitons, ProfileInfo, ProfileRepositorios, ProfileSeguidores, ProfileSeguindo } from "./styled"

const Profile = () => {
  return (
  <ProfileContainer>
    <ProfileInfo>
    <ProfileSeguidores>
      <p>Seguidores</p>
      <p>1231</p>
    </ProfileSeguidores>
    <ProfileSeguindo>
    <p>Seguindo</p>
      <p>1231</p>
    </ProfileSeguindo>
    <ProfileRepositorios>
    <p>Repositorios</p>
      <p>1231</p>
    </ProfileRepositorios>
    </ProfileInfo>
    <ProfileDescripitons>
        <h3>Username</h3>
        <p>Description</p>
    </ProfileDescripitons>
    <Card/>
  </ProfileContainer>

  ) 
}
export default Profile