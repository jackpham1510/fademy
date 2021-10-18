import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

export class PagingRequest {
  @ApiProperty({ minimum: 1 })
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  page: number;

  @ApiProperty({ minimum: 1 })
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  pageSize: number;

  get offset() {
    return (this.page - 1) * this.pageSize;
  }
}
