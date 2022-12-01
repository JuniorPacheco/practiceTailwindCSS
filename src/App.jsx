import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <main className='h-[90vh] bg-red-200 flex p-8 gap-8'>
        <Sidebar />
        <div className='bg-green-400 flex-1 h-full overflow-y-auto'>
          Content
        </div>
      </main>
    </div>
  )
}

export default App
