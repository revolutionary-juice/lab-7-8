import React from 'react';
import Navbar from "../components/Navbar";
import {groupedByYear, groupedByPlatform, groupedByGenre} from "./groupdata";
import GroupGrid from "./components/GroupGrid";
import Footer from '../components/Footer';
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import GroupChart from './components/GroupChart';

type tSelect = "Год" | "Платформа" | "Жанр";

const Chart = () => {

    const [group, setGroup] = React.useState<tSelect>("Год");
    const [groupData, setGroupData] = React.useState(groupedByYear);

    const handleChange = (event: SelectChangeEvent) => {
        setGroup(event.target.value as tSelect);
        let result;
        result = event.target.value === "Год" ? groupedByYear :
            (event.target.value === "Платформа") ? groupedByPlatform : groupedByGenre
        setGroupData(result);
    }

    return (
        <>
            <Navbar active="3"/>

            <Box sx={{ width: "200px", m: "auto", mt: "20px" }}>
                <FormControl fullWidth>
                    <InputLabel>Группировать по </InputLabel>
                    <Select
                        id="select-group"
                        value={group}
                        label="Группировать по"
                        onChange={handleChange}
                    >
                        <MenuItem value="Год">Году</MenuItem>
                        <MenuItem value="Платформа">Платформе</MenuItem>
                        <MenuItem value="Жанр">Жанру</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <GroupChart data={groupData}/>
            <GroupGrid data={groupData} />
            <Footer />
        </>
    );
};

export default Chart;