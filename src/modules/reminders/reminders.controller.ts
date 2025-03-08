import { Controller, Get, Param, Delete } from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { Reminder } from './entities/reminder.entity';

@Controller('reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Get()
  findAll(): Promise<Reminder[]> {
    return this.remindersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Reminder | null> {
    return this.remindersService.findOne(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.remindersService.remove(Number(id));
  }
}
