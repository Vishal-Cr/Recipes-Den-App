import { useState,useEffect} from 'react'
import { Input,Skeleton} from '@mui/material/';
import RecipeUI from '../Recipes/RecipeList';
import axios from 'axios';
import shortid from 'shortid';
import './Form.css';
import FormSelect from './FormSelect';
const Form = () => {
    const[query,setQuery]=useState('');
    const[genre,setGenre]=useState('Mediterranean');
    const [recipes,setRecipes]=useState([]);
    const[loading,setLoading]=useState(true);
    const url=`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&imageSize=REGULAR&health=${genre}`;
    
    
    const submitHandler=async (e)=>{
        e.preventDefault();
        setLoading(true);
        setTimeout(async () => {
          let fetchedRecipes=await getRecipes();
          setQuery('');
            setLoading(false)
        }, 1500)
        
    
        
      }
   
      const getRecipes=async ()=>{
        let result;
      
      
        return result=await axios.get(url)
          .then((response)=>{
            
            const{hits}=response.data;
            
            setRecipes(hits)
          })
              .catch((e)=>console.log(e));
          
      }
       
      useEffect(() => {
 
        async function fetchRecipe(){
        
          let result=await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=chocolate&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&imageSize=REGULAR&random=true`)
       
        .then((response)=>{
         setLoading(false);
         const {hits}=response.data;
         
         setRecipes(hits);
      
       })
       
       .catch((e)=>console.log(e));
      }
      
      fetchRecipe();
      },[]);
       
   
    return (
        <div className='Form'>
          
        <form onSubmit={submitHandler} >
       <Input placeholder='Enter Ingredient (ex:Chocolate)' 
       className='input'
       onChange={(e)=>setQuery(e.target.value)} 
       value={query}
      />
   
    <FormSelect/>
    </form>
  
    {loading ? <Skeleton 
    variant="cicular"
    animation='wave' 
    width={510} 
    height={818} 
    style={{margin:'0 auto',marginTop:'1rem'}}
    /> : <div className='app-recipes'>
    {recipes.map((recipe)=>{
     
      return <RecipeUI recipe={recipe} id={shortid.generate()} />
    })}
    
  </div>} 
        </div>
    )
}

export default Form
