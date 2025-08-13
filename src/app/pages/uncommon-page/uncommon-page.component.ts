import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

const client1 = { name: 'Jorge', gender: 'male', age: 36, address: 'Santiago, Chile' };
const client2 = { name: 'Melissa', gender: 'female', age: 33, address: 'Renca, Chile' };

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // I18nSelectPipe
  public client = signal(client1);
  public invitationMap = { male: 'invitarlo', female: 'invitarla' };

  public changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // I18nPluralPipe
  public clients = signal(['Jorge', 'Carmen', 'Maria', 'Fernando', 'Melissa', 'Natalia', 'Juan', 'Carlos']);
  public clientsMap = { '=0': 'no tenemos ningún cliente esperando', '=1': 'tenemos un cliente esperando', other: 'tenemos # clientes esperando'};

  public deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  // KeyValuePipe
  public profile = {
    name: 'Jorge',
    age: 36,
    address: 'Santiago, Chile'
  }

}
