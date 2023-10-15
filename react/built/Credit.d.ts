import { type ReactElement } from "react";
export interface CreditProps {
    name: string;
    author?: string;
    url: string;
    license?: any;
    licenseUrl?: string;
    info?: any;
}
export declare function Credit({ name, author, url, license, info, licenseUrl, }: CreditProps): ReactElement;
