const meta = require("./Assets/brand-icons/meta.png");
const linkedin = require("./Assets/brand-icons/linkedin.png");
const starry = require("./Assets/icons/starry.png");

const jobArray = [
  {
    img: { meta },
    post: "Product Manager--Remote",
    company: "Meta",
    location: "USA, Remote",
    type: "Full-time",
    pay: "120k-130k",
    timePosted: "posted 5mins ago",
  },
  {
    img: { starry },
    post: "Data Analytics",
    company: "Loom Inc",
    location: "Australia",
    type: "Full-time",
    pay: "130k-150k",
    timePosted: "posted 35mins ago",
  },
  {
    img: { linkedin },
    post: "Data Analytics",
    company: "Loom Inc",
    location: "Australia",
    type: "Full-time",
    pay: "105k-130k",
    timePosted: "posted 35mins ago",
  },
  {
    img: { linkedin },
    post: "Backend Engineer",
    company: "Facebook Inc",
    location: "USA",
    type: "Part-time",
    pay: "105k-110k",
    timePosted: "posted 35mins ago",
  },
];

export default jobArray;
