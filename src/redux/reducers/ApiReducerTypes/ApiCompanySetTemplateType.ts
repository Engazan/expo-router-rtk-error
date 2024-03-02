type ApiCompanySetTemplateType = {
    template: 'Sango' | 'Kronos',
    primary_color: string,
    currency: string,
    language: string,
    numbering: {
        upcoming: number,
        format: string,
        due_date_additional_days: number,
    },
    formats: {
        date: string,
        decimal: string,
        thousands: string,
    },
    visibility: {
        due_date: boolean,
        send_date: boolean,
        quantity: boolean,
        payment: boolean,
        qr_payment: boolean,
    },
}


export default ApiCompanySetTemplateType;
