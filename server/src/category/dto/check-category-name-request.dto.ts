import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CheckCategoryNameRequest {
  @ApiProperty()
  @IsString()
  @Length(2, 255)
  name: string;
}