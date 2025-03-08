import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reminder } from './entities/reminder.entity';

@Injectable()
export class RemindersService {
  constructor(
    @InjectRepository(Reminder)
    private remindersRepository: Repository<Reminder>,
  ) {}

  findAll(): Promise<Reminder[]> {
    return this.remindersRepository.find();
  }

  async findOne(id: number): Promise<Reminder | null> {
    return this.remindersRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.remindersRepository.delete(id);
  }
}
