import React, {ChangeEvent, useEffect} from 'react'
import { FormLabel, Slider} from '@material-ui/core'
import { Controller, useFormContext } from 'react-hook-form'
import {FormInputProps} from "./FormInputProps";

export const FormInputSlider = ({ name, label }: FormInputProps) => {

    const { control , watch} = useFormContext()
    const [value, setValue] = React.useState<number>(30);

    const formValue = watch(name)
    useEffect(() => {
        if (value) setValue(formValue)
    }, [formValue])

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    return (
        <>
            <FormLabel component='legend'>{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState, formState }) => (
                    <Slider
                        {...field}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay='auto'
                        min={0}
                        max={100}
                        step={1}
                    />
                )}
            />
        </>
    )
}

