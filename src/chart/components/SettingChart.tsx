import React from 'react';
import {Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack} from "@mui/material";

type tSeries = {
    'Максимальний рейтинг': boolean,
    'Минимальний рейтинг': boolean,
    'Средний рейтинг': boolean,
}

type CheckboxProps = {
    series: tSeries;
    setSeries: React.Dispatch<React.SetStateAction<tSeries>>;
    isBar: boolean;
    setIsBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingChart = ({series, setSeries, isBar, setIsBar}: CheckboxProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeries({
            ...series,
            [event.target.name]: event.target.checked
        })
    }

    const handleChartSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsBar(event.target.value === "bar");
    }

    return (
        <Stack direction="row"
            justifyContent="center"
            divider={<Divider orientation="vertical" flexItem/>}
            spacing={2}
            sx={{m: "20px 0"}}
        >

            <FormControl>
                <FormLabel id="label-radio-group">
                    Тип диаграммы:
                </FormLabel>
                <RadioGroup
                    onChange={handleChartSwitch}
                    name="group-radio"
                    value={(isBar) ? "bar" : "dot"}
                >
                    <FormControlLabel
                        control={<Radio checked={isBar}/>}
                        value="bar"
                        label="Гистограмма"/>
                    <FormControlLabel
                        control={<Radio checked={!isBar}/>}
                        value="dot"
                        label="Линейная"/>
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="label-checkbox-group">
                    На диаграмме показать:
                </FormLabel>
                <FormControlLabel
                    control={
                        <Checkbox checked={series["Максимальний рейтинг"]} name="Максимальний рейтинг"
                                  onChange={handleChange}/>
                    }
                    label="максимальный рейтинг"/>
                <FormControlLabel
                    control={
                        <Checkbox checked={series["Средний рейтинг"]} name="Средний рейтинг"
                                  onChange={handleChange}/>
                    }
                    label="средний рейтинг"/>
                <FormControlLabel
                    control={
                        <Checkbox checked={series["Минимальний рейтинг"]} name="Минимальний рейтинг"
                                  onChange={handleChange}/>
                    }
                    label="минимальный рейтинг"/>

            </FormControl>
        </Stack>


    );
};

export default SettingChart;