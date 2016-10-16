import 'skatejs-web-components';
import * as skate from 'skatejs';
import FreeStyle from 'free-style';
import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';

const Style = FreeStyle.create();
const prefixer = postcssJs.sync([
  autoprefixer
]);

// Register a new style, returning a class name to use.
var CardsStyle = Style.registerStyle(prefixer({
  padding: 8,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  width: '100vw',
  boxSizing: 'border-box'
}));

Style.registerRule('slot', prefixer({
  flex: '0 0 33.3%'
}));

skate.define('x-cards', {
  render(elem) {
    // By separating the strings (and not using template literals or string
    // concatenation) it ensures the strings are diffed indepenedently. If
    // you select "Count" with your mouse, it will not deselect whenr endered.
    return [
      skate.h('style', Style.getStyles()),
      skate.h('div', {class: CardsStyle}, skate.h('slot'))
    ];
  }
});
