import React from 'react'
import { NativeSelect,FormControl} from '@mui/material/';
const FormSelect = () => {
    return (
        <>
           <FormControl  className='formControl' style={{width:'7.5%',display:'absolute',top:'50%',margin:'1rem'}}>
 
 <NativeSelect
  className='app_healthLabels'>
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
        </>
    )
}

export default FormSelect
