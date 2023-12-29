import { DtoValidation } from "~/modules/core/decorators";
import { UserValidateGroups } from "../constants";
import { PickType } from '@nestjs/swagger';
import { UserCommonDto } from "./common.dto";


@DtoValidation({ groups: [UserValidateGroups.CREATE] })
export class CreateUserDto extends PickType(UserCommonDto, [
    'username',
    'nickname',
    'password',
    'phone',
    'email',
]) {}