import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryTotalEnrollment } from 'src/shared/entities/category-total-enrollment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryTotalEnrollmentService {
  constructor(
    @InjectRepository(CategoryTotalEnrollment)
    private repository: Repository<CategoryTotalEnrollment>,
  ) {}

  async increase(categoryId: number) {
    const qb = this.repository
      .createQueryBuilder()
      .insert()
      .into(CategoryTotalEnrollment)
      .values(CategoryTotalEnrollment.of(categoryId));
    qb.expressionMap.onUpdate = {
      columns: 'totalEnrollment = totalEnrollment + 1',
    };
    return qb.execute();
  }
}
