import { wrapMethod } from '../proxy';

// wrapMethod(Node.prototype, 'appendChild'); This cause too much noise during document startup
wrapMethod(Node.prototype, 'removeCHild');
