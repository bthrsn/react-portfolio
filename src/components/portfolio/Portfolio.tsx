import React from "react";
import "./portfolio.css";
import ProjectsData from "../../utils/projects";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {ProjectsData.projects.map((item) => (
          <article className="portfolio-item" key={item.name}>
            <div className="portfolio-item-image">
              <img
                src={require(`../../assets/projects-screenshots/${item.img_url}`)}
                alt={item.name}
              />
            </div>
            <h3>{item.name}</h3>
            <div className="portfolio-item-button-group">
              <a
                href={item.code_url}
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Code Source
              </a>
              <a
                href={item.page_url}
                className="button button-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
