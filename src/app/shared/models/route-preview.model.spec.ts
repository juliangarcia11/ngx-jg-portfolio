import { RoutePreview } from './route-preview.model';
import { PreviewRoutes } from '../../app-routes';

describe('RoutePreview', () => {
  it('should create an instance', () => {
    expect(new RoutePreview(PreviewRoutes[0])).toBeTruthy();
  });

  it('should have title parameter', () => {
    expect(new RoutePreview(PreviewRoutes[0]).title).toBeTruthy();
  });

  it('should have subtitle parameter', () => {
    expect(new RoutePreview(PreviewRoutes[0]).subtitle).toBeTruthy();
  });

  it('should have path parameter', () => {
    expect(new RoutePreview(PreviewRoutes[0]).path).toBeTruthy();
  });

  it('should have showPreview parameter', () => {
    expect(new RoutePreview(PreviewRoutes[0]).showPreview).toBeTruthy();
  });

  it('should have icon parameter', () => {
    expect(new RoutePreview(PreviewRoutes[0]).icon).toBeTruthy();
  });

  it('should have errorTitle parameter', () => {
    expect(new RoutePreview(PreviewRoutes[0]).errorTitle).toBeTruthy();
  });
});
