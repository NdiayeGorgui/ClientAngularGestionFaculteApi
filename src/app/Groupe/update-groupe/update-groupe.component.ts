import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/Formation/formation';
import { FormationService } from 'src/app/Formation/formation.service';
import { Groupe } from '../groupe';
import { GroupeService } from '../groupe.service';

@Component({
  selector: 'app-update-groupe',
  templateUrl: './update-groupe.component.html',
  styleUrls: ['./update-groupe.component.css']
})
export class UpdateGroupeComponent implements OnInit {
  groupeFormgroup!: FormGroup;
  submitted: boolean = false;
  id!: number;
  userName!: string;
  password!: string;
  groupe: Groupe = new Groupe();
  formations: Formation[] = [];
  numeroGroupe!: string;
  formation: Formation = new Formation();
  constructor(private groupeService: GroupeService,
    private route: ActivatedRoute, private router: Router,
    private formationService: FormationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getFormations();
    this.id = this.route.snapshot.params['id'];
    this.groupeService.getGroupeById(this.id).subscribe(data => {

      this.groupeFormgroup = this.fb.group({
    
        nGroupe: [data.numeroGroupe, Validators.required],
        nFormation: [data.formation.nomFormation, Validators.required]

      });
      this.groupe = data;
    }, error => console.log(error)
    );

  }

  private getFormations() {
    this.formationService.getFormationList().subscribe(data => {
      this.formations = data;
      console.log('formation=>' + JSON.stringify(this.formations));
    });
  }
  goToGroupeList() {
    this.router.navigate(['/groupes']);
  }
  onSubmit() {
    this.submitted = true;
    if (this.groupeFormgroup.invalid) return;
    this.groupeService.updateGroupe(this.id, this.groupe).subscribe(data => {
      alert("Modification effectuée avec succés !");
      this.goToGroupeList();
    }, error => console.log(error)

    );
  }

}
