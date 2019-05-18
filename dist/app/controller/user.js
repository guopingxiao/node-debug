"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const midway_1 = require("midway");
let UserController = class UserController {
    async getUser(ctx) {
        const id = ctx.params.id;
        const user = await this.service.getUser({ id });
        ctx.body = { success: true, message: 'OK', data: user };
    }
};
__decorate([
    midway_1.inject('userService'),
    __metadata("design:type", Object)
], UserController.prototype, "service", void 0);
__decorate([
    midway_1.get('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
UserController = __decorate([
    midway_1.provide(),
    midway_1.controller('/user')
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29udHJvbGxlci91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTBEO0FBSzFELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFLekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHO1FBQ2YsTUFBTSxFQUFFLEdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDakMsTUFBTSxJQUFJLEdBQWdCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQzNELEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRixDQUFBO0FBUkM7SUFEQyxlQUFNLENBQUMsYUFBYSxDQUFDOzsrQ0FDQTtBQUd0QjtJQURDLFlBQUcsQ0FBQyxNQUFNLENBQUM7Ozs7NkNBS1g7QUFUVSxjQUFjO0lBRjFCLGdCQUFPLEVBQUU7SUFDVCxtQkFBVSxDQUFDLE9BQU8sQ0FBQztHQUNQLGNBQWMsQ0FVMUI7QUFWWSx3Q0FBYyJ9