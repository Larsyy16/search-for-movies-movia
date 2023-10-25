import React from "react";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import SearchMovies from './components/SearchMovies'
// import Homepage from './pages/Homepage'
// import BackDrop from './BackDrop'
import Layout from "./components/Layout";
import { MenuProvider } from "./components/MenuContext";

import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
    <BrowserRouter>
      <MenuProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </MenuProvider>
    </BrowserRouter>
    </>
  );
}
export default App;

// function App() {

//   return (
//     <>
//       {/*  */}
//       {/* <DiscoverMovies /> */}
//       {/* <Homepage /> */}
//       <Slider />
//     </>
//   )
// }
// {console.log(movies.map(movie => (
//   <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
// )))}

// adult
// :
// false
// backdrop_path
// :
// "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg"
// genre_ids
// :
// (2) [27, 53]
// id
// :
// 1008042
// original_language
// :
// "en"
// original_title
// :
// "Talk to Me"
// overview
// :
// "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces."
// popularity
// :
// 2292.177
// poster_path
// :
// "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg"
// release_date
// :
// "2023-07-26"
// title
// :
// "Talk to Me"
// video
// :
// false
// vote_average
// :
// 7.3
// vote_count
// :
// 686

// const movies = [
//   {
//     id: 1,
//     image: './src/assets/drake.png',
//     imageBg: './src/assets/drake.png',
//     title: '1983'
//   },
//   {
//     id: 2,
//     image: './src/assets/drake.png',
//     imageBg: './src/assets/drake.png',
//     title: 'Russian doll'
//   },
//   {
//     id: 3,
//     image: './src/assets/drake.png',
//     imageBg: './src/assets/drake.png',
//     title: 'The rain',
//   },
//   {
//     id: 4,
//     image: './src/assets/drake.png',
//     imageBg: './src/assets/drake.png',
//     title: 'Sex education'
//   },
//   {
//     id: 5,
//     image: './src/assets/drake.png',
//     imageBg: './src/assets/drake.png',
//     title: 'Elite'
//   },
//   {
//     id: 6,
//     image: './src/assets/drake.png',
//     imageBg: './src/assets/drake.png',
//     title: 'Black mirror'
//   }
// ];
