import { ResaAutoDirective } from './resa-auto.directive';

describe('ResaAutoDirective', () => {
  it('should create an instance', () => {
    const directive = new ResaAutoDirective(private element: ElementRef, private render : Renderer2);
    expect(directive).toBeTruthy();
  });
});
