import { useState } from "react";

export const AddCategory = ({onNewCategory}) =>{

    const [imputValue, setImputValue] = useState(['']);

    const onInputChange = ({target}) =>{
        setImputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        //evita los valores vasios
        if(imputValue.trim().length <= 1) return;
        //setCategories(categories => [imputValue, ...categories]);
        onNewCategory(imputValue.trim());
        //limpia el input
        setImputValue('');
    } 

    return(
        <form onSubmit={onSubmit}>
            <input
            type = "text"
            placeholder="Buscar Gift"
            value={imputValue}
            onChange={onInputChange}
            />
        </form>
    )
}