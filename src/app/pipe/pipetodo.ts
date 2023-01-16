import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/Todo';

@Pipe({
    name: 'pipetodo',
  })

  export class pipetodo implements PipeTransform {
    transform(value: Todo[] = [], column: keyof Todo = 'content'): any[] {
        throw new Error('Method not implemented.');
    }

  }