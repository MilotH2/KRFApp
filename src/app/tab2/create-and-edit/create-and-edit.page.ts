import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
// import { FileLikeObject, FileUploader } from 'ng2-file-upload';
import { Subject } from 'rxjs';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { ImageServiceService } from 'src/app/shared/services/image-service.service';
import { PublicService } from 'src/app/shared/services/public.service';
import { WebserviceService } from 'src/app/shared/services/webservice.service';

@Component({
  selector: 'app-create-and-edit',
  templateUrl: './create-and-edit.page.html',
  styleUrls: ['./create-and-edit.page.scss'],
})
export class CreateAndEditPage implements OnInit {

  isEdit = false;
  playerDetails: any = null;

  createAndEditPlayerForm: FormGroup;

  selectedProfilePicture = null;
  selectedTransferFormNotificationFile = null;
  selectedWorldRugbyIntClForm = null;

  base64img = null;

  getSelectedFiles = new Subject<any>();

  @ViewChild('slides') slides: IonSlides;

  // public fileUploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private webService: WebserviceService,
    private alerts: AlertsService,
    public imageService: ImageServiceService,
    public publicService: PublicService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.isEdit = true;
           let navParams = this.router.getCurrentNavigation().extras.state;
           this.playerDetails = navParams.playerDetails;
           console.log(navParams);
      }
    });
   }

  ngOnInit() {
    this.createAndEditPlayerForm = new FormGroup({
      // clubId: new FormControl(this.isEdit ? this.playerDetails.name :'', {
      //   updateOn: 'change',
      //   validators: [Validators.required]
      // }),
      firstName: new FormControl(this.isEdit ? this.playerDetails.firstName :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      middleName: new FormControl(this.isEdit ? this.playerDetails.middleName :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      lastName: new FormControl(this.isEdit ? this.playerDetails.lastName :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      ageGroup: new FormControl(this.isEdit ? this.playerDetails.ageGroup.toString() :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      birthTown: new FormControl(this.isEdit ? this.playerDetails.birthTown :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      birthCountry: new FormControl(this.isEdit ? this.playerDetails.birthCountry :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      nationality: new FormControl(this.isEdit ? this.playerDetails.nationality :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      city: new FormControl(this.isEdit ? this.playerDetails.city :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      country: new FormControl(this.isEdit ? this.playerDetails.country :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      postalCode: new FormControl(this.isEdit ? this.playerDetails.postalCode :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      streetAddress: new FormControl(this.isEdit ? this.playerDetails.streetAddress :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      address: new FormControl(this.isEdit ? this.playerDetails.address :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      birthDate: new FormControl(this.isEdit ? this.playerDetails.birthDate :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      phoneNumber: new FormControl(this.isEdit ? this.playerDetails.phoneNumber :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      personalNumber: new FormControl(this.isEdit ? this.playerDetails.personalNumber :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      playingPosition: new FormControl(this.isEdit ? this.playerDetails.playingPosition :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      canRepresanteKosovo: new FormControl(this.isEdit ? this.playerDetails.canRepresanteKosovo : false, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      isPlayerCommingFromTheJuridictionOfAnOtherUnion: new FormControl(this.isEdit ? this.playerDetails.isPlayerCommingFromTheJuridictionOfAnOtherUnion : false, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      previousClubName: new FormControl(this.isEdit ? this.playerDetails.previousClubName :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      previousClubUnion: new FormControl(this.isEdit ? this.playerDetails.previousClubUnion :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      previousClubRegistered: new FormControl(this.isEdit ? this.playerDetails.previousClubRegistered  :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      previousClubLeavingDate: new FormControl(this.isEdit ? this.playerDetails.previousClubLeavingDate :'', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      // transferFormNotification: new FormControl(this.isEdit ? '' :'', {
      //   updateOn: 'change',
      //   validators: [Validators.required]
      // }),
      // worldRugbyInternationalClearenceForm: new FormControl(this.isEdit ? '' :'', {
      //   updateOn: 'change',
      //   validators: [Validators.required]
      // }),
      // transferFormNotification: new FormGroup({
      //   position: new FormControl(this.isEdit ? '' :'', {
      //     updateOn: 'change',
      //     validators: [Validators.required]
      //   }),
      //   readTimeout: new FormControl(this.isEdit ? '' :'', {
      //     updateOn: 'change',
      //     validators: [Validators.required]
      //   }),
      //   writeTimeout: new FormControl(this.isEdit ? '' :'', {
      //     updateOn: 'change',
      //     validators: [Validators.required]
      //   }),
      // }),
      // worldRugbyInternationalClearenceForm: new FormGroup({
      //   position: new FormControl(this.isEdit ? '' :'', {
      //     updateOn: 'change',
      //     validators: [Validators.required]
      //   }),
      //   readTimeout: new FormControl(this.isEdit ? '' :'', {
      //     updateOn: 'change',
      //     validators: [Validators.required]
      //   }),
      //   writeTimeout: new FormControl(this.isEdit ? '' :'', {
      //     updateOn: 'change',
      //     validators: [Validators.required]
      //   }),
      // }),
      playerDeclarationSigned: new FormControl(this.isEdit ? this.playerDetails.playerDeclarationSigned : false, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      playerSignedDeclaration: new FormControl(this.isEdit ? this.playerDetails.playerSignedDeclaration : '', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      allowKRFToUsePersonalData: new FormControl(this.isEdit ? this.playerDetails.allowKRFToUsePersonalData : false, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      canKRFUseData: new FormControl(this.isEdit ? this.playerDetails.canKRFUseData : false, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
    });
  }

  
  // fileOverBase(event): void {
  //   this.hasBaseDropZoneOver = event;
  //   this.selectedFileddd('1');
  // }

  // getFiles(): FileLikeObject[] {
  //   return this.fileUploader.queue.map((fileItem) => {
  //     return fileItem.file;

  //   });
  // }


  // async selectedFileddd($event) {
  //   console.log(this.getFiles());
  //   let files = this.getFiles();
  //   let compressSizeTotal = 0
  //   for (const file of files) {
  //     let compressedFile = await this.imageService.compressImageSize(file.rawFile);
  //     console.log(compressSizeTotal += compressedFile.compressSize);
  //     this.imageService.photos.push({
  //       fileName: file.name,
  //       webviewPath: await this.fileToBase(file.rawFile),
  //       fileBlob: undefined,
  //       fileFile: compressedFile.data,
  //       from: 'ng2'
  //     })
  //     }
     
  // }

  async fileSelector(type, event) {
    console.log({type, event})
    let ab = await this.getBase64(event.target.files[0])
    console.log(ab);
    if (type == 1) {
      this.selectedProfilePicture = {selectedFile: event.target.files[0], base64: ab}
      
    } else if (type == 2) {
      this.selectedTransferFormNotificationFile = {selectedFile: event.target.files[0], base64: ab}
      
    } else if (type == 3) {
      this.selectedWorldRugbyIntClForm = {selectedFile: event.target.files[0], base64: ab}
      
    }

  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  async fileToBase(file) {
    return await this.getBase64(file).then(
      (data) => {return data}
    );
  }



  submitForm(){
    const linku = 'players';
    if (this.createAndEditPlayerForm.invalid) {
      this.createAndEditPlayerForm.markAllAsTouched();
      return;
    }
    this.alerts.presentLoadingController();
    this.isEdit ? this.createAndEditPlayerForm.value['playerId'] = this.playerDetails.id : '';
    this.createAndEditPlayerForm.value.ageGroup = +this.createAndEditPlayerForm.value.ageGroup;
    this.webService.calling_Post_From_Api(linku, this.createAndEditPlayerForm.value).then((data: any) => {
      console.log(data);
      if (data.status) {
        this.alerts.presentToast('Player created successfully!', 'success');
        // this.createAndEditPlayerForm.reset();
        // this.router.navigateByUrl('tabs/tab2');
        this.isEdit = true;
      } else {
        this.alerts.presentToast('Something happend, please try again later!', 'danger');
      }
      this.alerts.dismissLoadingController();
    }).catch((err: any) => {
      this.alerts.dismissLoadingController();
      console.log(err);
    });
  }



    uploadFile(type) {
        const linku = 'players/uploadfiles';
        let parametrat = {};
        let formData = new FormData();
        formData.append('PlayerId', this.playerDetails.id)
        if (type == 1) {
          formData.append('ProfilePicture', this.selectedProfilePicture.selectedFile);

        }

        if (type == 2) {
          formData.append('TransferFormNotification', this.selectedTransferFormNotificationFile.selectedFile);

        }
        
        if (type == 3) {
          formData.append('WorldRugbyInternationalClearenceForm', this.selectedWorldRugbyIntClForm.selectedFile);
        }
          
        this.webService.calling_Post_From_Api(linku, formData, true).then((data: any) => {
          console.log(data);
        }).catch((err: any) => {
          console.log(err);
        });
      }

}
