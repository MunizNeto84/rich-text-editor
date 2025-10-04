import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('client');

  editorContent: string = '';

  constructor(private http: HttpClient) {}

  saveContent() {
    console.log('O botão Salvar foi clicado!');
    const apiUrl = '/api/documents';

    const body = { HtmlContent: this.editorContent };

    console.log('enviado para o backend:', body);

    this.http.post(apiUrl, body).subscribe((response) => {
      console.log('resposta do backend:', response);
      alert('Conteúdo salvo com sucesso!');
    });
  }

  format(command: string) {
    document.execCommand(command, false, undefined);
  }
  onContentChange(newContent: string) {
    this.editorContent = newContent;
  }
}
