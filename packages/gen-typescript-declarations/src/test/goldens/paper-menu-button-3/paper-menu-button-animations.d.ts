/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-menu-button-animations.js
 */

import {NeonAnimationBehavior} from '@polymer/neon-animation/neon-animation-behavior.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

interface PaperMenuGrowHeightAnimationElement extends NeonAnimationBehavior, LegacyElementMixin, HTMLElement {
  configure(config: any): any;
}

declare global {

  interface HTMLElementTagNameMap {
    "paper-menu-grow-height-animation": PaperMenuGrowHeightAnimationElement;
    "paper-menu-grow-width-animation": PaperMenuGrowWidthAnimationElement;
    "paper-menu-shrink-width-animation": PaperMenuShrinkWidthAnimationElement;
    "paper-menu-shrink-height-animation": PaperMenuShrinkHeightAnimationElement;
  }
}

interface PaperMenuGrowWidthAnimationElement extends NeonAnimationBehavior, LegacyElementMixin, HTMLElement {
  configure(config: any): any;
}

interface PaperMenuShrinkWidthAnimationElement extends NeonAnimationBehavior, LegacyElementMixin, HTMLElement {
  configure(config: any): any;
}

interface PaperMenuShrinkHeightAnimationElement extends NeonAnimationBehavior, LegacyElementMixin, HTMLElement {
  configure(config: any): any;
}
