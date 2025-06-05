import React, { useEffect, useState } from "react";

const languageIcons = {
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
};

export default function TechDeck() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/ParreG/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (repo) =>
            repo.language &&
            ["C#", "HTML"].includes(
              repo.language.trim().toUpperCase().replace("HTML5", "HTML")
            )
        );
        setProjects(filtered);
        setLoading(false);
      });
  }, []);

  return (
    <main className="techDechMain experienceMain">
      <div className="techDechMain experienceDiv">
        <h1 className="techDechHeader experienceHeader">TechDeck</h1>
        <section id="techdeck">
          <div className="TechDeckContainer">
            <h2>TechDeck – Mina Projekt & GitHub 🚀</h2>
          </div>
        </section>
        {loading ? (
          <div className="techdeck-loading">
            <div className="loader"></div>
            <span>Laddar dina projekt...</span>
          </div>
        ) : (
          <section id="gridContainer">
            {projects.length === 0 && (
              <p className="no-projects-message">
                Inga C# eller HTML-projekt hittades på din GitHub!
              </p>
            )}
            {projects.map((repo) => (
              <section className="github-project" key={repo.id}>
                <div className="project-header">
                  <img
                    className="project-language-icon"
                    src={
                      languageIcons[repo.language] ||
                      "https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    }
                    alt={repo.language}
                  />
                  <h3 className="project-title">{repo.name}</h3>
                </div>
                <p>
                  {repo.description ? (
                    repo.description
                  ) : (
                    <span className="no-desc">
                      Det finns ingen beskrivning för denna projekt just nu 😢
                    </span>
                  )}
                </p>
                <div className="github-link">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Till GitHub-repo"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </section>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
