import { ElementRef, Input, Pipe, PipeTransform, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform   {
  @Input("appHighlight") searchText!: string;
  content!: string;
  constructor(private sanitizer: DomSanitizer,
    public el:ElementRef
  ) {}
  public transform(val:any) {

    

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.el?.nativeElement) {
      if ('searchText' in changes) {
        const text:any = (this.el.nativeElement as HTMLElement).textContent;
        // console.log(this.searchText);
        console.log(text);
        if (this.searchText === '') {
          this.content = text;
        }else{
          let regex = new RegExp(this.searchText,"gi");
          const newText = text.replace(regex,(match:any)=>{
            return `<mark class="text-highlight">${match}</mark>`
          })
          this.content = newText
        }
      }
    }
  }
}
