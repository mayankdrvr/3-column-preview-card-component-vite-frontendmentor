// src/App.jsx

import './App.css';


// const containerProperties = {
//   width: 320,
//   height: 497,
//   maxWidth: '100%',
//   backgroundColor: 'var(--white)',
//   padding: '1.25rem',
//   borderRadius: '1.5rem',
//   fontSize: '1rem',
//   boxShadow: '0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.05)',
//   margin: '7rem 3rem 7rem 3rem',
// };


// const containerImage = {
//   maxWidth: '100%',
//   borderRadius: '0.625rem',
//   marginBottom: '1rem',
// };

// const containerHeading = {
//   color: 'var(--dark-blue)',
//   textAlign: 'center',
//   marginBottom: '1rem',
//   fontSize: '1.5rem',
// };

// const containerDescription = {
//   color: 'var(--grayish_blue)',
//   textAlign: 'center',
//   fontSize: '1rem',
//   marginBottom: '2.5rem',
// };

function App() {
  return (
    <div>
      <main className="container">
        <h1 hidden>Car Types</h1>
        <section className="container__one container--properties">
          <img src="./assets/icon-sedans.svg" alt="" className="container__one__image container--image" />
          <h2 className="container__heading">Sedans</h2>
          <p className="container__description">Choose a sedan for its affordability and excellent fuel economy. Ideal for
            cruising in the city
            or on your next road trip.</p>
          <a href="#" className="container__button">Learn More</a>
        </section>
        <section className="container__two container--properties">
          <img src="./assets/icon-suvs.svg" alt="" className="container__two__image container--image" />
          <h2 className="container__heading">
            SUVs
          </h2>
          <p className="container__description">
            Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
            and off-road adventures.
          </p>
          <a href="#" className="container__button">Learn More</a>
        </section>
        <section className="container__three container--properties">
          <img src="./assets/icon-luxury.svg" alt="" className="container__three__image container--image" />
          <h2 className="container__heading">Luxury</h2>
          <p className="container__description">
            Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
            rental and arrive in style.
          </p>
          <a href="#" className="container__button">Learn More</a>
        </section>
      </main>
      <footer className="attribution attribution--properties">
        Challenge by <a className="attribution__source" href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          rel="noopener noreferrer">Frontend
          Mentor</a>.
        Coded by <a className="attribution__creator" href="https://www.frontendmentor.io/profile/mayankdrvr" target="_blank"
          rel="noopener noreferrer">Mayank Arora</a>
      </footer>
    </div>
  );
}

export default App;