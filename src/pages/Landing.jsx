import { useNavigate } from "react-router"
const Landing = () => {
  let navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('home')
    navigate('/home')
  }
  return (
    <>
      <main className="landing-page">
        <h1>Hello User</h1>
        <form className="login-body" onSubmit={onSubmit}>
          <button className="submit" type="submit">Enter Site</button>
        </form>
      </main>
      
    </>
  )
}

export default Landing