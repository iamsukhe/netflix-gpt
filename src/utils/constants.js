export const APP_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8b1-7864-8e94-75a86b260122/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/GB-en-20260112-TRIFECTA-perspective_c6f7d970-d5ea-4140-9669-dca2611e70c0_small.jpg";

export const PHOTO_URL =
  "https://lh3.googleusercontent.com/a/ACg8ocKkSExNxkr_tg5fBPBgDD8hlt1pexQIRlqSH_scyMeQo_bYY2Nx=s288-c-no";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p/w780";
