import './App.css'
import SignUp from './pages/signupForm/sign-up'
import Toaster from './global/toaster/toaster'
import { useGlobalStore } from './global/store'

const App: React.FC = () => {

  const { toasterData, closeToaster } = useGlobalStore();

  return (
    <>
      <Toaster data={toasterData} close={closeToaster} />
      <SignUp />
    </>
  )
}

export default App

