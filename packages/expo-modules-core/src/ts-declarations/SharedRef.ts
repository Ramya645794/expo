import type { EventsMap } from './EventEmitter';
import type { SharedObject } from './SharedObject';

/**
 * A {@link SharedObject} that holds a reference to any native object. Allows passing references
 * to native instances among different independent libraries.
 */
export declare class SharedRef<
    TNativeRefType extends string = 'unknown',
    TEventsMap extends EventsMap = Record<never, never>,
  >
  extends SharedObject<TEventsMap>
  implements SharedObject<TEventsMap>
{
  /**
   * A dummy private property with the given generic type. It is required for TypeScript to correctly infer this subtype.
   * @private
   * @deprecated
   */
  _TNativeRefType_DONT_USE_IT?: TNativeRefType;

  /**
   * The type of the native reference.
   */
  nativeRefType: string;
}
