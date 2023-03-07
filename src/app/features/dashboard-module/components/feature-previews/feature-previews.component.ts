import {
  Component,
  Input
} from '@angular/core';
import { RoutePreview } from '../../../../shared/models/route-preview.model';

@Component({
  selector: 'app-feature-previews',
  templateUrl: './feature-previews.component.html',
  styleUrls: ['./feature-previews.component.scss']
})
export class FeaturePreviewsComponent {

  @Input()
  features: RoutePreview[] = [];

}
