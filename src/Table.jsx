import React from 'react';
import PropTypes from 'prop-types';

function Table({ name, data, selected }) {
  return (
    <div className="col-md-6">
      <div className="h-100 p-5 rounded-3">
        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <div className="list-group">
          <TableBody data={data} selected={selected} />
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

function TableEntry({ row }) {
  let img;
  if (row.icon) {
    img = <img className="rounded-circle flex-shrink-0" height="32" width="32" alt="twbs" src={row.icon} />;
  } else {
    img = null;
  }
  return (
    <a href={row.url} className="list-group-item list-group-item-action d-flex gap-3 py-3">
      {img}
      <div className="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 className="mb-0">{row.company}</h6>
          <p className="mb-0 opacity-75">{row.title}</p>
        </div>
        <small className="opacity-50 text-nowrap">{row.date}</small>
      </div>
    </a>
  );
}
TableEntry.propTypes = {
  row: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    icon: PropTypes.string,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
  }).isRequired,
};

function TableBody({ data, selected }) {
  const rows = data.filter((row) => row.type === selected || selected === 'all' || row.type === 'all').map((row) => <TableEntry key={row.id} row={row} />);

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
