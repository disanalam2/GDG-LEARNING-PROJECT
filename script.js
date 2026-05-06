const founder = [
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739216805/members/ebibodzlq8buxkmj7msm.png",
    "name": "Deepak Kumar",
    "department": "CSE-DS",
    "designation": "Founder",
    "batch": "2022",
    "bio": "Every line of code is a bridge that connects ideas with reality, creating experiences that inspire and transform",
    "github_url": "https://github.com/deepak-raaaz",
    "linkedin_url": "https://linkedin.com/in/deepak-raaaz"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739358080/members/udfbwul7pg1ram4zmkld.png",
    "name": "Rishabh kumar",
    "department": "ECE",
    "designation": "Founder",
    "batch": "2022",
    "bio": "As GDG On Campus HIT Lead Organizer— always striving to turn ideas into innovation, code into impact, and communities into powerhouses. Let's connect and go on a tech-venture!",
    "github_url": "https://github.com/",
    "linkedin_url": "https://www.linkedin.com/in/rishabh-kumar-5b109a301?trk=contact-info"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739358876/members/lrfcawiul8lobdgpcpgh.png",
    "name": "Chinmay Verma",
    "department": "ECE",
    "designation": "Founder",
    "batch": "2022",
    "bio": "Who needs therapy when you can stare error logs for hours and question your life choices?",
    "github_url": "https://github.com/",
    "linkedin_url": "https://www.linkedin.com/in/chinmay-verma-90353921b"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739385730/members/u5whjuoejrz74v6p5cvw.png",
    "name": "Dipankar Saha",
    "department": "ECE",
    "designation": "Founder",
    "batch": "2022",
    "bio": "As the Video Editor Lead at GDG On Campus HIT, I oversee the creation of engaging video content, showcasing our events and initiatives with creativity and precision.",
    "github_url": "https://github.com/",
    "linkedin_url": "https://www.linkedin.com/in/dipankar-saha-8725b4222/"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739803218/members/yg3nkhzbovx77mbotnak.png",
    "name": "Ankush Panja",
    "department": "CSE-DS",
    "designation": "Founder",
    "batch": "2022",
    "bio": "Leadership in Public Relations and Management is not just about making decisions; it's about inspiring others, fostering collaboration, and creating a lasting impact within and outside the team!",
    "github_url": "https://github.com/Ankushgit-hub",
    "linkedin_url": "https://www.linkedin.com/in/ankush-panja"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739462788/members/a1siupe0gfk4rguskap8.png",
    "name": "Aarohini",
    "department": "ECE",
    "designation": "Founder",
    "batch": "2022",
    "bio": "As the Content Writing Lead at GDG HIT, I craft engaging content and posts that informs and inspires our developer community.",
    "github_url": "https://github.com/Aarohini",
    "linkedin_url": "https://www.linkedin.com/in/aarohini-81b3702ba/"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739463419/members/owmwzofjshxkbhx37krx.png",
    "name": "Arijit Dutta",
    "department": "ECE",
    "designation": "Founder",
    "batch": "2022",
    "bio": "ECE undergrad | Graphic Design GD Lead @ GDG On Campus HIT | IoT, Robotics & VLSI Enthusiant",
    "github_url": "https://github.com/ArijitDutta96395",
    "linkedin_url": "https://www.linkedin.com/in/arijit-dutta-a1bb1a267/"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1739899643/members/b9r9qeafl1dbrxploqwy.png",
    "name": "Rahul Kumar",
    "department": "EE",
    "designation": "Founder",
    "batch": "2022",
    "bio": "FullStack web developer prefer backend web development",
    "github_url": "https://github.com/RahulKumar9988",
    "linkedin_url": "https://www.linkedin.com/in/rahul-kumar-320aaa325"
  },
  {
    "profile_image": "https://res.cloudinary.com/dvlarpnj9/image/upload/v1740020404/members/dpolemc6rsnteveibou2.png",
    "name": "Aditya Singh",
    "department": "CSE-ai/ml",
    "designation": "Founder",
    "batch": "2022",
    "bio": "Grinding in silence, winning in public.",
    "github_url": "https://github.com/adityashanky",
    "linkedin_url": "https://www.linkedin.com/in/aditya-singh-8a9b45244"
  }
];

const container = document.getElementById('founders-container');

founder.forEach(person => {
    const cardHTML = `
        <div class="card">
            <img src="${person.profile_image}" alt="${person.name}">
            <h2>${person.name}</h2>
            <p class="dept">${person.designation} | ${person.department} ('${person.batch.slice(2)})</p>
            <p class="bio">"${person.bio}"</p>
            <div class="links">
                <a href="${person.github_url}" class="github" target="_blank">GitHub</a>
                <a href="${person.linkedin_url}" class="linkedin" target="_blank">LinkedIn</a>
            </div>
        </div>
    `;
    container.innerHTML += cardHTML;
});