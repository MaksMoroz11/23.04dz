import './App.css'
import { usePage } from './employees/state'
import EmployeeList from './employees/EmployeeList'
import Editor from './employees/Editor'

export default function App() {
  const page = usePage((state) => state.page)
  const setPage = usePage((state) => state.setPage)

  return (
    <div className="app">
      <nav>
        <button onClick={() => setPage("list")}>Список сотрудников</button>
        <button onClick={() => setPage("editor")}>Редактор</button>
      </nav>
      <main>
        {page === "list" && <EmployeeList />}
        {page === "editor" && <Editor />}
      </main>
    </div>
  )
}
