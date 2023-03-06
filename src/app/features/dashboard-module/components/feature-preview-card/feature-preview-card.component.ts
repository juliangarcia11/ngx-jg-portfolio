import {
  Component,
  Input
} from '@angular/core';
import { RoutePreview } from '../../../../shared/models/route-preview.model';

@Component({
  selector: 'app-feature-preview-card',
  templateUrl: './feature-preview-card.component.html',
  styleUrls: ['./feature-preview-card.component.scss']
})
export class FeaturePreviewCardComponent {

  @Input()
  feature!: RoutePreview;

}
