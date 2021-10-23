const linksSocialMedia = {
  github: "rafadtsilva",
  youtube: "UC-QficrtYhmyKvBVviqsqGw",
  facebook: "rafael.silva.3158652",
  instagram: "rafacristao",
  twitter: "rafinhasilva7"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }

}

changeSocialMediaLinks();

function getGitHubProfileInfos () {

  const URL = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(URL)
    .then( response => response.json() ) //ARROW FUNCTION COM APENAS UMA FUNCIONALDIADE NÃO PRECISA DE CHAVES
    .then( data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio; 
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    }) 

}

getGitHubProfileInfos();