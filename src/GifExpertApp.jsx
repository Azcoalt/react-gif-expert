import { useState } from "react";
import {AddCategory,GifGrid} from './components'

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{
        //valida si ya existe la categoria
        if(categories.includes(newCategory))return;
        /*agraga una categoria lego */
        setCategories([newCategory,...categories]);
    }

    return(
        <>
            {/*Titulo*/}
            <h1>GiftExpertApp</h1>

            {/*Input*/}
            <AddCategory onNewCategory = {onAddCategory}/>

            {/* listado de gift*/}
            
            {categories.map(category => (<GifGrid key={category} category={category}/>))}
            
        </>
    );
}