type ApiCreateClientType = {
    name: string

    state: string
    street: string
    street_extra?: string
    zip: string
    city: string

    identification_number: string // ico
    vat_identification_number: string // dic
    vat_identification_number_sk?: string // ic dph

    registry_info?: string

    contact_name?: string
    contact_phone?: string
    contact_email?: string
    contact_web?: string
}

export default ApiCreateClientType;
