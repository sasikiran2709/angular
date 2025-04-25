import { Component } from '@angular/core';
import { patientgrp } from './patientgrp.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patientgroup',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './patientgroup.component.html',
  styleUrl: './patientgroup.component.css'
})
export class PatientgroupComponent {

  tableClasses: string[] = [
    'table-light',     // for group 0
    'table-success',   // for group 1
    'table-primary',   // for group 2
    'table-warning',   // for group 3
    'table-dark',      // for group 4
    'table-info',      // for group 5
    'table-danger'     // for group 6
  ];
  patientgrp:patientgrp[][]=[];
  
  constructor() {
    const Opve: patientgrp[] = [
      new patientgrp(1, 'varun', 'kumar', 'O+ve', 'fever', 30),
      new patientgrp(2, 'sangeetha', 'kumari', 'O+ve', 'fever', 30)
    ];
  
    const Onve: patientgrp[] = [
      new patientgrp(1, 'akhil', 'kumar', 'O-ve', 'fever', 40),
      new patientgrp(2, 'akhil', 'kumar', 'O-ve', 'fever', 30)
    ];
  
    const Apve: patientgrp[] = [
      new patientgrp(1, 'varun', 'kumar', 'A+ve', 'fever', 50),
      new patientgrp(2, 'varun', 'kumar', 'A+ve', 'fever', 32)
    ];
  
    const Anve: patientgrp[] = [
      new patientgrp(1, 'akhil', 'kumar', 'A-ve', 'fever', 45),
      new patientgrp(2, 'akhil', 'kumar', 'A-ve', 'fever', 33)
    ];
  
    const Bpve: patientgrp[] = [
      new patientgrp(1, 'varun', 'kumar', 'B+ve', 'fever', 30),
      new patientgrp(2, 'varun', 'kumar', 'B+ve', 'no', 30)
    ];
  
    const Bnve: patientgrp[] = [
      new patientgrp(1, 'akhil', 'kumar', 'B-ve', 'fever', 30),
      new patientgrp(2, 'akhil', 'kumar', 'B-ve', 'fever', 35)
    ];
  
    const ABpve: patientgrp[] = [
      new patientgrp(1, 'varun', 'kumar', 'AB+ve', 'fever', 30),
      new patientgrp(2, 'varun', 'kumar', 'AB+ve', 'no', 39)
    ];
  
    const ABnve: patientgrp[] = [
      new patientgrp(1, 'akhil', 'kumar', 'AB-ve', 'fever', 30),
      new patientgrp(2, 'adiya', 'kumar', 'AB-ve', 'viral fever', 30)
    ];
  
    this.patientgrp = [
      Opve, Onve, Apve, Anve, Bpve, Bnve, ABpve, ABnve
    ];
  }
  // constructor(){

  //   let Opve:patientgrp[][]=[[new patientgrp(1,'varun','kumar','O+ve','fever',30),new patientgrp (2,'sangeetha','kumari','O+ve','fever',30)]];
  //   let Onve:patientgrp[][]=[[new patientgrp(1,'akhil','kumar','O-ve','fever',40),new patientgrp(2,'akhil','kumar','O-ve','fever',30)]];
  //   let Apve:patientgrp[][]=[[new patientgrp(1,'varun','kumar','A+ve','fever',50),new patientgrp(2,'varun','kumar','A+ve','fever',32)]];
  //   let Anve:patientgrp[][]=[[new patientgrp(1,'akhil','kumar','A-ve','fever',45),new patientgrp(2,'akhil','kumar','A-ve','fever',33)]];
  //   let Bpve:patientgrp[][]=[[new patientgrp(1,'varun','kumar','B+ve','fever',30),new patientgrp(2,'varun','kumar','B+ve','no',30)]];
  //   let Bnve:patientgrp[][]=[[new patientgrp(1,'akhil','kumar','B-ve','fever',30),new patientgrp(2,'akhil','kumar','B-ve','fever',35)]];
  //   let ABpve:patientgrp[][]=[[new patientgrp(1,'varun','kumar','AB+ve','fever',30),new patientgrp(2,'varun','kumar','AB+ve','no',39)]];
  //   let ABnve:patientgrp[][]=[[new patientgrp(1,'akhil','kumar','AB-ve','fever',30),new patientgrp(2,'adiya','kumar','AB-ve','viral fever',30)]];
  //   this.patientgrp.push(...Opve,...Onve,...Apve,...Anve,...Bpve,...Bnve,...ABpve,...ABnve);
    
      
  // }

}
