import {environment} from '../../environments/environment'

export const AppConstant = {

    API_BASE_URL:{
        enrollee : `${environment.API_BASE_URL}`,
    }, 
    HttpStatus:{
                Success: 200,
                InvalidCredential: 203,
                BadRequest: 400,
                Unauthorized: 401,
                Forbidden: 403,
                NotFound: 404,
                MethodNotAllowed: 405,
                RequestTimeout: 408,
                Conflict: 409,
                LengthRequired: 411,
                InvalidToken: 498,
                TokenRequired: 499,
                ServerError: 500,
                ExpireToken: 401,
                InvalidAccessToken: 417,
                InvalidRefreshToken: 410
    } 
}