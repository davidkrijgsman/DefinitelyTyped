import callBind = require('es-abstract/helpers/callBind');
import { apply as applyBind } from 'es-abstract/helpers/callBind';

declare const any: unknown;

callBind(() => {}); // $ExpectType (thisArg: unknown) => void
callBind(Object.prototype.hasOwnProperty); // $ExpectType (thisArg: unknown, v: string | number | symbol) => boolean
callBind(Object.prototype.hasOwnProperty, any); // $ExpectType (v: string | number | symbol) => boolean

applyBind(() => {}); // $ExpectType (thisArg: unknown, args: readonly []) => void
applyBind(Object.prototype.hasOwnProperty); // $ExpectType (thisArg: unknown, args: readonly [string | number | symbol]) => boolean
applyBind(Object.prototype.hasOwnProperty, any); // $ExpectType (args: readonly [string | number | symbol]) => boolean
