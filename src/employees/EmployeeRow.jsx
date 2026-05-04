import { useState } from "react"
import { useEmployees } from "./state"

export default function EmployeeRow({ employee }) {

    const [editing, setEditing] = useState(false)
    const [name, setName] = useState(employee.name)
    const [position, setPosition] = useState(employee.position)

    const removeEmployee = useEmployees((state) => state.removeEmployee)
    const updateEmployee = useEmployees((state) => state.updateEmployee)

    const handleSave = () => {
        updateEmployee(employee.id, { name, position })
        setEditing(false)
    }

    return (
        <div className="emp-row">
            {editing ? (
                <span>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
                    <button onClick={handleSave}>Сохранить</button>
                </span>
            ) : (
                <span onClick={() => setEditing(true)} className="emp-name">
                    {employee.name} — {employee.position}
                </span>
            )}
            <button onClick={() => removeEmployee(employee.id)}>Удалить</button>
        </div>
    )
}
