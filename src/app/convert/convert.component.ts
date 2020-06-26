import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ConvertServiceService} from './convert-service.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {HttpClient} from '@angular/common/http';
import {JSONP_ERR_WRONG_RESPONSE_TYPE} from '@angular/common/http/src/jsonp';
import {saveAs} from 'file-saver/dist/FileSaver';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  message: any;
  data: string[];
  private selectedFile: any;
  user: any;
  uploadClicked=true;

  constructor(private router: Router, private convert: ConvertServiceService,
              private tokenStorage: TokenStorageService, private http: HttpClient) {
  }
  ngOnInit() {
    this.user = this.tokenStorage.getUser();
  }

  onUpload() {

    const uploadFileData = new FormData();
    this.uploadClicked=false;
    uploadFileData.append('File', this.selectedFile, this.selectedFile.name);
    this.convert.FileConvert(uploadFileData, this.user.username)
      .subscribe((response) => {
        if (response) {

          this.message = 'File uploaded successfully';
          this.data = response;

        } else {
          this.message = 'File not uploaded successfully';
        }
      });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  // download() {
  //   const uploadFileData = new FormData();
  //   uploadFileData.append('File', this.selectedFile, this.selectedFile.name);
  //   this.convert.FileDownload(uploadFileData, this.user.username).subscribe(response => {
  //     //let blob:any = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
  //     //const url= window.URL.createObjectURL(blob);
  //     //window.open(url);
  //     window.location.href = response._url1;
  //     //fileSaver.saveAs(blob, 'employees.json');
  //   }), error => console.log('Error downloading the file'),
  //     () => console.info('File downloaded successfully');
  // }

  download() {
    this.http.get("http://localhost:8087/fichier/download", {responseType: 'arraybuffer'}).subscribe(res => {
      const blob = new Blob([res],{type: "application/txt"});
      const fileName ='records.txt';
      saveAs(blob, fileName);
      }, () => {
      alert("error");
    });
  }
}
