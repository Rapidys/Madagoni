import React from 'react';
import {TablePagination} from "@material-ui/core";


const Pagination = (props) => {
  return (
    <div>
      {<TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={Number(props.totalCount)}
        rowsPerPage={props.rowsPerPage}
        page={props.currentPage}
        onPageChange={props.handleChangePage}
        onRowsPerPageChange={props.handleChangeRowsPerPage}
      />}

    </div>
  );
};

export default Pagination;
