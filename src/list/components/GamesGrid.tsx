import React from 'react';
import {DataGrid, GridColDef, GridRowsProp} from "@mui/x-data-grid";
import {videoGames} from "../table"
import {ruRU} from "@mui/x-data-grid/locales";
import {Container} from "@mui/material";

const GamesGrid = () => {

    const rows : GridRowsProp = videoGames;

    const columns: GridColDef[] = [
        {field:"title", headerName: "Наименование", flex: 1},
        {field:"platform", headerName:"Платформа", flex: 1},
        {field:"year", headerName:"Год", flex: 0.5},
        {field:"genre", headerName:"Жанр", flex: 1},
        {field:"rating", headerName:"Рейтинг", flex: 0.5},
        {field:"update", headerName:"Последнее обновление", flex: 0.5},
        {field:"gameplay", headerName:"Геймплей",flex: 0.5},
        {field:"players", headerName:"Количество игроков", flex: 0.8},
    ];

    return (
        <Container maxWidth="lg" sx={{height: "700px", mt: "20px"}}>
            <DataGrid localeText={ruRU.components.MuiDataGrid.defaultProps.localeText} rows={rows}
                     columns={columns}
            showToolbar={true}/>
        </Container>
    );
};

export default GamesGrid;