import { useState,useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import shortid from 'shortid';
import RecipeUI from './components/Recipes/RecipeList';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Input,AppBar,NativeSelect,FormControl,Container,Toolbar,Typography } from '@mui/material/';

function App() {
  
  const[query,setQuery]=useState('');
  const [recipes,setRecipes]=useState([]);
  const[genre,setGenre]=useState('Mediterranean');
  const url=`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&imageSize=REGULAR&health=${genre}`;
 
   
 useEffect(() => {
 
  async function fetchRecipe(){
  
    let result=await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&imageSize=REGULAR&random=true`)
 
  .then((response)=>{
   const {hits}=response.data;
   
   setRecipes(hits);

 })
 
 .catch((e)=>console.log(e));
}

fetchRecipe();
},[]);
 
 const getRecipes=async ()=>{
  let result;


  return result=await axios.get(url)
    .then((response)=>{
      
      const{hits}=response.data;
      
      setRecipes(hits)
    })
        .catch((e)=>console.log(e));
    
}
  const submitHandler=async (e)=>{
    e.preventDefault();
    
    let fetchedRecipes=await getRecipes();

    setQuery('');
  }
  return (
    <div className="App">
       <Header/>
         <div>
        <form onSubmit={submitHandler} >
       <Input placeholder='Enter Ingredient (ex:chicken)' 
       className='input'
       onChange={(e)=>setQuery(e.target.value)} 
       value={query}
      />
   

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
    </form>
    </div>

  <div className='app-recipes'>
    {recipes.map((recipe)=>{
     
      return <RecipeUI recipe={recipe} id={shortid.generate()} />
    })}
  </div>
  <AppBar position="static" color="inherit">
          <Container maxWidth="md">
           
              <Typography variant="body1" color="inherit">
                © 2021-Vishal Anthony
               
               <a href=""><GitHubIcon/></a>
               <a href=""><LinkedInIcon/></a>
              </Typography>
         
          </Container>
        </AppBar>
  </div>
 
 )
  
}

export default App
