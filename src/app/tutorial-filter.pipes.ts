import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
// import { tutorial } from '../models/tutorial.model';

// export class TutorialFilterpipes implement pipeTransform{
//         transform(tutorial:Tutorial[] ,searchTerm:string): Tutorial[]{

//             if (!tutorial || !searchTerm) {
//                 return tutorial;
//             }
//             return tutorial.filter(tutorial => 
//                 tutorial.name.tolowercase().index(searchTerm.toLowerCase()) ! ==1);

//          }
  
// }