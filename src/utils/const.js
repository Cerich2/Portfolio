const full_name = "Spencer Ibarra Castro";
const date_now = Date.now();
const formatted = new Date(date_now);
const year_birth = 1996;

const DETAILED_INFORMATION = {
  full_name: full_name,
  first_name: full_name.split(" ")[0],
  middle_name: full_name.split(" ")[1],
  last_name: full_name.split(" ")[2],
  position: "Frontend Developer",
  age: `${formatted.getFullYear() - year_birth}`,
};

const HEADER_DETAILS = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Works",
    path: "/work",
  },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
];

export { DETAILED_INFORMATION as details, HEADER_DETAILS as menus };
