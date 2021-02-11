import axios from "axios";

const base__URL = "https://swapi.dev/api/";

// export const getCategories = {
//   getFilms(value: string) {
//     axios
//       .get(`${base__URL}films/?search=${value}`)
//       .then((res) => {
//         console.log(res.data);
//         return res.data;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },
//   getPeople(value: string) {
//     axios
//       .get(`${base__URL}people/?search=${value}`)
//       .then((res) => {
//         console.log(res.data.results);
//         return res.data.results;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },
//   getPlanets(value: string) {
//     axios
//       .get(`${base__URL}planets/?search=${value}`)
//       .then((res) => {
//         console.log(res.data.results);
//         return res.data.results;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },
//   getSpecies(value: string) {
//     axios
//       .get(`${base__URL}species/?search=${value}`)
//       .then((res) => {
//         console.log(res.data.results);
//         return res.data.results;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },
//   getStarships(value: string) {
//     axios.get(`${base__URL}Starships/?search=${value}`).then((res) => {
//       console.log(res.data.results);
//       return res.data.results;
//     });
//   },
//   getVehicless(value: string) {
//     axios
//       .get(`${base__URL}vehicles/?search=${value}`)
//       .then((res) => {
//         console.log(res.data.results);
//         return res.data.results;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },
// };

// films string
// people string
// planets string
// species string
// starships string
// vehicles string
