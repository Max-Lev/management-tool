import { Component, Input } from '@angular/core';
import { Observable, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { ConfigService } from 'src/app/core/providers/config.service';
import { IconsConfig } from '../../models/icons.model';
import { Action, Store } from '@ngrx/store';
import { ADD_MODE_ACTION, MODE_TYPE_ENUM } from 'src/app/store/mode/actions/mode.actions';

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
    console.log(svg);
    console.log(this.store);
    this.store.dispatch<Action>(ADD_MODE_ACTION({ payload: { modeType: MODE_TYPE_ENUM.ADD } }));
  }

}
