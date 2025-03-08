import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expense } from './entities/expense.entity';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  findAll(): Promise<Expense[]> {
    return this.expensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Expense | null> {
    return this.expensesService.findOne(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.expensesService.remove(Number(id));
  }
}
