import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map, tap } from 'rxjs';
import { IconsConfig } from 'src/app/shared/models/icons.model';
import { IColumn, IProduct } from 'src/app/modules/list-view/models/products.model';
@Injectable({
  providedIn: CoreModule
})
export class ConfigService {

  constructor(private httpClient: HttpClient) {

  }

  getIconsConfig$(): Observable<{ icons: IconsConfig[], message: string }> {
    return this.httpClient.get<{ icons: IconsConfig[], message: string }>(environment.iconsConfig)
  }

}
