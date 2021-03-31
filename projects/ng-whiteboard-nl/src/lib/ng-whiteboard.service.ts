import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgWhiteboardService {
  // Observable string sources
  private eraseSvgMethodCallSource = new Subject<any>();
  private saveSvgMethodCallSource = new Subject<{ name: string; format: 'png' | 'jpeg' | 'svg' }>();
  private undoSvgMethodCallSource = new Subject<any>();
  private redoSvgMethodCallSource = new Subject<any>();
  private addImageMethodCallSource = new Subject<string | ArrayBuffer>();
  private addTextMethodCallSource = new Subject<string>();
  private send2EngageMethodCallSource = new Subject<any>();

  // Observable string streams
  eraseSvgMethodCalled$ = this.eraseSvgMethodCallSource.asObservable();
  saveSvgMethodCalled$ = this.saveSvgMethodCallSource.asObservable();
  undoSvgMethodCalled$ = this.undoSvgMethodCallSource.asObservable();
  redoSvgMethodCalled$ = this.redoSvgMethodCallSource.asObservable();
  addImageMethodCalled$ = this.addImageMethodCallSource.asObservable();
  addTextMethodCalled$ = this.addTextMethodCallSource.asObservable();
  send2EngageMethodCalled$ = this.send2EngageMethodCallSource.asObservable();

  // Service message commands
  public erase(): void {
    this.eraseSvgMethodCallSource.next();
  }
  public save(name: string = 'New image', format: 'png' | 'jpeg' | 'svg' = 'png'): void {
    this.saveSvgMethodCallSource.next({ name, format });
  }
  public undo(): void {
    this.undoSvgMethodCallSource.next();
  }
  public redo(): void {
    this.redoSvgMethodCallSource.next();
  }
  public addImage(image: string | ArrayBuffer): void {
    this.addImageMethodCallSource.next(image);
  }
  public addText(text2add: string): void {
    this.addTextMethodCallSource.next(text2add);
  }
  public send2Engage(): any {
    this.send2EngageMethodCallSource.next();
  }
}
