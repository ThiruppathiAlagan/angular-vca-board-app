export interface Board {
    title: string
    appointments: Appointment[]
}

export interface Appointment {
    id: string
    title: string
    styleclass: string
    count: number
    dragDisabled: boolean
    allowDrag: boolean
    isAddNewPatientPanel: boolean
    items: Item[]
}

export interface Item {
    appointmentTime: string
    firstName: string
    lastName: string
    patientName: string
    appointmentType: string
}