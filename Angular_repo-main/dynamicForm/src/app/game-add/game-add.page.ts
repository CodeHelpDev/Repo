// import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


// declare var Sortable: any;
// declare var jQuery: any;
// declare var Tagify: any;

// @Component({
//   selector: 'app-game-add',
//   templateUrl: './game-add.page.html',
//   styleUrls: ['./game-add.page.scss'],
// })
// export class GameAddPage implements OnInit {
//   draggable = {
//     data: "myDragData",
//     effectAllowed: "all",
//     disable: false,
//     handle: false
//   };
//   gameForm!: FormGroup;
//   scenarioForm!: FormGroup;
//   type: any = 'game';
//   user: any;
//   params: any;
//   ready: boolean = false;
//   teams: any = [];
//   capabilities: any = ['Pizza'];
//   capability_count: number = 0;
//   is_scenario: boolean = false;
//   time = new Date().toISOString();
//   multiple_choice = ['A', 'B', 'C', 'D'];
//   question_count: any = 1;
//   scenrios: any = [];
//   file_name1: any = new Date().getTime()
//   file_name2: any = new Date().getTime()
//   items = [];
//   game_details: any;
//   index: any;
//   item: any = [];
//   isFocus: boolean = false;
//   constructor(
//     private router: Router,
//     public route: ActivatedRoute,
//     public fb: FormBuilder,
//     public cd: ChangeDetectorRef
//   ) {
//     // this.add_scenarios();
//   }

//   ngOnInit() {
//     this.gameForm = this.fb.group({
//       'game_name': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),
//       'team_id': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),
//       'description': new FormControl('', Validators.compose([
//         // Validators.required,
//       ])),
//       'score_type': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),
//       'capabilities_id': new FormControl(this.items, Validators.compose([
//         Validators.required,
//       ])),
//     });

//     this.scenarioForm = this.fb.group({
//       'scenarios_title': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),
//       'scenario_description': new FormControl(''),
//       'scenarios_time': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),
//       'vignettes': this.fb.array([
//         this.vignette_form('')
//       ])
//     })
//   }

//   vignette_form(val: any): FormGroup {
//     return this.fb.group({
//       'vignette_name': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),
//       'vignette_time': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),
//       'vignette_breif': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),
//       'questions': this.fb.array([
//         this.question_form()
//       ])
//     })
//   }

//   question_form(): FormGroup {
//     return this.fb.group({
//       'answer_format': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),
//       'data_visual': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),
//       'scroing_rubric': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),

//       'question': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),
//       'is_point': new FormControl('1', Validators.compose([
//         Validators.required,
//       ])),
//       'selected_capabilities': new FormControl('', Validators.compose([
//         Validators.required,
//       ])),
//       'is_money': new FormControl('1', Validators.compose([
//         Validators.required,
//       ])),
//       'answers': this.fb.array([]),
//       // // 'is_condition': new FormControl('', Validators.compose([
//       // //   Validators.required,
//       // // ])),
//       // // 'reveal_question': new FormControl('', Validators.compose([
//       // //   Validators.required,
//       // // ])),
//       // // 'reveal_answer': new FormControl('', Validators.compose([
//       // //   Validators.required,
//       // // ])),
//     })
//   }

//   get vignetteForm(): FormArray {
//     return this.scenarioForm.get('vignette') as FormArray;
//   }

//   get questionForm(): FormArray {
//     return (<FormArray>this.scenarioForm.get('vignette')).get('questions') as FormArray;
//   }

//   addVignette(): void {
//     (<FormArray>this.scenarioForm.controls['vignettes']).push(this.vignette_form(''));
//     this.imagePreview();
//   }


//   get answerForm() {
//     return (this.questionForm.get('answerrs') as FormGroup).controls;
//   }

  
//   imagePreview() {
//     var self = this;
//     var counter = (<FormArray>this.scenarioForm.controls['vignettes']).controls.length;
//     setTimeout(function () {
//       jQuery(".scenario-" + self.scenrios.length).fileUpload({
//         multiple: true,
//         extensions: 'image/*,video/*,.pdf',
//         name: 'scenario-' + self.scenrios.length
//       });
//       jQuery(".vignette-" + counter).fileUpload({
//         multiple: true,
//         extensions: 'image/*,video/*,.pdf',
//         name: "vignette-" + counter
//       });
//     }, 500);
//   }

//   ionViewWillEnter() {
    
//   }

//   get_teams() {
//   }

//   get_capabilities() {
    
//   }


//   get_game_details() {
//   }



  
//   add_scenarios() {
//     this.is_scenario = !this.is_scenario;
//     var self = this;
//     this.index = null;
//     this.imagePreview();
//     this.scenarioForm.reset()
//   }

//   edit_scenrio(i:any) {}

//   delete_scenrio(i: any) {
//     this.scenrios.splice(i, 1);
//   }

//   choices(i: any, j: any) {
    
//   }


//   submitForm(value: any) {
    
//   }

//   submit(value: any) {
    
//   }

//   check_timer(event:any) {
//     const validHHMMstring = (str:any) => /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(event?.target?.value);
//     if (!validHHMMstring(event?.target?.value)) {
//       event.target.value = '';
//     }
//     return event?.target?.value;
//   }
// }

// // https://yaireo.github.io/tagify/
// // https://www.npmjs.com/package/ngx-drag-drop
// // https://www.npmjs.com/package/ngx-chips
// // https://stackblitz.com/edit/angular-nested-dynamic-reactive-forms