import React from 'react';
import PropTypes from 'prop-types';

function Table({ name, data }) {
  return (
    <div className="col-md-6">
      <div className="h-100 p-5 rounded-3">
        <h2>{name}</h2>
        <div className="list-group">
          <TableBody data={data} />
        </div>
      </div>
    </div>
  );
}
Table.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired).isRequired,
};

function TableBody({ data }) {
  const rows = data.map((row) => (
    <a href={row.url} id={row.id}>
      <img className="rounded-circle flex-shrink-0" height="32" width="32" alt="twbs" src={row.icon} />
      <div className="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 className="mb-0">{row.company}</h6>
          <p className="mb-0 opacity-75">{row.title}</p>
        </div>
        <small className="opacity-50 text-nowrap">{row.date}</small>
      </div>
    </a>
  ));

  return rows;
}
TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired).isRequired,
};

export default Table;
