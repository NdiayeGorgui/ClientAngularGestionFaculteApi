import { Enseignant } from "../Enseignant/enseignant";
import { TypeCours } from "./type-cours";

export class Cours {

    id!: number;
    nbeHeure!: Number;
    libelle!:string;
    enseignantId!: number;
    typecourId!: number;
    enseignant!:Enseignant;
    typecour!:TypeCours;
}
