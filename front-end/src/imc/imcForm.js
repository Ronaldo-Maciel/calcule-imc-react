import React from 'react'
import Grid from '../template/Grid'
import FormControl from '../template/formControl'
import FormButton from '../template/formButton'

export default props => {
    return (
    <div className="row">
        <Grid cols='12 12 12'>
            <div className="well bs-component">
                <FormControl nameControl='name' nameLabel='Nome' typeControl='text' getValue={props.name} onChange={props.handleChange} />
                <FormControl nameControl='height' nameLabel='Altura' typeControl='number' getValue={props.height} onChange={props.handleChange} />
                <FormControl nameControl='weight' nameLabel='Peso' typeControl='number' getValue={props.weight} onChange={props.handleChange} />
                <FormButton onClick={props.handleAdd} />
            </div>
        </Grid>
    </div>
  )
}