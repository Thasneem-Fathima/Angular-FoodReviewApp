import { Component } from '@angular/core';
import { DataStorageService } from '../shared/dataStorage.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html'
})
export class PdfGeneratorComponent {

  constructor(private dataStorageService:DataStorageService){}

  generatePDF() {
    this.dataStorageService.onpdf();
  }
}
