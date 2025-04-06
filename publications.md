---
layout: page
title: Publications
permalink: /publications/
---

<div class="publications-list">
  <div class="container">
    <p class="intro-text">
      Below is a comprehensive list of my published research. My work primarily focuses on pharmacovigilance, 
      patient safety, medication errors, and the rational use of medicines. For the most updated list, 
      you can also visit my <a href="https://www.researchgate.net/profile/Rangeel-Raina" target="_blank">ResearchGate profile</a>.
    </p>
    
    <div class="publications-list-grid">
      {% for publication in site.publications reversed %}
        <div class="publication-list-item">
          <h3 class="publication-title">{{ publication.title }}</h3>
          <p class="publication-meta">{{ publication.date | date: "%B %Y" }} | {{ publication.journal }}</p>
          <p class="publication-authors">{{ publication.authors }}</p>
          <p class="publication-summary">{{ publication.summary }}</p>
          <a href="{{ publication.url | relative_url }}" class="publication-link">Read More</a>
          {% if publication.doi or publication.link %}
            <div class="publication-external-links">
              {% if publication.doi %}
                <a href="https://doi.org/{{ publication.doi }}" target="_blank" rel="noopener noreferrer" class="external-link">DOI</a>
              {% endif %}
              {% if publication.link %}
                <a href="{{ publication.link }}" target="_blank" rel="noopener noreferrer" class="external-link">View Publication</a>
              {% endif %}
            </div>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </div>
</div>
