import React from 'react'
import './RecipeList.css';
export default function RecipeUI({recipe,id}) {
  
    return (
        recipe['recipe']['image'].match(/\.(jpeg|jpg|gif|png)$/)//this makes sure svg is not loaded which might create problems
     !=null && <div className='recipeTile' key={id}>
           
           <a href={recipe['recipe']['url']} target="_blank">
            <img className='recipeTile__img'  src={recipe['recipe']['image'] }/>
            </a>
            <p className='recipeTile_name' key={id}>
            {recipe['recipe']['label']}
            </p>
        </div>
    )
}
