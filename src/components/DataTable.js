import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DataTable = ({ carData }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Make</TableCell>
          <TableCell>Model</TableCell>
          <TableCell>Year</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {carData.map((car) => (
          <TableRow key={car.id}>
            <TableCell>{car.make}</TableCell>
            <TableCell>{car.model}</TableCell>
            <TableCell>{car.year}</TableCell>
            <TableCell>{car.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

// Define PropTypes for the carData prop
DataTable.propTypes = {
  carData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default DataTable;