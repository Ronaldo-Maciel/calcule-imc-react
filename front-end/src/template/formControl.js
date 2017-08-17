import React from 'react'
import Grid from '../template/Grid'

export default props => (
    <div className="form-group row is-empty">
        <label htmlFor={props.nameControl} className="col-md-2 control-label">{props.nameLabel}</label>
        <Grid cols='12 10 10'>
            <input type="text" className="form-control" id={props.nameControl} value={props.getValue} onChange={props.onChange}></input>
        </Grid>
    </div>
)
