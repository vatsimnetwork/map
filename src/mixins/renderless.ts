import Vue, { VNode } from 'vue';

/*
 * Here we return an empty render function, this allows us to use
 * the Vue lifecycle hooks with our MapComponents. Mapbox GL uses
 * imperative style programming to add layers/images/etc. to the map
 * this is not suitable for Vue's declarative  style. As such, we use
 * this mixin to mount an "empty" (in the DOM) component, to allow us
 * to add layers/images/etc declaratively.
 */

export default Vue.extend({
  render(h): VNode {
    return h();
  },
});
