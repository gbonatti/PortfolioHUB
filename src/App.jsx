import { useState, useEffect } from 'react';
import { FolderGit2, ExternalLink, Code2, Terminal, UserCircle, Mail } from 'lucide-react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'gbonatti'; // Extraído do link fornecido

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
          throw new Error('Falha ao buscar repositórios do GitHub');
        }

        const data = await response.json();
        // Filtra forks e repositórios muito simples, se desejar (opcional)
        const validProjects = data.filter(repo => !repo.fork);
        setProjects(validProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="gradient-text">
          <Terminal size={28} color="#60a5fa" />
          PortfolioHUB
        </h1>
        <div className="social-links">
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" title="GitHub">
            <FolderGit2 size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <UserCircle size={20} />
          </a>
          <a href="mailto:contato@email.com">
            <Mail size={20} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <h2>Olá, eu sou o <span className="gradient-text">Desenvolvedor</span></h2>
          <p>
            Bem-vindo ao meu PortfolioHUB. Aqui você encontra meus projetos mais recentes e 
            experimentos com código, integrados diretamente do meu GitHub.
          </p>
        </section>

        <section className="projects-section">
          <h3>Meus Projetos Recentes</h3>
          
          {loading && <div className="loading-state">Buscando repositórios no GitHub...</div>}
          
          {error && <div className="error-state">Erro: {error}</div>}

          {!loading && !error && (
            <div className="projects-grid">
              {projects.map(project => (
                <article key={project.id} className="project-card glass">
                  <div className="project-header">
                    <h4 className="project-title">
                      <Code2 size={20} color="#60a5fa" />
                      {project.name}
                    </h4>
                  </div>
                  
                  <p className="project-desc">
                    {project.description || 'Nenhuma descrição fornecida para este repositório.'}
                  </p>
                  
                  <div className="project-footer">
                    <div className="tech-stack">
                      {project.language && (
                        <>
                          <div className="tech-dot"></div>
                          <span>{project.language}</span>
                        </>
                      )}
                    </div>
                    <div className="project-links">
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer" title="Ver no GitHub">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>Desenvolvido com 🩵 usando React + Vite e Integrado ao GitHub</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Desafio Final - Bootcamp CEUB</p>
      </footer>
    </div>
  );
}

export default App;
