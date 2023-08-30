export const MAIN_LOGO = "img/logo-netflix.png";
export const COMMON_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const API_GET_OPT = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const BG_GLOBAL = "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const POSTER_CDN = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGS = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "telugu", name: "Telugu"},
  {identifier: "spanish", name: "Spanish"},
];

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;