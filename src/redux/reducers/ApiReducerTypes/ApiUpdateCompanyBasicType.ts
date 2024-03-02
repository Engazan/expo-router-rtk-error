type ApiUpdateCompanyBasicType = {
    default: boolean
    name: string

    state: string
    street: string
    street_extra?: string
    zip: string
    city: string

    tax_type: string,
    identification_number: string // ico
    vat_identification_number: string // dic
    vat_identification_number_sk: string | null // icdph

    registry_info: string | null

    contact_name: string
    contact_phone: string
    contact_email: string
    contact_web: string | null
}

export default ApiUpdateCompanyBasicType;
