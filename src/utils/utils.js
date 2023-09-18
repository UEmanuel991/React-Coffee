export const HOMEPAGE_COLLECTIONS = [
  {
    id: 1,
    images: "../img/shop-cafea-img.jpg",
    title: "CAFEA",
    path: "collections/collection-products",
    subtitles: [
      {
        name: "espresso",
        link: "/collections/espresso",
      },
      {
        name: "filtru",
        link: "/collections/filtru",
      },
      {
        name: "microlot",
        link: "/collections/microlot",
      },
    ],
  },
  {
    id: 2,
    images: "../img/shop-ceai-img.jpg",
    title: "CEAI",
    path: "collections/ceai",
    subtitles: [
      {
        name: "alb",
        link: "/collections/tea",
      },
      {
        name: "negru",
        link: "/collections/tea",
      },
      {
        name: "verde",
        link: "/collections/tea",
      },
    ],
  },
  {
    id: 3,
    images: "../img/shop-echipamente-img.jpg",
    title: "ECHIPAMENTE CAFEA",
    path: "collections/echipamente",
    subtitles: [
      {
        name: "pentru acasa",
        link: "/collections/echipaments",
      },
      {
        name: "pentru barista",
        link: "/collections/echipaments",
      },
      {
        name: "profesionale",
        link: "/collections/echipaments",
      },
    ],
  },
];

export const COLLECTIONS = [
  {
    id: 1,
    name: "CAFEA",
    image: "img/shop-cafea-img.jpg",
    link: "/collections/cafea",
    subtitle: "ESPRESSO  •  FILTRU •  MICROLOT  •  ABONAMENTE",
  },
  {
    id: 2,
    name: "CEAI",
    image: "img/shop-ceai-img.jpg",
    link: "/collections/ceai",
    subtitle: "ALB   •   VERDE   •   NEGRU    •    INFUZII",
  },
  {
    id: 3,
    name: "ECHIPAMENTE CAFEA",
    image: "img/shop-echipamente-img.jpg",
    link: "/collections/echipamente",
    subtitle:
      "ECHIPAMENTE PENTRU ACASĂ    •   ACCESORII PENTRU BARISTA   •   ECHIPAMENTE PROFESIONALE",
  },
];
export const COFFEE_COLLECTIONS = [
  {
    id: 1,
    name: " ESPRESSO  ",
    image: "../img/espresso-caffe.jpg.jpg",
    link: "collections/:id",
  },
  {
    id: 2,
    name: "•  FILTRU ",
    image: "../img/filtru-caffe.jpg.jpg",
    link: "collections/:id",
  },
  {
    id: 3,
    name: "•  MICROLOT",
    image: "../img/microlot-caffe.jpg.jpg",
    link: "collections/:id",
  },
  {
    id: 4,
    name: "•  ABONAMENTE",
    image: "../img/abonament-caffe.jpg.png",
    link: "/collections/:id",
  },
];

// export const ESPRESSO_PAGE_COLLECTIONS = [
//   { id: 1, name: "espresso", image: "", link: "/collections/espresso" },
//   { id: 2, name: "espresso", image: "", link: "/collections/filtru" },
//   { id: 3, name: "espresso", image: "", link: "/collections/microlot" },
// ];
