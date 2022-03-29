export declare class UserRolesModel {
    id: number | undefined;
    name: string | undefined;
    functions: FunctionModel[] | undefined;
    companies: CompanyModel[] | undefined;
    paymentPeriodicity: PaymentPeriodicityModel[] | undefined;
    rfcExcluded: RFCExcludedModel[] | undefined;
}
export declare class FunctionModel {
    id: number | undefined;
    name: string | undefined;
    action: string | undefined;
}
export declare class CompanyModel {
    id: number | undefined;
    cbu: string | undefined;
}
export declare class PaymentPeriodicityModel {
    id: number;
    code: string;
}
export declare class RFCExcludedModel {
    rfcReceptor: string;
}
