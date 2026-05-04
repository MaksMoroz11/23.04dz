import { create } from "zustand";

export const useEmployees = create((set) => ({
    employees: [
        { id: 1, name: "Иван Иванов", position: "Разработчик" },
        { id: 2, name: "Мария Петрова", position: "Дизайнер" },
    ],
    addEmployee: (employee) => set((state) => ({
        employees: [...state.employees, employee]
    })),
    removeEmployee: (id) => set((state) => ({
        employees: state.employees.filter((el) => el.id !== id)
    })),
    updateEmployee: (id, data) => set((state) => ({
        employees: state.employees.map((el) => el.id === id ? { ...el, ...data } : el)
    }))
}))

export const usePage = create((set) => ({
    page: "list",
    setPage: (page) => set({ page })
}))
