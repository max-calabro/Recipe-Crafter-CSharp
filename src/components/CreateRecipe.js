import { useState } from 'react'

const CreateRecipe = () => {
  const initialState = {
    name: '',
    description: '',
    ingredients: [],
    instructions: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [ingredientsList, setIngredientsList] = useState([{ ingredients: '' }])

  const handleAddIngredient = () => {
    setIngredientsList([...ingredientsList, { ingredients: '' }])
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  return (
    <>
      <h1>Create Recipe</h1>
      <form className="new-recipe-form">
        <label>Recipe Name</label>
        <input
          onChange={handleChange}
          placeholder="Name..."
          value={formState.name}
          type="text"
          id="name"
        />

        <label>Description</label>
        <textarea
          onChange={handleChange}
          placeholder="Description..."
          value={formState.description}
          id="description"
          cole="30"
          rows="10"
        />

        <label>Ingredients</label>

        <button onClick={() => handleAddIngredient()} type="button">
          Add Ingredient
        </button>

        <label>Instruction</label>
        <textarea
          onChange={handleChange}
          placeholder="Instruction..."
          value={formState.description}
          id="instruction"
          cole="30"
          rows="10"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default CreateRecipe
