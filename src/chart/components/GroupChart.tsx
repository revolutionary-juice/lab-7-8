import React from 'react';
import {tGroup} from "../groupdata";
import {Container} from "@mui/material";
import { BarChart, LineChart } from '@mui/x-charts';
import SettingChart from './SettingChart';

const GroupChart = ({data}: {data: tGroup}) => {

    const [series, setSeries] = React.useState({
        'Максимальний рейтинг': true,
        'Минимальний рейтинг': false,
        "Средний рейтинг": false
    });

    const [isBar, setIsBar] = React.useState(true);

    let seriesY = Object.entries(series)
        .filter(item => item[1])
        .map(item => {
            return {"dataKey": item[0], "label": item[0]}
        });

    const chartSetting = {
        yAxis: [{label: 'Рейтинг'}],
        height: 400,
    }
    return (
        <Container maxWidth="lg">
            <SettingChart series={series} setSeries={setSeries} isBar={isBar} setIsBar={setIsBar} />
            <LineChart
                sx={{display: isBar ? "none" : ""}}
                dataset={data}
                xAxis={[{scaleType: 'band', dataKey: 'Группа'}]}
                series={seriesY}
                slotProps={{
                    legend: {
                        position: {vertical: "bottom", horizontal: "center"}
                    }
                }}
                {...chartSetting}
            />
            <BarChart
                sx={{display: !isBar ? "none" : ""}}
                dataset={data}
                xAxis={[{scaleType: 'band', dataKey: "Группа"}]}
                series={seriesY}
                slotProps={{
                    legend: {
                        position: {vertical: "bottom", horizontal: "center"}
                    }
                }}
                barLabel={Object.entries(series)
                    .filter(item => item[1]).length === 1 ? "value" : undefined}
                {...chartSetting}
                />
        </Container>
    );
};

export default GroupChart;