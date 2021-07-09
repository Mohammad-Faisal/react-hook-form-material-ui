import React from 'react'
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import { Controller, useFormContext } from 'react-hook-form'
import {FormInputProps} from "./FormInputProps";

const options = [
    {
        label: 'Radio Option 1',
        value:'1'
    },
    {
        label: 'Radio Option 2',
        value:'2'
    },
]


export const FormInputRadio: React.FC<FormInputProps> = ({ name, label }) => {
    const { control, formState: { errors }} = useFormContext()


    const errorMessage = errors[name] ? errors[name].message : null

    return (
        <FormControl component='fieldset'>
            <FormLabel component='legend'>{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
                    <RadioGroup aria-label='gender' value={value} onChange={onChange}>
                        {options.map((singleItem) => (
                            <FormControlLabel value={singleItem.value} control={<Radio />} label={singleItem.label} />
                        ))}
                    </RadioGroup>
                )}
            />
            <FormHelperText color={'red'}>{errorMessage ? errorMessage : ''}</FormHelperText>
        </FormControl>
    )
}
