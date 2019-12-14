import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public readonly REGEX_VALIDACAO_NOME: string = '^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÊÈÍÏÓÔÕÖÚÇÑ ]+$';

  public form: FormGroup;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.iniciarForm();
  }

  validarData(): boolean {
    // tslint:disable-next-line: max-line-length
    const patternData = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2)\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const data: Date = this.form.controls.data.value;
    const dataFormatada: string = data.toLocaleDateString('pt');
    return patternData.test(dataFormatada);
  }

  mostrarInputDados(): boolean {
    return this.form.controls.status.value === true;
  }

  apresentarDados(): boolean {
    return this.form.valid && this.validarData();
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    } else {
      this.submitted = false;
    }
  }

  private iniciarForm(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      idade: ['', Validators.required],
      data: ['', Validators.required],
      sexo: ['', Validators.required],
      areaTexto: ['', Validators.required],
      status: ['']
    });
  }

}
