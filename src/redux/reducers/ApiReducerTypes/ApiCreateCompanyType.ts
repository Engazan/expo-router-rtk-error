type ApiCreateCompanyType = {
    default: boolean,
    name: string,

    state: string,
    street: string,
    street_extra?: string,
    zip: string,
    city: string,

    tax_type: string,
    identification_number: string // ico
    vat_identification_number: string // dic
    vat_identification_number_sk?: string // icdph

    registry_info?: string,

    contact_name: string,
    contact_phone: string,
    contact_email: string,
    contact_web?: string,

    payment_methods?: {
        bank_transfer: {
            name: string,
            code: string,
            iban: string,
            swift: string
        },
        paypal: string,
    },
    template?: {
        template_primary_color: string,
        template_name: string,
        visible_fields: {
            unit: boolean,
            tax: boolean,
            item_sku: boolean,
            item_discount: boolean
        },
        currency: string,
        language: string,
        default: {},
        numbering: {
            invoices: {
                upcoming_number: number,
                format: string
            }
        },
        texts: {}
    },

    logo_base64?: string,
    signature_base64?: string
}

export default ApiCreateCompanyType;
