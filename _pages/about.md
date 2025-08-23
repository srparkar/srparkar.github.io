---
permalink: /
title: "🧑‍🔬About Me"
author_profile: true
layout: about_layout
redirect_from: 
  - /about/
  - /about.html
---

<p style="text-align: justify; text-justify: inter-word; color: #222222">
I am a graduate researcher at the AISecLab, Stevens Institute of Technology, where my work focuses on leveraging Artificial Intelligence to advance next-generation communication frameworks. My primary research explores mmWave-based Integrated Sensing and Communication (ISAC), with additional interests in applying AI to enhance the security and reliability of QoS-aware network policies. Looking ahead, I aim to contribute to the development of intelligent, secure, and adaptable 6G wireless systems, enabling applications such as localization and spatial sensing, autonomous networks, IoT connectivity, and resilient cyber-physical infrastructures.
</p>
<p style="text-align: justify; text-justify: inter-word; color: #222222">
I completed my graduate studies in <em style="color: #333333; font-weight: 475;">M.S. Applied Artificial Intelligence </em> from <em><a href="https://www.stevens.edu/" target="_blank" style="color: #333333; font-weight: 500;">Stevens Institute of Technology<sup>↗</sup></a>,</em> and undergraduate studies in <em style="color: #333333; font-weight: 475;">Computer Engineering </em> at <a href="https://www.mctrgit.ac.in/" target="_blank" style="color: #333333; font-weight: 500;"> <em>Rajiv Gandhi Institute of Technology (Mumbai University)<sup>↗</sup></em></a>.
</p>

<div style="padding: 0.75rem 1rem; margin-bottom: 0.5rem; border: 2px solid #888; border-radius: 6px; background: #fff; color: #333333; ">
  <strong>🔬 Research Interests:</strong>
  <ul>
    <li><strong>Wireless Communication:</strong> 5G NR, Sub-6 GHz, mmWave, Next-G networks, O-RAN architectures, and AI-RAN systems.</li>
    <li><strong>Integrated Sensing and Communication (ISAC):</strong> Joint radar-communication systems for healthcare, vehicular networks, and smart environments.</li>
    <li><strong>Machine Learning for Wireless Systems:</strong> Deep learning for signal classification, channel learning, and federated learning in edge devices.</li>
    <li><strong>Edge Intelligence & SDR Experimentation:</strong> Real-time inference on SDR platforms; intelligent wireless testbeds.</li>
  </ul>
</div>
<div class="news-container" style="flex: 0 0 450px; align-self: stretch; ;">
    <div style="
          top: 0;
          /* background: #fafafa; */
          padding-top: 1rem;
          padding-bottom: 0.75rem;
          font-weight: bold;
          z-index: 2;
          font-size: 1.2rem;
        ">
      <b>📰 Updates</b>
    </div>
    <aside id="about-news" style="
         /* top: 5.5rem; */  /* Add this later when length increases*/
         flex-basis: 300px;
         background: #fafafa;
         border-radius: 8px;
         padding: 1rem;
         box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
         font-size: 0.95rem;
         line-height: 1.6;
         /* color: black; */
         max-height: 50vh;
         overflow-y: hidden;
         flex-shrink: 1;
       ">
      <!-- <ul id="news-list" style="list-style-type: none; padding-left: 0; margin: 0;"> -->
      <ul id="news-list" style="
      max-height: calc(50vh - 4rem); /* subtract header height */
      overflow-y: auto;
      list-style: none;
      margin: 0;
      padding: 0 1rem 1rem;
      line-height: 1.6;
      font-size: 0.85rem;
    ">
        {% assign news_items = site.news | sort: 'date' | reverse | slice: 0,6 %}
        {% assign current_year = "" %}
        {% assign this_year = 'now' | date: "%Y" %}
        {% for item in news_items %}
        {% assign year = item.date | date: "%Y" %}
        {% assign stripped = item.content | markdownify | strip_newlines | replace: '<p>', '' | replace: '</p>', '' %}
        {% if year != current_year %}
        {% unless year == this_year %}
        <li style="text-align: center; font-weight: bold; margin: 0.5rem 0; color: #666;">{{ year }}</li>
        {% endunless %}
        {% assign current_year = year %}
        {% endif %}
        <li style="padding: 0.75rem 1rem; 
          margin-bottom: 0.5rem; 
          border: 1px solid #ddd; 
          border-radius: 6px; 
          background: #fff; 
          color: #000;">
          <div style="margin-bottom: 0.3rem; color: #000;">
            {% if item.link != "" %}
            <em style="color: #555;">[{{ item.date | date: "%B %Y" }}]</em> {{ stripped }} <a href="{{ item.link }}" style="font-weight: 500;">Read More<sup>↗</sup></a>
            {% else %}
            <em style="color: #555;">[{{ item.date | date: "%B %Y" }}]</em> {{ stripped }}
            {% endif %}
          </div>
        </li>
        {% endfor %}
      </ul>
      {% assign all_news = site.news | sort: 'date' | reverse %}
      {% if all_news.size > 6 %}
        <a href= "/updates/" style="color: #333333; font-weight: 500;"> Past Updates<sup>↗</sup></a>
      {% endif %}
    </aside>
  </div>