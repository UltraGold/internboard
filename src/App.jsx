import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import './bootstrap.min.css';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = 'data.json';

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        setData(result);
      });
  });

  const tables = Object.entries(data).map(([key, value]) => {
    if (key === 'nextId') {
      return null;
    }
    return <Table name={key} data={value} key={key} />;
  });

  return (
    <main>
      <div className="container py-4">

        <Header title="Devcom" img="https://www.warranedev.com/warraneLogo.png" alt="Warrane logo" />

        <div className="row align-items-md-stretch">
          {tables}
        </div>

        <Footer date="Thursday 24 March 2022" name="michaelhe.co.nz" url="https://www.michaelhe.co.nz" />

      </div>
    </main>
  );
}

function Header({ title, img, alt }) {
  return (
    <header className="pb-3 mb-4 border-bottom">
      <span className="d-flex align-items-center text-dark text-decoration-none">
        <span className="fs-4">
          <img style={{ maxWidth: '40%', maxHeight: '100%', paddingRight: '3%' }} src={img} alt={alt} />
          {title}
        </span>
      </span>
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function Footer({ date, name, url }) {
  return (
    <footer className="pt-3 mt-4 text-muted border-top">
      Last updated
      <b>
        &nbsp;
        {date}
        &nbsp;
      </b>
      · A&nbsp;
      <a href={url}>{name}</a>
      &nbsp;website
    </footer>
  );
}
Footer.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default App;
