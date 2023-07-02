import { Component, Input } from '@angular/core';
import { Observable, map, mergeMap, of, switchMap, tap } from 'rxjs';

import { IconsConfig } from '../../models/icons.model';
import { Action, Store } from '@ngrx/store';
import { ADD_MODE_ACTION, LIST_MODE_ACTION, MODE_TYPE_ENUM, TILES_MODE_ACTION } from 'src/app/store/mode/actions/mode.actions';
import { ConfigService } from 'src/app/core/providers/config.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() title: string = '';

  svgIcons$: Observable<IconsConfig[]>;
  svgIcons: IconsConfig[] = [];

  constructor(private configService: ConfigService,
    private store: Store) {

  }

  ngOnInit(): void {

    this.svgIcons$ = this.configService.getIconsConfig$().pipe(map((data: IconsConfig[]) => data));
  }

  modeAction(svg: IconsConfig) {

    switch (svg.action) {
      case MODE_TYPE_ENUM.ADD:
        this.store.dispatch<Action>(ADD_MODE_ACTION({ payload: { modeType: MODE_TYPE_ENUM.ADD } }));
        break;
      case MODE_TYPE_ENUM.LIST:
        this.store.dispatch<Action>(LIST_MODE_ACTION({ payload: { modeType: MODE_TYPE_ENUM.LIST } }));
        break;
      case MODE_TYPE_ENUM.TILES:
        this.store.dispatch<Action>(TILES_MODE_ACTION({ payload: { modeType: MODE_TYPE_ENUM.TILES } }));
        break;
    }

  }

}
