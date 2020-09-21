import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

console.log = function() {};
console.warn = function() {};
console.table = function() {};
console.error = function() {};

configure({ adapter: new Adapter() });
