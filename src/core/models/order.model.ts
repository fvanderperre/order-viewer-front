export interface OrderDTO {
    address?: Address
    bookingDate: number
    customer?: Customer
    title: string
    uid?: string
}

export interface Address {
    city?: string
    country?: string
    street?: string
    zip?: string
}

export interface Customer {
    email?: string
    name?: string
    phone?: string
}

export const isOrderValid = ({ address, bookingDate, customer, title, uid }: OrderDTO): boolean =>
    (address != null && address !== '') &&
    (bookingDate != null && bookingDate !== 0) &&
    (customer != null && customer !== '') &&
    (title != null && title !== '') &&
    (uid != null && uid !== '')

export const formatAddress = ({ city, country, street, zip }: Address): string =>
    street + ' ' + zip + ' ' + city + ' ' + country

export const formatCustomer = ({ name, phone, email }: Customer): string =>
    name + ' ' + phone + ' ' + email
