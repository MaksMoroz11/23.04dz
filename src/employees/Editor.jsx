import { useState } from "react"
import { useEmployees } from "./state"
import EmployeeRow from "./EmployeeRow"

export default function Editor() {

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")

    const employees = useEmployees((state) => state.employees)
    const addEmployee = useEmployees((state) => state.addEmployee)

    const handleAdd = () => {
        if (!name || !position) return
        addEmployee({ id: Date.now(), name, position })
        setName("")
        setPosition("")
    }

    return (
        <div>
            <h2>Редактор</h2>
            <div className="editor-form">
                <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Должность" value={position} onChange={(e) => setPosition(e.target.value)} />
                <button onClick={handleAdd}>Добавить</button>
            </div>
            <div>
                {employees.map((emp) => (
                    <EmployeeRow key={emp.id} employee={emp} />
                ))}
            </div>
        </div>
    )
}
