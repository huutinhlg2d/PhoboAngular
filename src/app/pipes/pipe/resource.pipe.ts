import { Pipe, PipeTransform } from '@angular/core';
import { ResourceHepler } from 'src/app/services/helpers/resource-hepler.service';

@Pipe({
  name: 'resource'
})
export class ResourcePipe implements PipeTransform {
  constructor(
    private resource: ResourceHepler
  ) {
    
  }

  transform(value: string | undefined, ...args: unknown[]): string {
    if(value == undefined) return "";
    return this.resource.getResoucePath(value as string);
  }

}
