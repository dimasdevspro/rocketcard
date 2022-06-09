import { BASE_URL, user } from "./api.js";

async function getContent(){
    const response = await fetch(`${BASE_URL}${user}`)
 const data = await response.json()
 
 const avatarName = data.name 
 document.querySelector('.avatarAndlogo p').innerHTML = avatarName

 const imgAvatar = data.avatar_url
    document.querySelector('.img-avatar img').setAttribute('src', `${imgAvatar}`)

 const numberFollowers = data.followers
    document.querySelector('.followers p').innerHTML = `${numberFollowers} Seguidores`
   
 const numberFollowing = data.following
    document.querySelector('.following p').innerHTML = `${numberFollowing} Seguindo`
    
 const numberRepos = data.public_repos 
    document.querySelector('.repos p').innerHTML = `${numberRepos} Repositórios`
    
 const company = data.company
    document.querySelector('.company p').innerHTML = company

 const location = data.location
    document.querySelector('.location p').innerHTML = location
    console.log(data)
}

getContent()

