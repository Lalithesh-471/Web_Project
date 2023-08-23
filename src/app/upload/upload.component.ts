import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  imageName: any;
  name:string="";
  type:string="";
  price:string="";
  Quantity:string="";
  occation:string="";
  avalability:string="";


  constructor(private http:HttpClient){}
  ngOnInit(){
    this.selectedFile={} as any;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("Name",this.name);
       uploadImageData.append("type",this.type);
       uploadImageData.append("price",this.price);
    uploadImageData.append("Quantity",this.Quantity);
    uploadImageData.append("occation",this.occation);
    uploadImageData.append("avalability",this.avalability);
    
    

    let res =this.http.post("http://localhost:1234/chocolate/add",uploadImageData,
    {responseType:'text' as 'json'});
    res.subscribe(
      data=>{
        this.resMessage = data;
        console.log(data);
        this.name="";      
        this.type="";
        this.price="";      
        this.Quantity="";
        this.occation="";
        this.avalability="";
        
      }
    );

  }

}