import React from 'react';
// show planets
export const PlanetCard = ({ planet }) => {
  return (
    <>
      <figure>
        <img
          src={
            planet.image ||
            'https://i.pinimg.com/1200x/f6/ac/54/f6ac54f64af086b9ad80aca667a221ce.jpg'
          }
          alt={planet.planet}
          width={387}
          height={252}
          loading='lazy'
        />
        <figcaption>
          <p>{planet.planet}</p>

          <p>{planet.distanceFromSun} million km</p>
        </figcaption>
      </figure>
    </>
  );
};
