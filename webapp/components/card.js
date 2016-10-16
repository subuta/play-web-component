import 'skatejs-web-components';
import * as skate from 'skatejs';
import FreeStyle from 'free-style';
import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';

const Style = FreeStyle.create();
const prefixer = postcssJs.sync([
  autoprefixer
]);

// Register a new style, to host
Style.registerRule(':host', prefixer({
  flex: '0 0 33.3%'
}));

var CardStyle = Style.registerStyle(prefixer({
  border: '1px solid #ddd',
  margin: 8,
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

skate.define('x-card', {
  render(elem) {
    // By separating the strings (and not using template literals or string
    // concatenation) it ensures the strings are diffed indepenedently. If
    // you select "Count" with your mouse, it will not deselect whenr endered.
    return [
      skate.h('style', Style.getStyles()),
      skate.h('div', {class: CardStyle}, skate.h('slot'))
    ];
  }
});
