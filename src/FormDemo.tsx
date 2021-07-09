import {Button, Paper, Typography} from "@material-ui/core";
import { FormProvider, useForm } from 'react-hook-form'
import {FormInputText} from "./form-components/FormInputText";
import {FormInputCheckbox} from "./form-components/FormInputCheckbox";
import {FormInputDropdown} from "./form-components/FormInputDropdown";
import {FormInputDate} from "./form-components/FormInputDate";
import {FormInputSlider} from "./form-components/FormInputSlider";
import {FormInputRadio} from "./form-components/FormInputRadio";

interface IFormInput {
    textValue: string
    radioValue: string
    checkboxValue: string[]
    dateValue: Date
    dropdownValue:string
    sliderValue:number
}

const defaultValues ={
    textValue: '',
    radioValue: '',
    checkboxValue: [],
    dateValue: new Date(),
    dropdownValue:'',
    sliderValue:0
}
export const FormDemo = () => {

    const methods = useForm<IFormInput>({defaultValues: defaultValues})

    const { handleSubmit, reset } = methods

    const onSubmit = (data:IFormInput) => {
        console.log(data)
    }

    return <Paper style={{display:"grid" , gridRowGap:'20px' , padding:"20px"}}>
        <Typography variant='h6'> React hook form with Material UI</Typography>

        <FormProvider {...methods}>
            <FormInputText name='textValue' label='Text Input' />
            <FormInputRadio name={'radioValue'} label={'Radio Input'}/>
            <FormInputDropdown name='dropdownValue' label='Dropdown Input' />
            <FormInputDate name='dateValue' label='Date Input' />
            <FormInputCheckbox name={'checkboxValue'} label={'Checkbox Input'}  />
            <FormInputSlider name={'sliderValue'} label={'Slider Input'}  />
        </FormProvider>

        <Button onClick={handleSubmit(onSubmit)} variant={'contained'} > Submit </Button>
        <Button onClick={() => reset()} variant={'outlined'}> Reset </Button>
    </Paper>
}