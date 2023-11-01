import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent  {
    produits :Produit[];
    constructor(private produitService: ProduitService) {
      this.produits = produitService.listeProduit() ;
      }
    supprimerProduit(prod: Produit)
    {
      //console.log(prod);
      let conf = confirm("Etes-vous sûr ?");
      if(conf)
      this.produitService.supprimerProduit(prod);
    }
      
}
