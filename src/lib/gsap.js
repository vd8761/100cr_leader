/* Central GSAP registration. GSAP 3.13+ ships every plugin free in the
   public npm package, so ScrollSmoother / ScrollTrigger / SplitText all
   import straight from `gsap/*`. */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export { gsap, ScrollTrigger, ScrollSmoother, SplitText };
