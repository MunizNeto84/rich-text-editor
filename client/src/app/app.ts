import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('client');

  editorContent: string = '';

  format(command: string) {
    document.execCommand(command, false, undefined);
  }
  onContentChange(newContent: string) {
    this.editorContent = newContent;
  }
}
