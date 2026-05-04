import { useEmployees } from "./state"

export default function EmployeeList() {

    const employees = useEmployees((state) => state.employees)

    return (
        <div>
            <h2>Список сотрудников</h2>
            {employees.length === 0 && <p>Нет сотрудников</p>}
            {employees.map((emp) => (
                <div key={emp.id} className="emp-item">
                    <span>{emp.name}</span> — <span>{emp.position}</span>
                </div>
            ))}
        </div>
    )
}
