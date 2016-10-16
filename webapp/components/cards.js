import 'skatejs-web-components';
import * as skate from 'skatejs';
import FreeStyle from 'free-style';

const Style = FreeStyle.create();

// Register a new style, returning a class name to use.
var CardsStyle = Style.registerStyle({
  padding: 8,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  width: '100vw',
  boxSizing: 'border-box'
});

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
