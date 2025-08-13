import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe, UpperCasePipe } from '@angular/common';

const client1 = { name: 'Jorge', gender: 'male', age: 36, address: 'Santiago, Chile' };
const client2 = { name: 'Melissa', gender: 'female', age: 33, address: 'Renca, Chile' };

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18n Select
  public client = signal(client1);
  public invitationMap = { male: 'invitarlo', female: 'invitarla' };

  public changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18n Plural
  public clients = signal(['Jorge', 'Carmen', 'Maria', 'Fernando', 'Melissa', 'Natalia', 'Juan', 'Carlos']);
  public clientsMap = { '=0': 'no tenemos ningún cliente esperando', '=1': 'tenemos un cliente esperando', other: 'tenemos # clientes esperando'};

  public deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

}
