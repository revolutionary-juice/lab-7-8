import React from 'react';
import {tGroup} from "../groupdata";
import {DataGrid, GridColDef, GridRowsProp} from "@mui/x-data-grid";
import {Container} from "@mui/material";
import {ruRU} from "@mui/x-data-grid/locales";

type GroupProps = {
    data: tGroup
}

const GroupGrid = ({data} : GroupProps) => {
    const rows : GridRowsProp = data;

    const columns: GridColDef[] = [
        {field:"Группа", headerName: "Группа", flex: 1},
        {field:"Минимальний рейтинг", flex: 0.5},
        {field:"Максимальний рейтинг", flex: 0.5},
        {field:"Средний рейтинг", flex: 0.5},
    ];

    return (
        <Container maxWidth="lg" sx={{height: "700px", mt: "20px"}}>
            <DataGrid localeText={ruRU.components.MuiDataGrid.defaultProps.localeText} rows={rows}
                      columns={columns}
                      showToolbar={true}/>
        </Container>
    );
};

export default GroupGrid;