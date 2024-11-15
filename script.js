document.addEventListener("DOMContentLoaded", () => {
  const skillsList = document.getElementById("skills-list");
  const projectsList = document.getElementById("projects-list");
  const menubtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu-list");

  const skills = [
    {"name": "HTML", "icon": "asset/icons8-html.svg"},
    {"name": "CSS", "icon": "asset/icons8-css.svg"},
    {"name": "JavaScript", "icon": "asset/icons8-javascript.svg"},
    {"name": "C", "icon": "asset/icons8-c++.svg"},
    {"name": "Java", "icon": "asset/icons8-logo-java-coffee-cup.svg"},
    {"name": "Python", "icon": "asset/icons8-python.svg"},
    {"name": "SQL", "icon": "asset/icons8-MYsql.svg"},
    {"name": "MongoDB", "icon": "asset/icons8-mongodb.svg"},
    {"name": "React", "icon": "asset/icons8-réagir.svg"},
    {"name": "Next.js", "icon": "asset/icons8-suivantjs.svg"},
    {"name": "Git", "icon": "asset/icons8-git.svg"}
  ];

  // Add Skills to the skills section
  skills.forEach(skill => {
    const skillElement = document.createElement("li");
    skillElement.classList.add("skill");
    skillElement.innerHTML = `
      <div class="skill">
          <h5>${skill.name}</h5>
          <img src="${skill.icon}"></img>
      </div>
    `;
    skillsList.appendChild(skillElement);
  });

  async function fetchGitHubProjects() {
    const response = await fetch("https://api.github.com/users/0DekuDz0/repos");
    const repos = await response.json();
    console.log("Fetching GitHub projects...");

    repos.forEach(repo => {
      const projectItem = document.createElement("li");
      let repoName = repo.name;
      repoName = repoName.replaceAll("-", " ");
      projectItem.innerHTML = `

        <div class="project">
          <a href="${repo.html_url}"><img src="${`https://github.com/0DekuDz0/${repo.name}/raw/main/preview-image.jpg` }" alt="image"></img>
          <h3>${repoName}</h5></a>
        </div>
      `;
      projectsList.appendChild(projectItem);
    });
  }

  // Call function only once
  fetchGitHubProjects();


  menubtn.addEventListener("click",()=>{
    console.log("dd")
    menu.classList.toggle("hidden");
  })
});
