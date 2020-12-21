export class CurrentUser
{   
    userId: number;
    firstName: string;
    email: string;
    accessToken: string;
    refreshToken: string;
    constructor()
    {
        this.userId =0;
        this.firstName = ''
        this.email = ''
        this.accessToken =''
        this.refreshToken=''
    }
}

