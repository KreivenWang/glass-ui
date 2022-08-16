import VanillaTilt from '../3rd-party/vanilla-tilt.min.js';
import { IanTest } from './test.js';

VanillaTilt.init(document.querySelectorAll('.gls-card'), {
  max: 5,
  speed: 100,
  glare: true,
  'max-glare': 0.2
});

new IanTest().hi();
