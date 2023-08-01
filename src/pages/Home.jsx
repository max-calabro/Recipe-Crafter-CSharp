import {useNavigate } from "react-router"
import { useState, useEffect } from "react"
import ViewRecipes from "../components/ViewRecipes"
import CreateRecipe from "../components/CreateRecipe"

const Home = () => {
  let navigate = useNavigate()

  const [componentName, setComponentName] = useState('')

  const renderComponent = (componentName) => {
    setComponentName(componentName)
  }

  useEffect(() => {
    renderComponent('home')
  }, [])

  return (
    <>
      <div>
        {componentName === 'home' ? (
          <div>
            <h1>Home</h1>
            <div>
              <button onClick={() => renderComponent('createRecipe')}>Create Recipe</button>
              <button onClick={() => renderComponent('viewRecipes')}>View All Recipes</button>
            </div>
          </div>
        ) : componentName === 'createRecipe' ? (
            <CreateRecipe setComponentName={setComponentName} />
        ) : componentName === 'viewRecipes' ? (
          <ViewRecipes setComponentName={setComponentName} />
      ) : <div> <h1>Whats here?</h1></div>}
      </div>
    </>
  )
}

export default Home

/*
<div>
        
        ) : componentName === 'createRecipe' ? (
          <section></section>
        ) : componentName === 'allRecipes' ? (
          <section></section>
        )}
      </div>
*/