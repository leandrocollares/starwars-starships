import React from 'react';

const Starships = ({ list }) => (
  <div className="wrapper">
    <div className="intro">
      <h1>Starwars Starships</h1>
      <p>
        Data fetched from
        {' '}
        <a
          className="App-link"
          href="https://swapi.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SWAPI
        </a>
      </p>
    </div>
    <div className="rtable rtable--collapse">
      <div className="rtable-row rtable-row--head">
        <div className="rtable-cell name-cell column-heading">name</div>
        <div className="rtable-cell crew-cell column-heading">crew</div>
        <div className="rtable-cell passengers-cell column-heading">
          passengers
        </div>
        <div className="rtable-cell hyperdrive-cell column-heading">
          hyperdrive rating
        </div>
      </div>

      {list.map((item, index) => (
        <div key={(item.url).match(/[0-9]+/)} className={`rtable-row ${index % 2 ? 'is-striped' : ''}`}>
          <div className="rtable-cell name-cell">
            <div className="rtable-cell--content   ">{item.name}</div>
          </div>
          <div className="rtable-cell crew-cell">
            <div className="rtable-cell--heading">crew</div>
            <div className="rtable-cell--content crew-content">{item.crew}</div>
          </div>
          <div className="rtable-cell passengers-cell">
            <div className="rtable-cell--heading">passengers</div>
            <div className="rtable-cell--content passengers-content">
              {item.passengers}
            </div>
          </div>
          <div className="rtable-cell hyperdrive-cell">
            <div className="rtable-cell--heading">hyperdrive rating</div>
            <div className="rtable-cell--content hyperdrive-content">
              {item.hyperdrive_rating}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Starships;
