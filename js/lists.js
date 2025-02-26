const objWorks = [
  {
    title: "Collaction Budapest Cohousing",
    image: "src/img/work-collaction.png",
    alt: this.title,
    description:
      "This is the homepage of a civil organization project. The main goals are information sharing, organizational growth, and communication.",
    tags: ["Html", "css", "JavaScript"],
    link: "https://collactionbudapest.hu",
  },
  {
    title: "Weather Application",
    image: "src/img/work-weatherapp.png",
    alt: this.title,
    description:
      "Everyone needs a weather app. This weather application provides real-time weather updates and forecasts. Users can search for weather information by city, receiving data like temperature, humidity, wind speed, and a detailed five-day forecast.",
    tags: ["Html", "CSS (SCSS)", "JavaScript", "JSON API"],
    link: "https://olgavegh.github.io/weatherapp/",
  },
  {
    title: "Rock, Paper, Scissors Game",
    image: "src/img/work-scrissorgame.png",
    alt: this.title,
    description: "A simple Rock, Paper, Scissors game built with React.",
    tags: ["Html", "CSS", "React"],
    link: "https://olgavegh.github.io/rock-paper-scissors-react/",
  },
];

let itemWork = "";

objWorks.forEach((work) => {
  itemWork += `<div class="work">
    <div class="item">
        <img src="${work.image}" alt="${work.alt}">
        <details>
            <summary>${work.title}</summary>
            <p>${work.description}</p>
            <div>
                ${work.tags
                  .map((tag) => `<span class="tag">${tag}</span>`)
                  .join("")}
            </div>
            <a class="icon" href="${work.link}" target="_blank" rel="noopener">
                <i class="bx bx-link-external"></i>
            </a>
        </details>
        <span class="overlay"></span>
    </div>
</div>`;
});

document.getElementById("arrayWorks").innerHTML = itemWork;
