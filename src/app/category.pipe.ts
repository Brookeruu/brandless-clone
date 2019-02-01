import {Pipe, PipeTransform} from '@angular/core';
import {Item} from './item.model';

@Pipe({
  name: "breakfast",
  pure: false
})

export class CategoryPipe implements PipeTransform {

  transform(input: Item[], desiredCategory){
      var output: Item[] = [];
      if(desiredCategory === 'breakfast') {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category === 'breakfast') {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
    }
  }
}


  // transform(input: Task[], desiredCompleteness) {
  //     var output: Task[] = [];
  //     if(desiredCompleteness === "incompleteTasks") {
  //       for (var i = 0; i < input.length; i++) {
  //         if (input[i].done === false) {
  //           output.push(input[i]);
  //         }
  //       }
  //       return output;
  //     } else if (desiredCompleteness === "completedTasks") {
  //       for (var i = 0; i < input.length; i++) {
  //         if (input[i].done === true) {
  //           output.push(input[i]);
  //         }
  //       }
  //       return output;
  //     } else {
  //       return input;
  //     }
  //   }
