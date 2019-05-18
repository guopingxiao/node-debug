import { IUserService } from '../../interface';
export declare class UserController {
    service: IUserService;
    getUser(ctx: any): Promise<void>;
}
