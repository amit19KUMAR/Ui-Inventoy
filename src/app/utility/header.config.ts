import { HttpHeaders } from '@angular/common/http';

export const GET_HEADER ={

    header : new HttpHeaders({
        'Content-Type' : 'application/json',
    }),

    responseType: 'json' as 'json'
}


export const GET_HEADER_TEXT ={

    header : new HttpHeaders({
        'Content-Type' : 'application/json',
    }),

    responseType: 'text' as 'json'
}