import { useState } from "react"


const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {
        setinputValue(target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        if(inputValue.trim().length <=1){
            return
        }
        //setCategories(categories=>[inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return (
        <form onSubmit={(event)=>onSubmit(event)}>
            <input
                type="text"
                placeholder="agregar"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>

    )
}

export default AddCategory