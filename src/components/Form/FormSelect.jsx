import React from 'react'
import { NativeSelect,FormControl} from '@mui/material/';
import './Form.css'
const FormSelect = () => {
    return (
        <div className='formSelect'>
           <FormControl className='formControl'>
 
 <NativeSelect
  className='app_healthLabels' style={{marginTop:'1.5rem'}}>
   <option value='alcohol-free' onClick={()=>{setGenre('alcohol-free')}}>Random</option>
   <option  value='vegan' onClick={()=>{setGenre('vegan')}}>Vegan</option>
   <option value='vegetarian' onClick={()=>{setGenre('vegetarian')}}>Vegetarian</option>
   <option value='no-oil-added' onClick={()=>{setGenre('no-oil-added')}}>No Oil</option>
   <option value='low-sugar' onClick={()=>{setGenre('low-sugar')}}>Low-Sugar</option>
   <option value='keto-friendly' onClick={()=>{setGenre('keto-friendly')}}>Keto</option>
   <option value='immuno-supportive' onClick={()=>{setGenre('immuno-supportive')}} >Immune Booster</option>
   <option value='dairy-free' onClick={()=>{setGenre('dairy-free')}} >Dairy Free</option>
 </NativeSelect>
</FormControl>  
        </div>
    )
}

export default FormSelect
