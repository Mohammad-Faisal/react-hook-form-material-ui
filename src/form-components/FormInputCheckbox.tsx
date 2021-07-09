import React, { useEffect, useState } from 'react'
import { Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel } from '@material-ui/core'
import { Controller, useFormContext } from 'react-hook-form'
import {FormInputProps} from "./FormInputProps";

const options = [
    {
        label: 'Checkbox Option 1',
        value:'1'
    },
    {
        label: 'Checkbox Option 2',
        value:'2'
    },
]

export const FormInputCheckbox: React.FC<FormInputProps> = ({ name, label }) => {
    const [selectedItems, setSelectedItems] = useState<any>([])
    const { control, setValue, formState: { errors }} = useFormContext()

    const handleSelect = (value:any) => {
        const isPresent = selectedItems.indexOf(value)
        if (isPresent !== -1) {
            const remaining = selectedItems.filter((item:any) => item !== value)
            setSelectedItems(remaining)
        } else {
            setSelectedItems((prevItems:any) => [...prevItems, value])
        }
    }

    useEffect(() => {
        setValue(name, selectedItems)
    }, [selectedItems])

    const errorMessage = errors[name] ? errors[name].message : null

    return (
        <FormControl size={'small'} variant={'outlined'}>
            <FormLabel component='legend'>{label}</FormLabel>

            <div>
                {options.map((option:any) => {
                    return (
                        <FormControlLabel
                            control={
                                <Controller
                                    name={name}
                                    render={({ field: { onChange: onCheckChange } }) => {
                                        return <Checkbox checked={selectedItems.includes(option.value)} onChange={() => handleSelect(option.value)} />
                                    }}
                                    control={control}
                                />
                            }
                            label={option.label}
                            key={option.value}
                        />
                    )
                })}
            </div>

            <FormHelperText>{errorMessage ? errorMessage : ''}</FormHelperText>
        </FormControl>
    )
}
