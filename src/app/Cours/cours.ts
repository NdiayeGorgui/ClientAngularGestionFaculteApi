import { Enseignant } from "../Enseignant/enseignant";
import { Formation } from "../Formation/formation";
import { TypeCours } from "./type-cours";

export class Cours {

    id!: number;
    nbeHeure!: Number;
    libelle!:string;
    enseignantid!: number; 
    typecourid!: number; 
    enseignant!:Enseignant;
    typecour!:TypeCours;
    cours!:Formation[];
}
