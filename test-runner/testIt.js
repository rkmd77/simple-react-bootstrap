'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _srcButtonDropdown = require('../src/ButtonDropdown');

var _srcButtonDropdown2 = _interopRequireDefault(_srcButtonDropdown);

(0, _reactDom.render)(_react2['default'].createElement(
    'div',
    { style: { paddingLeft: 30 } },
    _react2['default'].createElement(
        _srcButtonDropdown2['default'],
        null,
        _react2['default'].createElement(
            'button',
            { className: 'btn btn-default' },
            'Out of the box'
        ),
        _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'h1',
                null,
                'Hello'
            )
        )
    ),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement(
        _srcButtonDropdown2['default'],
        { style: { width: '400px', backgroundColor: 'red' } },
        _react2['default'].createElement(
            'button',
            { className: 'btn btn-default' },
            'Out of the box styling'
        ),
        _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'h1',
                null,
                'Hello'
            )
        )
    ),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement(
        _srcButtonDropdown2['default'],
        null,
        _react2['default'].createElement(
            'button',
            { onClick: function () {
                    return console.log('HELLO WORLD on toggle item');
                }, className: 'btn btn-default' },
            'click handler on toggle button respected'
        ),
        _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'h1',
                null,
                'Hello'
            )
        )
    ),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement(
        _srcButtonDropdown2['default'],
        { containerElementType: 'span' },
        _react2['default'].createElement(
            'button',
            { className: 'btn btn-default' },
            'Use a span'
        ),
        _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'h1',
                null,
                'Hello'
            )
        )
    ),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement(
        _srcButtonDropdown2['default'],
        null,
        _react2['default'].createElement(
            'button',
            { className: 'btn btn-default' },
            _react2['default'].createElement(
                'h4',
                null,
                'Some styling'
            ),
            _react2['default'].createElement('i', { className: 'fa fa-fw fa-tag' })
        ),
        _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(
                        'h1',
                        null,
                        'Hello'
                    )
                )
            ),
            _react2['default'].createElement(
                'h1',
                null,
                'World'
            )
        )
    ),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement(
        _srcButtonDropdown2['default'],
        { ignoreContentClick: true },
        _react2['default'].createElement(
            'button',
            { className: 'btn btn-default' },
            'Menu doesn\'t cause dropdown to close'
        ),
        _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(
                        'h1',
                        null,
                        'Hello'
                    )
                )
            ),
            _react2['default'].createElement(
                'h1',
                null,
                'World'
            )
        )
    ),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement(
        _srcButtonDropdown2['default'],
        { deferDropdownRendering: true, ignoreContentClick: true },
        _react2['default'].createElement(
            'button',
            { className: 'btn btn-default' },
            'Dropdown on demand'
        ),
        _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(
                        'h1',
                        null,
                        'Hello'
                    )
                )
            ),
            _react2['default'].createElement(
                'h1',
                null,
                'World'
            )
        )
    ),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement(
        _srcButtonDropdown2['default'],
        null,
        _react2['default'].createElement('i', { className: 'fa fa-tag' }),
        _react2['default'].createElement(
            'span',
            null,
            'Arbitrary children'
        ),
        _react2['default'].createElement(
            'span',
            null,
            'Hello'
        ),
        _react2['default'].createElement(
            'a',
            { className: 'dropdown-toggle' },
            _react2['default'].createElement('i', { className: 'fa fa-fw fa-caret-down' })
        ),
        _react2['default'].createElement(
            'span',
            null,
            '<- toggle\'s right there'
        ),
        _react2['default'].createElement(
            'div',
            { className: 'dropdown-menu' },
            _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(
                        'h1',
                        null,
                        'Hello'
                    )
                )
            ),
            _react2['default'].createElement(
                'h1',
                null,
                'World'
            )
        )
    ),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement(
        _srcButtonDropdown2['default'],
        { deferDropdownRendering: true, ignoreContentClick: true },
        _react2['default'].createElement('i', { className: 'fa fa-tag' }),
        _react2['default'].createElement(
            'span',
            null,
            'Arbitrary children + deferDropdown + ignore content click'
        ),
        _react2['default'].createElement(
            'span',
            null,
            'Hello'
        ),
        _react2['default'].createElement(
            'a',
            { className: 'dropdown-toggle' },
            _react2['default'].createElement('i', { className: 'fa fa-fw fa-caret-down' })
        ),
        _react2['default'].createElement(
            'span',
            null,
            '<- toggle\'s right there'
        ),
        _react2['default'].createElement(
            'div',
            { className: 'dropdown-menu' },
            _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(
                        'h1',
                        null,
                        'Hello'
                    )
                )
            ),
            _react2['default'].createElement(
                'h1',
                null,
                'World'
            )
        )
    ),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement(
        _srcButtonDropdown2['default'],
        null,
        _react2['default'].createElement('i', { className: 'fa fa-tag' }),
        _react2['default'].createElement(
            'span',
            null,
            'Arbitrary children + with null'
        ),
        _react2['default'].createElement(
            'span',
            null,
            'Hello'
        ),
        null,
        _react2['default'].createElement(
            'a',
            { className: 'dropdown-toggle' },
            _react2['default'].createElement('i', { className: 'fa fa-fw fa-caret-down' })
        ),
        _react2['default'].createElement(
            'span',
            null,
            '<- toggle\'s right there'
        ),
        _react2['default'].createElement(
            'div',
            { className: 'dropdown-menu' },
            _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(
                        'h1',
                        null,
                        'Hello'
                    )
                )
            ),
            _react2['default'].createElement(
                'h1',
                null,
                'World'
            )
        )
    ),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement(
        _srcButtonDropdown2['default'],
        null,
        _react2['default'].createElement('i', { className: 'fa fa-tag' }),
        _react2['default'].createElement(
            'span',
            null,
            'Arbitrary children + with null - no toggle or content'
        ),
        _react2['default'].createElement(
            'span',
            null,
            ' Hello '
        ),
        null,
        null && _react2['default'].createElement(
            'a',
            { className: 'dropdown-toggle' },
            _react2['default'].createElement('i', { className: 'fa fa-fw fa-caret-down' })
        ),
        _react2['default'].createElement(
            'span',
            null,
            'no toggle'
        ),
        null && _react2['default'].createElement(
            'div',
            { className: 'dropdown-menu' },
            _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(
                        'h1',
                        null,
                        'Hello'
                    )
                )
            ),
            _react2['default'].createElement(
                'h1',
                null,
                'World'
            )
        )
    ),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement('br', null)
), document.getElementById('home'));

//bound in dom 0 handler in default.htm - to test unMount events
window.clearNavBar = function () {
    (0, _reactDom.render)(_react2['default'].createElement(
        'div',
        null,
        'Gone'
    ), document.getElementById('home'));
};

exports['default'] = null;
module.exports = exports['default'];