/* eslint-disable max-len */
import { VueConstructor } from 'vue';

/*
 * This mixin allows us to provide TypeScript support for the Vue provide/inject api.
 * Firstly, create an inject with `makeInjector()`. You must pass the object and type like so:
 * `const collectionPropInjector = makeInjector<{ map: mapboxgl.Map }>();` -example injecting mapbox.gl instance
 * Then when you export the component instance, include the injection:
 * export default collectionPropInjector(Vue, ['map']).extend({ inject: ['map'], });
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const makeInjector = <TProvider>() => <V extends Vue, K extends keyof TProvider>(v: VueConstructor<V>, properties: K[]) => v as VueConstructor<V & Pick<TProvider, K>>;

const makePropertySelector = <TProvider>() => <K extends keyof TProvider>(properties: K[]) => properties;

export {
  makeInjector,
  makePropertySelector,
};
