import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './entities/expense.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private expensesRepository: Repository<Expense>,
  ) {}

  findAll(): Promise<Expense[]> {
    return this.expensesRepository.find();
  }

  async findOne(id: number): Promise<Expense | null> {
    return this.expensesRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.expensesRepository.delete(id);
  }
}
