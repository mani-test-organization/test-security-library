import { TokenDTO } from "./token-interface";
export interface ResponseApiDTO {
    message: string;
    content: ContentDTO;
}
export interface ContentDTO {
    token: TokenDTO;
}
