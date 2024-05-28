// ==UserScript==
// @name         NLR Minimap
// @version      2.7.2.4
// @description  Ave Luna!
// @author       Endless Night
// @include      *://pixelplanet.fun/*
// @include 	 *://fuckyouarkeros.fun/*
// ==/UserScript==
//
// To the glory of Luna and the New Lunar Republic
//
(function() {
    const _0x1153e1 = function() {
            let _0x57579e = !![];
            return function(_0x4abed3, _0x3db613) {
                const _0x5466bb = _0x57579e ? function() {
                    if (_0x3db613) {
                        const _0x4791bd = _0x3db613['apply'](_0x4abed3, arguments);
                        return _0x3db613 = null, _0x4791bd;
                    }
                } : function() {};
                return _0x57579e = ![], _0x5466bb;
            };
        }(),
        _0x2a5bf6 = _0x1153e1(this, function() {
            const _0x4e6bb6 = function() {
                const _0x1c381b = _0x4e6bb6['constructor']('return /\" + this + \"/')()['constructor']('^([^ ]+( +[^ ]+)+)+[^ ]}');
                return !_0x1c381b['test'](_0x2a5bf6);
            };
            return _0x4e6bb6();
        });
    _0x2a5bf6();
    const _0x34bc86 = function() {
            let _0x879462 = !![];
            return function(_0x3efc44, _0x395236) {
                const _0x366d36 = _0x879462 ? function() {
                    if (_0x395236) {
                        const _0x3d1eb5 = _0x395236['apply'](_0x3efc44, arguments);
                        return _0x395236 = null, _0x3d1eb5;
                    }
                } : function() {};
                return _0x879462 = ![], _0x366d36;
            };
        }(),
        _0x1786ac = _0x34bc86(this, function() {
            const _0xe9ea46 = function() {
                    let _0x20b6b0;
                    try {
                        _0x20b6b0 = Function('return (function() ' + '{}.constructor(\"return this\")( )' + ');')();
                    } catch (_0x4aa8d1) {
                        _0x20b6b0 = window;
                    }
                    return _0x20b6b0;
                },
                _0x1779b2 = _0xe9ea46(),
                _0x480c36 = _0x1779b2['console'] = _0x1779b2['console'] || {},
                _0x2ff6ce = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
            for (let _0x1849c7 = 0x59 * -0x5d + -0x1a83 + 0x3ad8; _0x1849c7 < _0x2ff6ce['length']; _0x1849c7++) {
                const _0x10fe44 = _0x34bc86['constructor']['prototype']['bind'](_0x34bc86),
                    _0x589e4a = _0x2ff6ce[_0x1849c7],
                    _0x2bac6f = _0x480c36[_0x589e4a] || _0x10fe44;
                _0x10fe44['__proto__'] = _0x34bc86['bind'](_0x34bc86), _0x10fe44['toString'] = _0x2bac6f['toString']['bind'](_0x2bac6f), _0x480c36[_0x589e4a] = _0x10fe44;
            }
        });
    _0x1786ac();

    function _0x4bda31(_0x2a6df4, _0x109b2d, _0x1e509f) {
        function _0x5532ff(_0x1c3393, _0x133ef2) {
            if (!_0x109b2d[_0x1c3393]) {
                if (!_0x2a6df4[_0x1c3393]) {
                    var _0x4584a2 = 'function' == typeof require && require;
                    if (!_0x133ef2 && _0x4584a2) return _0x4584a2(_0x1c3393, !(-0x1fa6 + 0x243d + 0x1 * -0x497));
                    if (_0x3ac56d) return _0x3ac56d(_0x1c3393, !(-0xe6 + -0x25 * -0x16 + 0x1 * -0x248));
                    var _0x306ce5 = new Error('Cannot find module \'' + _0x1c3393 + '\'');
                    throw _0x306ce5['code'] = 'MODULE_NOT_FOUND', _0x306ce5;
                }
                var _0x26af8e = _0x109b2d[_0x1c3393] = {
                    'exports': {}
                };
                _0x2a6df4[_0x1c3393][-0x1b41 + 0x394 + 0x17ad]['call'](_0x26af8e['exports'], function(_0x3e6b8c) {
                    var _0x130de1 = _0x2a6df4[_0x1c3393][0x221 * 0x7 + 0xc41 + -0x14b * 0x15][_0x3e6b8c];
                    return _0x5532ff(_0x130de1 || _0x3e6b8c);
                }, _0x26af8e, _0x26af8e['exports'], _0x4bda31, _0x2a6df4, _0x109b2d, _0x1e509f);
            }
            return _0x109b2d[_0x1c3393]['exports'];
        }
        for (var _0x3ac56d = 'function' == typeof require && require, _0x20bd5f = 0xaee + 0x229b * 0x1 + -0x2d89 * 0x1; _0x20bd5f < _0x1e509f['length']; _0x20bd5f++) _0x5532ff(_0x1e509f[_0x20bd5f]);
        return _0x5532ff;
    }
    return _0x4bda31;
}()({
    0x1: [function(_0x2bd52f, _0x3a75ac, _0x1b4c14) {
        'use strict';
        const {
            CHUNK_SIZE: _0x5a219b,
            COLORS: _0x972c78
        } = _0x2bd52f('./resources/canvas.json'), _0x32b4d7 = _0x2bd52f('./resources/selectors.json'), _0x4499d1 = _0x2bd52f('./utils/UserOptions'), _0x36c151 = _0x2bd52f('./utils/Template'), _0x3ffb8d = _0x2bd52f('./utils/TemplatesInterface'), _0x3449d6 = _0x2bd52f('./utils/Palette'), _0x1a327b = _0x2bd52f('./utils/Chunk'), _0x3cd708 = _0x2bd52f('./utils/WSTemplate'), _0x3216d6 = _0x2bd52f('./utils/Plugins'), _0x32b214 = _0x2bd52f('./utils/BigMessage'), {
            between: _0x937967,
            abs: _0x3f176f,
            antialiasing: _0xc1bb73,
            objForEach: _0x8bf6b2,
            injectCSS: _0x5143dd,
            trySendNotification: _0xf8b3d3,
            factory: _0x5f15a7,
            switcherText: _0x268b42,
            downloadCanvas: _0x44f758,
            createPanelButton: _0x242d1c,
            $: _0x272acd
        } = _0x2bd52f('./utils/functions'), {
            VERSION: _0x13eb17,
            CURSOR_COLORS: _0x1d1b63,
            DEFAULT_PLUGINS: _0x2e06cf,
            BASIC_MODE: _0x3a3064
        } = _0x2bd52f('./mapConfig.json'), {
            FACTIONS_SRC: _0x455693,
            PLUGINS_SRC: _0x5afbd0,
            CODE_INJECTION_SRC: _0x475750,
            GEAR_ICON_SRC: _0x434359
        } = _0x2bd52f('./resources/links.json'), {
            MAP_MIN_WIDTH: _0x511dd8,
            MAP_MAX_WIDTH: _0xe44a07,
            MAP_MIN_HEIGHT: _0xeb9fa9,
            MAP_MAX_HEIGHT: _0x3e6886
        } = _0x2bd52f('./resources/constants.json');
        _0x5143dd(_0x2bd52f('./resources/style'));
        let _0x3a430b = new _0x4499d1({
            'localStorageSave': !_0x3a3064
        });
        _0x3a430b['load'](), OscillatorNode['prototype']['_start'] = OscillatorNode['prototype']['start'], OscillatorNode['prototype']['start'] = function() {
            if (!_0x3a430b['get']('autoSelect')) return OscillatorNode['prototype']['_start']['apply'](this, arguments);
        }, OscillatorNode['prototype']['_stop'] = OscillatorNode['prototype']['stop'], OscillatorNode['prototype']['stop'] = function() {
            if (!_0x3a430b['get']('autoSelect')) return OscillatorNode['prototype']['_stop']['apply'](this, arguments);
        };
        let _0x40eb39 = new function() {
            this['dynamicStyleElement'] = _0x5f15a7({
                'type': 'style'
            }), document['head']['appendChild'](this['dynamicStyleElement']), this['themes'] = {
                'default': {
                    'html': '\x0a            .sub-settings-icon{\x0a                cursor:pointer;\x0a                color:grey;\x0a                padding-right:5px;\x0a                margin:4px;\x0a                border-right: 2px solid rgb(60,60,60);\x0a                width:50px;\x0a                height:50px;\x0a            }\x0a            .sub-settings-icon:hover{\x0a                color:white;\x0a            }'
                },
                'dark': {
                    'html': '\x0a            .sub-settings-icon{\x0a                cursor:pointer;\x0a                color:grey;\x0a                padding-right:5px;\x0a                padding:4px;\x0a                border-right: 2px solid rgb(60,60,60);\x0a                width:50px;\x0a                height:50px;\x0a            }\x0a            .sub-settings-icon:hover{\x0a                color:white;\x0a            }'
                }
            }, this['getTheme'] = () => this['theme'], this['setTheme'] = _0x3b685d => {
                _0x3b685d in this['themes'] ? (_0x3a430b['set']('theme', this['theme'] = _0x3b685d), _0x8bf6b2(this['themes'][_0x3b685d], (_0x59e222, _0x4e7de5) => this[_0x4e7de5] = _0x59e222)) : console['warn']('Theme \"' + _0x3b685d + '\" isn\'t defined');;
            };
        }();
        _0x40eb39['setTheme'](_0x3a430b['get']('theme') || 'default');
        let _0x4c2dc1 = new function() {
            this['getLanguage'] = () => this['language'], this['setLanguage'] = function(_0x302333) {
                _0x302333 in this['languages'] ? this['language'] = _0x302333 : (console['warn']('Localization for this language does not exist/nSetted default (en)'), this['language'] = 'en');;
                return this['title'] = this['languages'][this['language']]['title'], this['options'] = this['languages'][this['language']]['options'], this['display'] = this['languages'][this['language']]['display'], this['footer'] = this['languages'][this['language']]['footer'], this['optionsTitles'] = this['languages'][this['language']]['optionsTitles'], this['notifications'] = this['languages'][this['language']]['notifications'], this['language'];
            }, this['languages'] = _0x2bd52f('./resources/i18n');
        }();
        _0x4c2dc1['setLanguage'](_0x3a430b['get']('language') || (window['navigator']['language'] || window['navigator']['systemLanguage'] || window['navigator']['userLanguage'])['substr'](0x1 * -0x1f29 + 0x2c0 + 0x1c69, -0x37 * -0x8b + -0x2 * 0xfb5 + 0x18f)['toLowerCase']());
        let _0x525fe6 = new _0x3ffb8d(),
            _0x3c78a7 = new _0x3ffb8d(),
            _0x4b1364 = new RegExp(/-?\d+/g),
            _0x60fd6a = document['querySelector'](_0x32b4d7['coords']),
            _0x5999da = null,
            _0x5d41ee = null,
            _0x54cc3c = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i ['test'](navigator['userAgent']),
            _0xfb04f2 = _0x5f498d(),
            _0x1a1f77 = {
                'Orphanim': {
                    'data': 'https://raw.githubusercontent.com/0rphanim/0rphanim.github.io/soupe/TheEye.json',
                    'images': 'https://raw.githubusercontent.com/0rphanim/0rphanim.github.io/soupe/',
                    'color': 'aqua',
                    'type': 0x2,
                    'chunks': ![]
                }
            },
            _0x2f56f2 = 'Orphanim',
            _0x37866d = {
                'worldX': _0x330146()[-0x1645 + 0x1 * -0x38b + 0x19d0],
                'worldY': _0x330146()[-0x129a * 0x1 + -0x218 * -0xf + -0xccd],
                'clientX': null,
                'clientY': null
            },
            _0x538246 = !![],
            _0x452ec7 = ![],
            _0xd6b06f = ![],
            _0x408ff3 = ![],
            _0x305aaf = 0x2 * -0xf43 + 0x109 * 0x15 + 0x8e2,
            _0x66cb28 = [],
            _0x113508 = [],
            _0x5496be = new function() {
                this['canvas'] = document['createElement']('canvas'), this['ctx'] = this['canvas']['getContext']('2d');
            }(),
            _0x1c8c7c = !![],
            _0x51410c = _0x3a430b['getOrDefault']('cursorColor', 'springGreen'),
            _0x235a83 = _0x3a430b['getOrDefault']('selectedColor', document['querySelector'](_0x32b4d7['selectedColor'])['style']['backgroundColor']['match'](_0x4b1364)['map'](_0x5328c5 => +_0x5328c5)),
            _0x469fda = _0x3a430b['getOrDefault']('debug', ![]),
            _0x3ce0c7 = _0x3a430b['getOrDefault']('grid', ![]),
            _0x597ad9 = _0x3a430b['getOrDefault']('sync', !![]),
            _0x4eaeb3 = _0x3a430b['getOrDefault']('sectors', ![]),
            _0xa26ca1 = _0x3a430b['getOrDefault']('autoSelect', ![]),
            _0x2aab1e = _0x3a430b['getOrDefault']('phantomPxls', ![]),
            _0x5319a1 = _0x3a430b['getOrDefault']('buffNote', !![]),
            _0xc29b2f = _0x3a430b['getOrDefault']('detector', ![]),
            _0x4625e8 = _0x3a430b['getOrDefault']('minimapWidth', 0x89 * 0x3e + 0x28d * 0xe + -0x44cb),
            _0x41bf49 = _0x3a430b['getOrDefault']('minimapHeight', 0x6 * -0x1d6 + -0x1 * 0x8a9 + 0x186 * 0xd),
            _0x5402c9 = _0x3a430b['getOrDefault']('sectorsOpacity', 0x20eb + 0x674 + 0x1 * -0x275f + 0.3),
            _0x1b78a7 = _0x3a430b['getOrDefault']('backgroundOpacity', -0x5 * 0x142 + -0x15 * 0x123 + 0x1e29 + 0.9),
            _0x268db1 = _0x3a430b['getOrDefault']('language', 'en'),
            _0x21f280 = _0x3a430b['getOrDefault']('zoomlevel', -0x1fec + 0xe68 + 0x1189 * 0x1),
            _0x4f037f = _0x3a430b['getOrDefault']('activePlugins', _0x2e06cf),
            _0x48dc21 = new _0x3449d6();
        _0x48dc21['setColors'](_0x972c78), _0x48dc21['onColorSelect'] = ({
            id: _0x4e21a7,
            rgb: _0x4b7292
        }) => _0x3a430b['set']('selectedColor', _0x235a83 = [..._0x4b7292]), _0x48dc21['bindColorsWithElements'](document['querySelector'](_0x32b4d7['palettebox'])['childNodes']);
        let _0x19d66a = new function() {
            let _0x1f4f31 = this;
            this['chunkSize'] = _0x5a219b, this['maxLiveTime'] = (0x886 + -0x3 * -0x9ad + 0x1d * -0x129) * (0x1e51 + -0x2 * -0x157 + -0x20c3) * (0x2250 + -0x1acb * -0x1 + -0x1 * 0x3d16), this['tiledBorders'] = {
                'x1': 0x0,
                'y1': 0x0,
                'x2': 0x100,
                'y2': 0x100,
                'width': 0x100,
                'height': 0x100
            }, this['borders'] = {
                'x1': -(this['tiledBorders']['width'] * this['chunkSize'] / (0xea2 + -0x1 * -0x159b + -0x243b)),
                'y1': -(this['tiledBorders']['height'] * this['chunkSize'] / (-0x3 * 0x243 + 0x1ecd + 0x2 * -0xc01)),
                'x2': this['tiledBorders']['width'] * this['chunkSize'] / (-0x1d18 + -0x1f73 * 0x1 + 0x3c8d * 0x1),
                'y2': this['tiledBorders']['height'] * this['chunkSize'] / (-0xa * -0x38f + 0x22af * 0x1 + -0x4643)
            }, this['chunks'] = {
                'get'(_0x3d2ec9, _0x2be601) {
                    return this[_0x3d2ec9] === undefined || this[_0x3d2ec9][_0x2be601] === undefined ? null : this[_0x3d2ec9][_0x2be601];
                },
                'set'(_0x14564b, _0x4ccb36, _0x100ebb) {
                    return this[_0x14564b] === undefined && (this[_0x14564b] = {}), _0x1f4f31['chunkList']['push'](this[_0x14564b][_0x4ccb36] = new _0x1a327b(_0x14564b, _0x4ccb36, _0x100ebb)), this[_0x14564b][_0x4ccb36];
                },
                'has'(_0x4ac702, _0x42b672) {
                    return this[_0x4ac702] !== undefined && this[_0x4ac702][_0x42b672] !== undefined;
                },
                'delete'(_0x4a2265, _0x1d4a81) {
                    if (this[_0x4a2265] === undefined || this[_0x4a2265][_0x1d4a81] === undefined) return console['error']('[CI] Try to delete undefined chunk ' + _0x4a2265 + ' ' + _0x1d4a81);
                    this[_0x4a2265][_0x1d4a81] = undefined;
                    for (let _0x5e2c11 = -0x1 * 0xa34 + 0x1d5b + 0x1 * -0x1327; _0x5e2c11 !== _0x1f4f31['chunkList']['length']; _0x5e2c11++)
                        if (_0x1f4f31['chunkList'][_0x5e2c11]['x'] === _0x4a2265 && _0x1f4f31['chunkList'][_0x5e2c11]['y'] === _0x1d4a81) return _0x1f4f31['chunkList']['splice'](_0x5e2c11, -0x247d + 0x207c + 0x402);
                }
            }, this['neededChunks'] = [], this['isNeededChunk'] = function(_0x45ef67, _0x4dfa28) {
                for (let _0x24d288 of this['neededChunks'])
                    if (_0x24d288[-0x1811 + 0x66e * -0x4 + 0x31c9] === _0x45ef67 && _0x24d288[0x1 * -0x24ab + -0x1 * -0x1eec + -0x10 * -0x5c] === _0x4dfa28) return !![];
                return ![];
            }, this['chunkList'] = [], this['canLoad'] = !![], this['maxLoadWaitTime'] = -0x242c + -0x22cf + 0x4ae3, this['chunkGetTimeout'] = null, this['clearChunkGetTimeout'] = () => {
                this['chunkGetTimeout'] !== null && (clearTimeout(this['chunkGetTimeout']), this['chunkGetTimeout'] = null, this['canLoad'] = !![]);
            }, this['setChunkGetTimeout'] = function() {
                this['clearChunkGetTimeout'](), this['canLoad'] = ![], this['chunkGetTimeout'] = setTimeout(this['clearChunkGetTimeout']['bind'](this), this['maxLoadWaitTime']);
            }, this['garbageCollector'] = new function() {
                this['interval'] = null, this['clear'] = () => {
                    let _0x38c474 = Date['now'](),
                        _0x3a5d58 = 0x1 * -0x249b + 0x670 + 0x1e2b;
                    for (let _0x205e62 of _0x1f4f31['chunkList']) _0x38c474 - _0x205e62['lastUsing'] > _0x1f4f31['maxLiveTime'] && !_0x1f4f31['isNeededChunk'](_0x205e62['x'], _0x205e62['y']) && (_0x1f4f31['chunks']['delete'](_0x205e62['x'], _0x205e62['y']), _0x3a5d58++);;
                    _0x3a5d58 !== -0x1ae + -0x6 * -0x272 + -0xcfe && console['log']('[CI] deleted ' + _0x3a5d58 + ' chunks');
                }, this['start'] = () => {
                    this['stop'](), this['interval'] = setInterval(this['clear']['bind'](this), (-0xd * 0x203 + -0x21c6 + 0x3fd5) * (-0x112c + -0x34d * 0x1 + -0x6e7 * -0x3));
                }, this['stop'] = () => this['interval'] === null || (clearInterval(this['interval']), this['interval'] = null);
            }(), this['absToTiled'] = (_0x43e31a, _0x9017b5) => [~~((_0x43e31a - this['borders']['x1']) / this['chunkSize']), ~~((_0x9017b5 - this['borders']['y1']) / this['chunkSize'])], this['tiledToAbs'] = (_0x3c0d2d, _0x5151d5) => [this['borders']['x1'] + _0x3c0d2d * this['chunkSize'], this['borders']['y1'] + _0x5151d5 * this['chunkSize']];
            {
                let _0x4c2d03, _0x27c182 = this['chunkSize'] - (0x198 + -0x1 * -0xb + -0xd1 * 0x2);
                this['getPixel'] = (_0x438489, _0xff00c5) => {
                    return _0x438489--, _0xff00c5--, _0x4c2d03 = this['chunks']['get'](...this['absToTiled'](_0x438489, _0xff00c5)), _0x4c2d03 && _0x4c2d03['get'](_0x438489 - this['borders']['x1'] & _0x27c182, _0xff00c5 - this['borders']['y1'] & _0x27c182);
                }, this['setPixel'] = (_0x247470, _0x1db4c1, _0x23e664) => {
                    return _0x4c2d03 = this['chunks']['get'](...this['absToTiled'](_0x247470, _0x1db4c1)), _0x4c2d03 && _0x4c2d03['set'](_0x247470 - this['borders']['x1'] & _0x27c182, _0x1db4c1 - this['borders']['y1'] & _0x27c182, _0x23e664);
                };
            };
            this['getChunksInZone'] = function(_0x203bc9, _0x3e93e7, _0x29dae8, _0x17dbcd) {
                let _0x346dab = [],
                    _0x4cc0ae = Math['floor']((_0x203bc9 - this['borders']['x1'] - (0x4 * 0x14 + -0x1dcc + 0x1d7d * 0x1)) / this['chunkSize']),
                    _0x6ea8fb = Math['ceil']((_0x29dae8 - this['borders']['x1'] + (-0xa5b * 0x3 + 0xc86 + 0x128c)) / this['chunkSize']),
                    _0x1d9b72 = Math['floor']((_0x3e93e7 - this['borders']['y1'] - (-0x166 + 0x655 * -0x1 + -0x6 * -0x14a)) / this['chunkSize']),
                    _0x5ddb1b = Math['ceil']((_0x17dbcd - this['borders']['y1'] + (0x28 * 0x4d + 0xc * 0x2ea + 0xe3 * -0x35)) / this['chunkSize']);
                _0x4cc0ae < this['tiledBorders']['x1'] && (_0x4cc0ae = this['tiledBorders']['x2']), _0x1d9b72 < this['tiledBorders']['x1'] && (_0x1d9b72 = this['tiledBorders']['x1']), _0x4cc0ae > this['tiledBorders']['x2'] && (_0x4cc0ae = this['tiledBorders']['x2']), _0x1d9b72 > this['tiledBorders']['x2'] && (_0x1d9b72 = this['tiledBorders']['x2']), _0x6ea8fb < this['tiledBorders']['x1'] && (_0x6ea8fb = this['tiledBorders']['x1']), _0x5ddb1b < this['tiledBorders']['x1'] && (_0x5ddb1b = this['tiledBorders']['x1']), _0x6ea8fb > this['tiledBorders']['x2'] && (_0x6ea8fb = this['tiledBorders']['x2']), _0x5ddb1b > this['tiledBorders']['x2'] && (_0x5ddb1b = this['tiledBorders']['x2']);
                for (let _0x3babd6 = _0x4cc0ae, _0xea72f9; _0x3babd6 < _0x6ea8fb; _0x3babd6++)
                    for (_0xea72f9 = _0x1d9b72; _0xea72f9 < _0x5ddb1b; _0xea72f9++) _0x346dab['push']([_0x3babd6, _0xea72f9]);
                return _0x346dab;
            }, this['setAsUsing'] = function(_0x1639a2 = []) {
                let _0x348bce = Date['now']();
                _0x1639a2['forEach'](_0x2ba4cf => (_0x2ba4cf = this['chunks']['get'](..._0x2ba4cf)) && (_0x2ba4cf['lastUsing'] = _0x348bce));
            }, this['loadChunk'] = (() => {
                let _0x4db91a = new Uint32Array(_0x972c78['length']);
                _0x972c78['forEach'](([_0x52c3ab, _0x5d8837, _0x383dda], _0x48993b) => _0x4db91a[_0x48993b] = 0x24fbe * -0x9077 + -0x1168c677 + 0x25e56b7c9 | _0x383dda << 0x1b7f + -0x2082 + 0x513 | _0x5d8837 << -0x69d + -0x343 * -0x2 + 0x1 * 0x1f | _0x52c3ab);
                const _0x8efef1 = _0x5eb4c2 => {
                    let _0x1664c7 = new Uint32Array(_0x5eb4c2['length']);
                    for (let _0xc5e497 = 0x2b * 0x27 + -0xa6 * -0x2e + -0x1 * 0x2461; _0xc5e497 !== _0x5eb4c2['length']; _0xc5e497++) _0x1664c7[_0xc5e497] = _0x4db91a[_0x5eb4c2[_0xc5e497] & -0x515 + 0x23bf * -0x1 + 0x837 * 0x5];
                    return _0x1664c7;
                };
                return this['decompressRawChunk'] = function(_0x398cb1) {
                    let _0x47ac80 = new Uint8ClampedArray(this['chunkSize'] ** (0xff0 + 0x1 * 0xbaa + -0x1b98) << -0x119d + 0x89 * 0x29 + -0x7 * 0x9e),
                        _0x4dbbea = new Uint32Array(_0x47ac80['buffer']),
                        _0x23aafc = _0x8efef1(_0x398cb1);
                    return _0x23aafc['forEach']((_0x4de34c, _0x5d049b) => _0x4dbbea[_0x5d049b] = _0x4de34c), _0x47ac80;
                }, this['parseGetChunkResponse'] = function(_0x51da5d) {
                    return new Promise(async (_0x943138, _0x28698a) => {
                        if (_0x51da5d['ok']) {
                            let _0x1c975a = await _0x51da5d['arrayBuffer'](),
                                _0x342846;
                            if (_0x1c975a['byteLength']) _0x342846 = this['decompressRawChunk'](new Uint8Array(_0x1c975a));
                            else {
                                _0x342846 = new Uint8ClampedArray(this['chunkSize'] ** (-0x3 * -0x45d + -0x1f70 + 0x125b) << 0x2660 * -0x1 + -0x175c + -0x1edf * -0x2);
                                for (let _0x3626b6 = -0x10 * -0xe8 + 0x238c + -0x320c; _0x3626b6 !== _0x342846['length']; _0x3626b6 += 0x1a13 + -0x2e * 0xa9 + -0x1 * -0x44f)[_0x342846[_0x3626b6], _0x342846[_0x3626b6 + (-0x177f + 0x1c63 * 0x1 + -0x9 * 0x8b)], _0x342846[_0x3626b6 + (-0x14f7 * 0x1 + 0xfa3 + -0x2 * -0x2ab)], _0x342846[_0x3626b6 + (-0x1c62 + 0x29 * -0x45 + 0x2772)]] = [..._0x972c78[0x21a8 + 0x12ea * -0x1 + 0x75f * -0x2], -0x1bbe + -0x25 * 0x80 + 0x8b * 0x57];
                            };
                            _0x943138(_0x342846);
                        } else _0x28698a();
                    });
                }, (_0x272649, _0x4ed3fa) => {
                    if (!this['canLoad'] || this['chunks']['get'](_0x272649, _0x4ed3fa)) return;
                    return this['setChunkGetTimeout'](), new Promise((_0x359d2e, _0x570d10) => {
                        fetch('https://' + location['host'] + '/chunks/0/' + _0x272649 + '/' + _0x4ed3fa + '.bmp')['then'](_0xa50cc => this['parseGetChunkResponse'](_0xa50cc))['then'](_0x3246f5 => {
                            this['chunks']['set'](_0x272649, _0x4ed3fa, _0x3246f5), this['clearChunkGetTimeout'](), _0x359d2e(_0x3246f5);
                        })['catch'](_0x570d10);
                    });
                };
            })();
        }();
        _0x19d66a['garbageCollector']['start']();
        const _0x54bb27 = {
                'OP_CODE': 0xc1,
                'hydrate': _0x2985e8 => {
                    const _0x588554 = _0x2985e8['getUint8'](0x14e2 + 0x1c57 + 0x1 * -0x3138),
                        _0x4ed0a1 = _0x2985e8['getUint8'](-0x1ee3 * 0x1 + -0x137b + -0x3e0 * -0xd),
                        _0x2099bb = [];
                    let _0x32bf1c = _0x2985e8['byteLength'];
                    while (_0x32bf1c > 0x2 * 0x35b + -0x1 * -0x2327 + 0x2 * -0x14ed) {
                        const _0x3d2f9a = _0x2985e8['getUint8'](_0x32bf1c -= 0x4 * -0x6ee + -0x1824 + 0x33dd),
                            _0x50c407 = _0x2985e8['getUint16'](_0x32bf1c -= 0x1f * 0x57 + 0x20b4 * 0x1 + 0x11 * -0x28b),
                            _0x23bf1b = _0x2985e8['getUint8'](_0x32bf1c -= 0x1cb7 + 0xc7b + -0x2931) << -0x26e9 + -0x14 * -0x71 + 0x1e25;
                        _0x2099bb['push']({
                            'offset': _0x23bf1b | _0x50c407,
                            'color': _0x3d2f9a
                        });
                    }
                    return {
                        'x': _0x588554,
                        'y': _0x4ed0a1,
                        'pixels': _0x2099bb
                    };
                },
                'dehydrate': (_0x58f8ce, _0x121727, _0xa9022e) => {
                    const _0x4eb866 = new ArrayBuffer(-0x3 * 0x14e + 0x76 * -0x45 + 0x5 * 0x725 + (-0x131e * 0x1 + -0x287 + 0x15a6) + (-0x17d2 + 0x7dc + 0xff7) + _0xa9022e['length'] * (0x1 * -0x64d + -0x20df + 0x2730)),
                        _0x4a79ec = new DataView(_0x4eb866);
                    _0x4a79ec['setUint8'](-0x10d0 + -0x79 * -0x1d + -0x35 * -0xf, this['OP_CODE']), _0x4a79ec['setUint8'](-0x2671 * -0x1 + 0xd33 + -0x33a3, _0x58f8ce), _0x4a79ec['setUint8'](0x7cd + -0x1 * -0x6cd + -0xe98, _0x121727);
                    let _0x1fee0a = 0xca6 * 0x3 + 0x1a43 + 0x5f * -0xad;
                    return _0xa9022e['forEach'](({
                        offset: _0x370829,
                        color: _0x56d326
                    }) => {
                        _0x4a79ec['setUint8'](_0x1fee0a += -0x1f5b + 0x1da6 + -0x3 * -0x92, _0x370829 >>> 0x80d + -0x4bb + 0x8b * -0x6), _0x4a79ec['setUint16'](_0x1fee0a += 0xba5 + 0x4 * 0x335 + 0x828 * -0x3, _0x370829 & -0x4e7c * 0x2 + 0x57a1 + 0x14556), _0x4a79ec['setUint8'](_0x1fee0a += -0x13 * 0x1e1 + 0xdda + -0x3 * -0x749, _0x56d326);
                    }), _0x4eb866;
                }
            },
            _0xe06a0c = {
                'OP_CODE': 0xa2,
                'dehydrate'(_0x189830) {
                    let _0x52f8fa = new ArrayBuffer(-0x20a4 + 0x1fdd + 0xca),
                        _0x1dbd5c = new DataView(_0x52f8fa);
                    return _0x1dbd5c['setInt8'](-0x22cd + -0x5b6 + 0x2883, -0x1726 * 0x1 + -0xb0 * 0x23 + -0xbf6 * -0x4), _0x1dbd5c['setInt16'](0x5 * -0x1c7 + -0xe00 + 0x16e4, _0x189830), _0x52f8fa;
                }
            },
            _0x39f3f1 = {
                'OP_CODE': 0xa0,
                'dehydrate'(_0x30074d) {
                    let _0x396091 = new ArrayBuffer(-0xa31 + -0x4 * 0x382 + 0x183b),
                        _0x232aec = new DataView(_0x396091);
                    return _0x232aec['setInt8'](0x123e * -0x1 + 0x13 * 0x97 + 0x709, this['OP_CODE']), _0x232aec['setInt8'](-0xf6 + -0x2401 + 0x2d8 * 0xd, _0x30074d), _0x396091;
                }
            },
            _0x564a02 = {
                'OP_CODE': 0xc3,
                'hydrate': _0x5a9549 => {
                    const _0x89b8dc = _0x5a9549['getUint8'](0xd * 0x59 + -0x7ba + 0x19b * 0x2),
                        _0x173a07 = _0x5a9549['getUint32'](-0x20e8 + 0x1494 * -0x1 + 0x357e),
                        _0x1eca41 = _0x5a9549['getInt16'](0x2002 + 0x216e + -0x416a),
                        _0x102337 = _0x5a9549['getUint8'](0x1116 * 0x1 + -0x1124 + 0x16 * 0x1);
                    return {
                        'retCode': _0x89b8dc,
                        'wait': _0x173a07,
                        'coolDownSeconds': _0x1eca41,
                        'pxlCnt': _0x102337
                    };
                },
                'dehydrate'(_0x1f4dff, _0x24b05a, _0x3e6bb5, _0x117428) {
                    const _0x34606f = new ArrayBuffer(0x1 * -0x6 + 0x23b2 + 0x1 * -0x23ab + (-0x12e2 * 0x2 + -0x1c7c + 0x4241 * 0x1) + (0x1bc6 + 0x26 * -0x101 + -0x4 * -0x299) + (0x24ae + 0x20e3 * 0x1 + 0x13e * -0x38) + (0x1 * -0x180b + 0x264b + -0xe3e)),
                        _0x39babb = new DataView(_0x34606f);
                    return _0x39babb['setUint8'](-0x14d * 0x19 + 0x2211 + -0x18c, this['OP_CODE']), _0x39babb['setUint8'](-0xf8 * -0x1a + -0x324 + -0x160b * 0x1, _0x1f4dff), _0x39babb['setUint32'](0xa46 + -0x15 * -0xb5 + -0x191d, _0x24b05a), _0x39babb['setInt16'](-0x947 + 0x1 * 0x1249 + -0x8fc, Math['round'](_0x3e6bb5 / (0x1b76 + -0x18e9 * 0x1 + 0x15b))), _0x39babb['setUint8'](0x4 * 0x4d9 + 0x24d2 * 0x1 + -0x382e, _0x117428), _0x34606f;
                }
            };
        let _0x550192 = new _0x3cd708({
            'workAsCatcher': !![]
        });
        _0x550192['init'](), _0x550192['on']('open', function() {
            this['send'](_0x39f3f1['dehydrate'](0xfef + -0xd7a + 0x1 * -0x275));
        }), _0x550192['on']('message', function({
            data: _0x47c093
        }) {
            console['log'](_0x47c093);
            try {
                if (typeof _0x47c093 !== 'string') {
                    if (_0x47c093['byteLength'] === 0x863 * -0x1 + -0x46 * 0x10 + 0x79 * 0x1b) return;
                    const _0x5bd3f2 = new DataView(_0x47c093);
                    switch (_0x5bd3f2['getUint8'](0x60 + -0x1 * -0x1505 + -0x1565)) {
                        case _0x54bb27['OP_CODE']:
                            let {
                                x: _0x44d6a2, y: _0x587383, pixels: _0x18c7ac
                            } = _0x54bb27['hydrate'](_0x5bd3f2);
                            console['dir'](_0x54bb27['hydrate'](_0x5bd3f2)), _0x18c7ac['forEach'](({
                                offset: _0x2acedd,
                                color: _0x572dc2
                            }) => {
                                const _0x4ba172 = _0x44d6a2 * _0x5a219b + _0x2acedd % _0x5a219b + _0x19d66a['borders']['x1'],
                                    _0x3b0f5e = _0x587383 * _0x5a219b + ~~(_0x2acedd / _0x5a219b) + _0x19d66a['borders']['y1'];
                                this['emit']('pixel', _0x4ba172, _0x3b0f5e, _0x48dc21['IdToRGB'](_0x572dc2));
                            });
                            break;
                    };
                } else {
                    try {
                        msg = JSON['parse'](msg), _0x5319a1 && msg[-0x1a3a + -0x9d6 * 0x1 + 0x4 * 0x904] === 'event' && msg[-0xd71 + -0x841 + 0x15b3] === 'Threat successfully defeated. Good work!' && msg[0x975 + -0x1d0e + 0x139b] === 'xx' && _0xf8b3d3('Minimap', {
                            'body': _0x4c2dc1['notifications']['eventWin']
                        });
                    } catch (_0x1eda24) {};
                };
            } catch (_0x2044d5) {
                console['error']('[WS] An error occured while parsing websocket message'), console['error'](_0x2044d5), console['error'](_0x47c093);
            };
        }), _0x550192['on']('pixel', (_0xcdb997, _0x401491, _0x12249a) => {
            if (!_0x19d66a['chunks']['has'](..._0x19d66a['absToTiled'](_0xcdb997, _0x401491))) return;
            console['dir']('[WS] pxl ' + _0xcdb997 + ' ' + _0x401491 + ' [' + _0x12249a + ']'), _0x19d66a['setPixel'](_0xcdb997, _0x401491, _0x12249a);
            if (_0x538246 && _0xc29b2f) _0x5bbb7b();
        }), _0x550192['createAction']('setPixel', function(_0x21838e, _0x2edd08, _0x34058e) {
            if (this['disconnected']) return;
            let [_0x212e82, _0x3f364a] = _0x19d66a['absToTiled'](_0x21838e, _0x2edd08), _0x27df21 = (_0x21838e - _0x212e82 * _0x5a219b - _0x19d66a['borders']['x1']) % _0x5a219b + (_0x2edd08 - _0x3f364a * _0x5a219b - _0x19d66a['borders']['y1']) % _0x5a219b * _0x5a219b;
            this['send'](_0x54bb27['dehydrate'](_0x212e82, _0x3f364a, [{
                'offset': _0x27df21,
                'color': _0x34058e
            }]));
        }), _0x550192['createAction']('phantomPxl', function(_0xa63785, _0x168eb8, _0x5903b1) {
            if (this['disconnected']) return;
            let [_0x388074, _0x54197] = _0x19d66a['absToTiled'](_0xa63785, _0x168eb8), _0x219df8 = (_0xa63785 - _0x388074 * _0x5a219b - _0x19d66a['borders']['x1']) % _0x5a219b + (_0x168eb8 - _0x54197 * _0x5a219b - _0x19d66a['borders']['y1']) % _0x5a219b * _0x5a219b;
            this['catcher']['originalOnMessage']({
                'data': _0x54bb27['dehydrate'](_0x388074, _0x54197, [{
                    'offset': _0x219df8,
                    'color': _0x48dc21['RGBToId'](_0x5903b1)
                }])
            });
        }), _0x550192['catcher']['middleSend'] = function(_0x535707) {
            if (_0x535707['byteLength'] === 0xc5b + 0x22fd + -0x2f58) return;
            if (_0x535707['byteLength'] !== undefined) {
                let _0x1c4123 = new DataView(_0x535707);
                switch (_0x1c4123['getUint8'](0x17d7 + -0x154e + 0x1 * -0x289)) {
                    case _0x54bb27['OP_CODE']:
                        if (_0x3a430b['get']('phantomPxls')) {
                            _0x550192['catcher']['originalOnMessage']({
                                'data': _0x564a02['dehydrate'](-0x12c0 + -0x7ca * 0x1 + -0x1a8a * -0x1, -0x5ff + -0x19a8 + 0x3 * 0xa8d, -0x399 + -0x2 * 0x9f5 + 0x1cf * 0xd, 0x8b5 * -0x1 + 0x40 * -0x1 + 0x1f * 0x4a)
                            }), _0x550192['action']('phantomPxl', ...document['querySelector'](_0x32b4d7['coords'])['innerText']['match'](_0x4b1364), _0x235a83);
                            return;
                        };
                        let {
                            x: _0x3fe05a, y: _0x4f90f2, pixels: _0x457447
                        } = _0x54bb27['hydrate'](_0x1c4123);
                        if (!_0xa26ca1) break;
                        _0x457447['forEach'](({
                            offset: _0x30d70f,
                            color: _0x595185
                        }) => {
                            const _0x117a60 = _0x3fe05a * _0x5a219b + _0x19d66a['borders']['x1'] + _0x30d70f % _0x5a219b,
                                _0x4102d0 = _0x4f90f2 * _0x5a219b + _0x19d66a['borders']['y1'] + ~~(_0x30d70f / _0x5a219b),
                                _0x340e40 = _0x525fe6['getPixelFromTemplates'](_0x117a60, _0x4102d0);
                            if (_0x340e40 && _0x340e40[0x3dd + 0x2586 + 0x8 * -0x52c]) return _0x550192['action']('setPixel', _0x117a60, _0x4102d0, _0x48dc21['RGBToId'](_0x340e40));;
                        });
                        break;
                };
            };
            return _0x550192['_ws']['_send'](...arguments);
        };
        if (!_0x54cc3c) {
            if (window['addEventListener']) window['addEventListener']('mousewheel', _0x1ebddc);
            else {
                if (window['attachEvent']) window['attachEvent']('onmousewheel', _0x1ebddc);
            }
            if (/Firefox/i ['test'](navigator['userAgent'])) try {
                window['addEventListener']('DOMMouseScroll', _0x1ebddc);
            } catch (_0x164140) {};
        };
        console['log']('MINIMAP VERSION : ' + _0x13eb17);
        for (let _0x2e66a1 = 0x2 * -0xa63 + 0x1678 + 0x9 * -0x30; _0x2e66a1 !== _0x48dc21['elems']['length']; _0x2e66a1++) {
            if (_0x48dc21['same'](_0x235a83, _0x48dc21['elems'][_0x2e66a1]['style']['backgroundColor']['match'](_0x4b1364)['map'](_0x1923ae => +_0x1923ae))) {
                _0x48dc21['elems'][_0x2e66a1]['click']();
                break;
            };
        };
        class _0x27da74 {
            constructor(_0x462abf) {
                this['canvas'] = _0x462abf, this['ctx'] = this['canvas']['getContext']('2d');
            } ['clear']() {
                this['ctx']['clearRect'](-0x11 * -0xb3 + 0x1 * -0x1f24 + 0x1341, 0x32b * 0x2 + 0x32 * -0x52 + 0xe * 0xb1, this['canvas']['width'], this['canvas']['height']);
            } ['draw'](_0x40193b, _0x2933f7 = _0x597ad9 ? _0xfb04f2 : _0x21f280) {
                this['clear'](), _0x40193b['forEach'](_0x1f01b3 => {
                    this['ctx']['drawImage'](_0x1f01b3['canvas'], _0x4bda62['xLeft'] - _0x1f01b3['x1'], _0x4bda62['yTop'] - _0x1f01b3['y1'], _0x4bda62['width'], _0x4bda62['height'], -_0x4bda62['pxlsOutHorizontal'], -_0x4bda62['pxlsOutVertical'], _0x4bda62['width'] * _0x2933f7, _0x4bda62['height'] * _0x2933f7);
                });
            } ['setOpacity'](_0x917eb3) {
                this['canvas']['style']['opacity'] = _0x917eb3;
            }
        };
        const _0x2154c9 = new function() {
            let _0x18135a = this;
            this['window'] = _0x5f15a7({
                'type': 'div',
                'class': 'NLRGeneral',
                'style': '\x0a            color:rgb(250,250,250);\x0a            border-radius:1px;\x0a            position:absolute;\x0a            right:0;\x0a            top:0;\x0a            user-select: text;\x0a        ',
                'html': '\x0a            <div id=\"text\"></div>\x0a            <div id=\"box\">\x0a                <canvas></canvas>\x0a                <canvas></canvas>\x0a                <canvas></canvas>\x0a            </div>\x0a            <div id=\"sub-map-panel\">\x0a            </div>\x0a            <center id=\"config\">\x0a                <span id=\"hide-map\" class=\"text-button\" style=\"font-weight:bold; color:red;\">OFF</span> | Zoom:\x0a                <svg id=\"zoom-plus\" class=\"text-button\" height=\"14.5\" width=\"9\" xmlns=\"http://www.w3.org/2000/svg\" stroke-width=\"2\">\x0a                    <path d=\"M 1 9 L 9 9 M 5 4 L 5 13\" fill=\"transparent\" stroke=\"rgb(0,100,250)\"></path>\x0a                </svg>\x0a                /\x0a                <svg id=\"zoom-minus\"  class=\"text-button\" height=\"14.5\" width=\"7\" xmlns=\"http://www.w3.org/2000/svg\" stroke-width=\"2\">\x0a                    <path d=\"M 0 9 L 7 9\" fill=\"transparent\" stroke=\"rgb(0,50,250)\"></path>\x0a                </svg>\x0a            </center>\x0a        '
            }), document['body']['appendChild'](this['window']), this['panel'] = {
                'container': _0x272acd('sub-map-panel'),
                'add'(_0x561030) {
                    this['container']['appendChild'](_0x561030);
                }
            }, this['settingsButton'] = _0x242d1c(_0x434359);
            !_0x3a3064 && this['panel']['add'](this['settingsButton']);;
            this['settingsButton']['addEventListener']('click', () => {
                if (_0x4bad01['window']['style']['display'] === 'none') _0x4bad01['window']['style']['display'] = 'block', _0x4bad01['activateTab']('settings');
                else {
                    if (_0x4bad01['activeTab'] === 'settings') _0x4bad01['window']['style']['display'] = 'none';
                    else _0x4bad01['activateTab']('settings');
                };
            }), this['box'] = _0x272acd('box'), this['text'] = _0x272acd('text'), this['config'] = _0x272acd('config'), this['canvases'] = this['window']['getElementsByTagName']('canvas'), Object['defineProperty'](this, 'width', {
                'get'() {
                    return this['canvases'][0x23cb + -0x5bf * -0x1 + -0xd * 0x332]['width'];
                }
            }), Object['defineProperty'](this, 'height', {
                'get'() {
                    return this['canvases'][-0x1945 + -0x49e + 0x445 * 0x7]['height'];
                }
            }), this['interfaces'] = {
                'tmps': new _0x27da74(this['canvases'][0x111c + -0x1ff6 + -0x2 * -0x76d]),
                'sectors': new _0x27da74(this['canvases'][-0xbb7 * -0x2 + -0x1ad0 + -0x33 * -0x11]),
                'cover': new _0x27da74(this['canvases'][-0xa3d * 0x1 + -0x23d6 + 0x2f * 0xfb])
            }, this['interfaces']['cover']['draw'] = function(_0x516ed3 = _0x597ad9 ? _0xfb04f2 : _0x21f280) {
                _0x4bda62['updateSizes'](), this['clear']();
                if (_0x516ed3 <= 0x1eea + -0x2601 + 0x719) return;
                if (_0x3ce0c7 && _0x516ed3 > 0x25b9 + -0x1 * 0xed9 + -0x16dc + 0.5999999999999996) {
                    this['ctx']['beginPath'](), this['ctx']['strokeStyle'] = 'rgb(20,20,20)', this['ctx']['lineWidth'] = 0x3dc * 0x1 + -0x902 + -0x527 * -0x1;
                    for (let _0x83145e = _0x516ed3 - _0x4bda62['pxlsOutHorizontal']; _0x83145e <= this['canvas']['width']; _0x83145e += _0x516ed3) {
                        this['ctx']['moveTo'](_0x83145e, 0x6de + 0x3e5 + -0xac3), this['ctx']['lineTo'](_0x83145e, this['canvas']['height']);
                    };
                    for (let _0x10a04d = _0x516ed3 - _0x4bda62['pxlsOutVertical']; _0x10a04d <= this['canvas']['height']; _0x10a04d += _0x516ed3) {
                        this['ctx']['moveTo'](0x3 * 0x41f + 0x14a1 * -0x1 + 0x844, _0x10a04d), this['ctx']['lineTo'](this['canvas']['width'], _0x10a04d);
                    };
                    this['ctx']['stroke']();
                };
                this['ctx']['beginPath'](), this['ctx']['lineWidth'] = _0x516ed3 / (0x1759 + 0x446 * -0x3 + -0xa84), this['ctx']['strokeStyle'] = _0x51410c, this['ctx']['rect']((_0x2154c9['width'] - _0x516ed3) / (-0x27 * 0x6b + 0x1b77 + -0xb28), (_0x2154c9['height'] - _0x516ed3) / (0x1cca + -0x26af + -0x3 * -0x34d), _0x516ed3, _0x516ed3), this['ctx']['stroke']();
            }, this['interfaces']['tmps']['drawErrors'] = function(_0x4b4eae = _0x597ad9 ? _0xfb04f2 : _0x21f280) {
                let _0x374702, _0x5c7281;
                _0x5496be['canvas']['width'] = _0x4bda62['width'], _0x5496be['canvas']['height'] = _0x4bda62['height'];
                if (_0x66cb28['length'] === 0x3 * 0x5c2 + -0x1a11 + 0x233 * 0x4) {
                    const _0x356895 = _0x66cb28[0x2ac + -0x170 + 0x4 * -0x4f];
                    _0x374702 = _0x356895['ctx']['getImageData'](_0x4bda62['xLeft'] - _0x356895['x1'], _0x4bda62['yTop'] - _0x356895['y1'], _0x4bda62['width'], _0x4bda62['height']);
                } else {
                    for (let _0x1f4c11 of _0x66cb28) _0x5496be['ctx']['drawImage'](_0x1f4c11['canvas'], _0x4bda62['xLeft'] - _0x1f4c11['x1'], _0x4bda62['yTop'] - _0x1f4c11['y1'], _0x4bda62['width'], _0x4bda62['height'], 0x1 * -0x125b + 0xe * -0x16e + 0x1 * 0x265f, -0xc1a * -0x1 + -0x4a1 + -0x779 * 0x1, _0x4bda62['width'], _0x4bda62['height']);
                    _0x374702 = _0x5496be['ctx']['getImageData'](0x21b1 + -0x1 * -0x1781 + 0x2 * -0x1c99, -0xa * -0x391 + -0x1 * -0x1bc1 + 0xcaf * -0x5, _0x5496be['canvas']['width'], _0x5496be['canvas']['height']);
                };
                _0x5c7281 = _0x374702['data'];
                let _0x2ddac5, _0x30191e, _0x147ed5, _0x3eb583 = 0x8 * -0x46a + 0x1a96 + 0x8ba,
                    _0x38ac2d = _0x4bda62['height'] + _0x4bda62['yTop'],
                    _0x2d5f34 = _0x4bda62['width'] + _0x4bda62['xLeft'];
                if (_0x4bda62['yTop'] > _0x38ac2d || _0x4bda62['xLeft'] > _0x2d5f34) throw new Error('[Detector] wrong sizes');
                for (_0x147ed5 = _0x4bda62['yTop']; _0x147ed5 !== _0x38ac2d; _0x147ed5++) {
                    for (_0x30191e = _0x4bda62['xLeft']; _0x30191e !== _0x2d5f34; _0x30191e++, _0x3eb583 += 0x1e2a + -0xa14 + -0x1412) {
                        _0x2ddac5 = _0x19d66a['getPixel'](_0x30191e + (-0x3e6 + 0xc85 + -0x89e), _0x147ed5 + (-0x2235 + 0x3 * -0x8ab + 0x1 * 0x3c37));
                        if (_0x5c7281[_0x3eb583 + (0x3 * -0x94f + 0x6ed + 0x1503)] === 0x23ce + 0x1 * -0x4d0 + 0x1efe * -0x1) continue;
                        if (_0x2ddac5 === null) {
                            _0x5c7281[_0x3eb583] = _0x5c7281[_0x3eb583 + (-0x9b8 + 0x1fa + 0x7bf)] = _0x5c7281[_0x3eb583 + (0x138a * 0x1 + 0x3 * -0x8b + 0x11e7 * -0x1)] = _0x5c7281[_0x3eb583 + (-0xd77 + 0x24c2 + -0x5d2 * 0x4)] = 0x1a2e + 0x16d * 0xe + 0x2e24 * -0x1, _0x19d66a['loadChunk'](..._0x19d66a['absToTiled'](_0x30191e, _0x147ed5));
                            continue;
                        };
                        _0x48dc21['same'](_0x2ddac5, [_0x5c7281[_0x3eb583], _0x5c7281[_0x3eb583 + (0x25a * -0xb + -0x53 * -0xb + 0x476 * 0x5)], _0x5c7281[_0x3eb583 + (-0x1c56 + -0x25a * 0x7 + 0x2cce)]]) ? _0x5c7281[_0x3eb583] = _0x5c7281[_0x3eb583 + (0x1984 + -0x532 + 0x2e7 * -0x7)] = _0x5c7281[_0x3eb583 + (-0x22d2 + 0x8 * -0x3d6 + -0x4ae * -0xe)] = (_0x5c7281[_0x3eb583] + _0x5c7281[_0x3eb583 + (-0x298 * 0xc + -0x1 * -0x1e29 + 0xf8)] + _0x5c7281[_0x3eb583 + (-0xc2 * -0x1 + 0xcc1 * 0x3 + 0x2703 * -0x1)]) / (-0x1a3c + -0x229e + 0x3cdd) : (_0x5c7281[_0x3eb583] = 0x1f7f + -0xa1d + -0x1463 * 0x1, _0x5c7281[_0x3eb583 + (-0x1477 + 0x65 * -0x32 + -0x69 * -0x62)] = _0x5c7281[_0x3eb583 + (0x2659 * -0x1 + 0x176f + 0x3bb * 0x4)] = -0x2 * -0x340 + -0x2 * -0xeb1 + -0x23e2);;
                    };
                };
                let _0x16a053 = _0x19d66a['getChunksInZone'](_0x4bda62['xLeft'], _0x4bda62['yTop'], _0x4bda62['xLeft'] + _0x4bda62['width'], _0x4bda62['yTop'] + _0x4bda62['height']);
                _0x19d66a['setAsUsing'](_0x16a053);
                _0x4b4eae === 0x1 * -0x2513 + -0x3d * -0x5b + 0xf65 ? this['ctx']['putImageData'](_0x374702, -0x87c + -0x2 * -0xbe9 + 0xf56 * -0x1, -0x4ca * -0x7 + 0x1771 + -0x38f7 * 0x1) : (_0x5496be['ctx']['putImageData'](_0x374702, -0x182 * 0x5 + 0x48b * 0x4 + -0xaa2, 0x2e4 + -0x114d + 0xe69), this['clear'](), this['ctx']['drawImage'](_0x5496be['canvas'], -_0x4bda62['pxlsOutHorizontal'], -_0x4bda62['pxlsOutVertical'], _0x4bda62['width'] * _0x4b4eae, _0x4bda62['height'] * _0x4b4eae));;
            }, this['setOpacity'] = function(_0x3b5aba) {
                this['box']['style']['backgroundColor'] = 'rgba(0,0,0,' + _0x3b5aba + ')';
            }, this['setWidth'] = function(_0x4c8bed) {
                this['window']['style']['width'] = _0x4c8bed;
            }, this['setHeight'] = function(_0x2c09bd) {
                this['window']['style']['height'] = _0x2c09bd;
            }, this['onNoTmps'] = function() {
                _0x538246 = ![], this['setWidth'](_0x4625e8 + '%'), this['setHeight']('28px'), this['box']['style']['display'] = 'none', this['text']['style']['display'] = 'block', this['text']['style']['cursor'] = 'normal', this['text']['innerText'] = 'Bot lives matter';
            }, this['onTmpsExist'] = function() {
                _0x538246 = !![], this['setWidth'](_0x4625e8 + '%'), this['setHeight'](_0x41bf49 + '%'), this['box']['style']['display'] = 'block', this['text']['style']['display'] = 'none';
            }, this['open'] = function() {
                _0x3a430b['set']('mapClosed', ![]), this['setWidth'](_0x4625e8 + '%'), this['setHeight'](_0x41bf49 + '%'), this['box']['style']['display'] = 'block', this['config']['style']['display'] = 'block', this['text']['style']['display'] = 'none', this['panel']['container']['style']['display'] = 'block', _0x5d9f07();
            }, this['close'] = function() {
                _0x3a430b['set']('mapClosed', !![]), this['setWidth']('auto'), this['setHeight']('28px'), this['box']['style']['display'] = 'none', this['config']['style']['display'] = 'none', this['text']['style']['display'] = 'block', this['text']['innerText'] = 'Minimap', this['text']['style']['cursor'] = 'pointer', this['panel']['container']['style']['display'] = 'none', _0x5d9f07();
            };
        }();
        setTimeout(() => {
            if (_0x272acd('minimap')) {
                alert('Включено два или более скриптов с миникартой. Пожалуйста, отключите все остальные скрипты, оставив только этот, для корректной работы кода.\x0a\x0dTwo or more minimap scripts included. Please disable all other scripts, leaving only this one for the code to work correctly.');
                return;
            };
        }, 0x11a7 * -0x1 + -0x1dda * 0x1 + -0x77 * -0x77);
        let _0x4bda62 = {
            'updateSizes': function(_0xbbc25b = _0x597ad9 ? _0xfb04f2 : _0x21f280) {
                this['width'] = ~~(_0x2154c9['width'] / _0xbbc25b) | 0x20f1 + 0x26 * -0xbf + -0x496, this['height'] = ~~(_0x2154c9['height'] / _0xbbc25b) | 0x25b5 + -0x1cdf + -0x8d5, this['pxlsOutHorizontal'] = _0xbbc25b - (_0x2154c9['width'] - this['width'] * _0xbbc25b) / (-0x15d3 + 0x6a7 * -0x5 + -0x148 * -0x2b), this['pxlsOutVertical'] = _0xbbc25b - (_0x2154c9['height'] - this['height'] * _0xbbc25b) / (0x2255 + -0x1a55 + -0x7fe), this['xLeft'] = _0x37866d['worldX'] - (this['width'] + (-0xaf3 + -0x1 * -0x1d4d + 0xb * -0x1ab)) / (0x13 * -0xd + 0x5 * -0x5e3 + 0x458 * 0x7), this['yTop'] = _0x37866d['worldY'] - (this['height'] + (0xf67 + -0x1 * -0xa48 + -0x19ae)) / (-0x111 * -0x1f + 0x3 * -0x435 + -0x146e), this['width'] += 0x1b75 + -0x10b * 0x7 + -0x2 * 0xa13, this['height'] += -0x1d0a + 0x2628 + -0x91c, _0x5999da = this['width'] >>> 0x1294 + -0x355 * -0x3 + -0x1c92, _0x5d41ee = this['height'] >>> -0x136d * 0x2 + 0x61 * -0x45 + 0x4100;
            }
        };
        fetch(_0x475750)['then'](_0x8186bd => _0x8186bd['ok'] ? _0x8186bd['text']() : new Error(''))['then'](_0x3b5ad3 => {
            document['head']['appendChild'](_0x5f15a7({
                'type': 'script',
                'html': _0x3b5ad3
            }));
        })['catch'](() => 0x17 * 0x8b + 0x1fe4 + -0x21d * 0x15), fetch(encodeURI(_0x455693))['then'](_0x569623 => _0x569623['json']())['then'](_0x131c33 => {
            _0x1a1f77 = _0x131c33, console['log']('Loaded factions', _0x1a1f77);
            if (!_0x3a3064 && localStorage['injection']) {
                try {
                    const _0x390bda = JSON['parse'](localStorage['injection']);
                    Object['assign'](_0x1a1f77, _0x390bda), console['log']('Injection ', _0x390bda);
                } catch (_0x239daa) {
                    alert('Ошибка при парсинге инжектированных фракций \x0a' + _0x239daa);
                };
            };
            _0x8bf6b2(_0x131c33, _0x46cb2a => _0x46cb2a['chunks'] = 'chunks' in _0x46cb2a && _0x46cb2a['chunks'] == 'true'), _0x2f56f2 = _0x1a1f77[_0x3a430b['get']('faction')] ? _0x3a430b['get']('faction') : Object['keys'](_0x1a1f77)[-0x2537 * 0x1 + -0x1 * 0xbe6 + 0x311d], _0x176c98(), _0x8bf6b2(_0x1a1f77, (_0x59872d, _0x3fb848) => {
                _0x4bad01['addFaction'](_0x3fb848, _0x59872d['color'], function() {
                    _0x4bad01['factions'][_0x2f56f2]['style']['fontWeight'] = 'normal', this['style']['fontWeight'] = 'bold', _0x3a430b['set']('faction', _0x2f56f2 = _0x3fb848), _0x176c98();
                });
            }), _0x4bad01['factions'][_0x2f56f2]['style']['fontWeight'] = 'bold';
        })['catch'](console['error']), _0x272acd('hide-map')['onclick'] = () => _0x2154c9['close'](), _0x2154c9['text']['onclick'] = () => {
            if (_0x3a430b['get']('mapClosed')) _0x2154c9['open']();
            _0x2f6f20();
        }, _0x272acd('zoom-plus')['addEventListener'](_0x54cc3c ? 'touchstart' : 'mousedown', _0x131d36 => {
            _0x131d36['preventDefault'](), _0xd6b06f = !![], _0x408ff3 = ![], _0x1d4ce1();
        }, ![]), _0x272acd('zoom-plus')['addEventListener'](_0x54cc3c ? 'touchend' : 'mouseup', () => {
            return _0xd6b06f = ![], _0x3a430b['set']('zoomlevel', _0x21f280), ![];
        }), _0x272acd('zoom-minus')['addEventListener'](_0x54cc3c ? 'touchstart' : 'mousedown', _0x4b3322 => {
            _0x4b3322['preventDefault'](), _0x408ff3 = !![], _0xd6b06f = ![], _0xf1bf98();
        }, ![]), _0x272acd('zoom-minus')['addEventListener'](_0x54cc3c ? 'touchend' : 'mouseup', () => {
            return _0x408ff3 = ![], _0x3a430b['set']('zoomlevel', _0x21f280), ![];
        });
        if (_0x54cc3c) {
            let _0x4924d7 = _0x5f15a7({
                'type': 'canvas',
                'class': 'center'
            });
            _0x4924d7['width'] = _0x4924d7['height'] = -0x81 * -0x3f + -0x243 * -0x4 + -0x28bc, document['body']['appendChild'](_0x4924d7);
            let _0x32b1da = _0x4924d7['getContext']('2d'),
                _0x14187a = document['querySelector'](_0x32b4d7['gameCanvas']),
                _0x431282 = _0x14187a['getContext']('2d');
            const _0xb4ef78 = () => {
                let _0x3c0a13 = _0x32b1da['getImageData'](-0xc19 + -0x79 * 0x2f + 0x2250, 0x170b + -0xe39 + -0x469 * 0x2, _0x4924d7['width'], _0x4924d7['height']),
                    _0x42813f = _0x431282['getImageData'](_0x4924d7['offsetLeft'], _0x4924d7['offsetTop'], _0x4924d7['width'], _0x4924d7['height']),
                    _0x3e143d, _0x26297b, _0x2ff5c6;
                _0x3e143d = _0x4924d7['width'] >>> 0x1a87 * 0x1 + 0x7f4 * -0x2 + -0xa9e;
                for (_0x26297b = 0x79d * 0x4 + 0x9c2 * -0x1 + -0x373 * 0x6; _0x26297b !== _0x4924d7['height']; _0x26297b++) {
                    _0x2ff5c6 = _0x3e143d + _0x26297b * _0x4924d7['width'] << 0xb89 * -0x1 + -0xb9e * 0x1 + 0x1729, _0x3c0a13['data'][_0x2ff5c6] = -0x1f15 + -0x1 * 0x2f5 + 0x1 * 0x2309 - _0x42813f['data'][_0x2ff5c6], _0x3c0a13['data'][_0x2ff5c6 + (-0x34 * 0x1f + 0x1ca + -0x1 * -0x483)] = 0x12d9 + 0x7 * -0x485 + 0xdc9 - _0x42813f['data'][_0x2ff5c6 + (-0x1903 + 0x13c2 + 0x542 * 0x1)], _0x3c0a13['data'][_0x2ff5c6 + (-0x145a + 0x2cb * -0x8 + 0x2ab4)] = 0x162b + 0x4f9 + 0x8b7 * -0x3 - _0x42813f['data'][_0x2ff5c6 + (-0x1278 + 0x9a1 + -0x1 * -0x8d9)], _0x3c0a13['data'][_0x2ff5c6 + (0x1 * 0x1f19 + -0x1 * -0x6dc + -0x12f9 * 0x2)] = 0x1 * -0x1f91 + -0xaa4 + 0x2b34;
                };
                _0x26297b = _0x4924d7['height'] >>> -0x24b * 0xd + 0x16f + 0x5 * 0x5ad;
                for (_0x3e143d = 0x2 * 0x2c7 + 0xa39 * 0x1 + 0x7 * -0x241; _0x3e143d !== _0x4924d7['width']; _0x3e143d++) {
                    _0x2ff5c6 = _0x3e143d + _0x26297b * _0x4924d7['width'] << 0x8b + -0x235b + 0x22d2, _0x3c0a13['data'][_0x2ff5c6] = -0x85a + 0x10c5 + -0x76c - _0x42813f['data'][_0x2ff5c6], _0x3c0a13['data'][_0x2ff5c6 + (-0x89 * -0x3e + -0x1247 + -0xee6)] = -0x18e2 + -0x1bf5 + 0x8f9 * 0x6 - _0x42813f['data'][_0x2ff5c6 + (-0x17c1 * 0x1 + -0x1f09 + 0x437 * 0xd)], _0x3c0a13['data'][_0x2ff5c6 + (-0x2 * -0xfa + -0x116c + 0xf7a)] = -0x1 * -0x1922 + -0x7c6 + 0x3b * -0x47 - _0x42813f['data'][_0x2ff5c6 + (-0x1 * -0x1751 + 0x4f7 + -0x1c46)], _0x3c0a13['data'][_0x2ff5c6 + (0x863 + 0x1 * -0x1b7f + 0x131f)] = 0x218d + 0x5 * -0x1fc + -0x16a2;
                };
                _0x32b1da['putImageData'](_0x3c0a13, 0xf9a * 0x2 + -0x256 + -0x2 * 0xe6f, 0x10c2 + 0x1bbf * 0x1 + -0x2c81);
            };
            _0xb4ef78(), _0x14187a['addEventListener']('touchmove', _0xb4ef78);
            let _0x4a5113 = null,
                _0x12cc2c = null,
                _0x2904a1 = null,
                _0x4818c9;
            setInterval(() => {
                [_0x4a5113, _0x12cc2c] = _0x330146(), _0x2904a1 = _0x5f498d();
                if (_0x37866d['worldX'] !== _0x4a5113 || _0x37866d['worldY'] !== _0x12cc2c || _0x2904a1 !== _0xfb04f2) {
                    _0x4818c9 = _0x2904a1 !== _0xfb04f2, _0x37866d['worldX'] = _0x4a5113, _0x37866d['worldY'] = _0x12cc2c, _0xfb04f2 = _0x2904a1;
                    if (_0x4818c9) _0x2154c9['interfaces']['cover']['draw']();
                    _0xb4ef78(), _0x2f6f20();
                };
            }, 0x72b * -0x1 + 0x1 * -0x298 + 0xa27);
        } else {
            let _0x3aa04c, _0x5f1684;
            window['addEventListener']('mousemove', _0x28d1ba => {
                [_0x3aa04c, _0x5f1684] = _0x330146();
                if (_0x37866d['worldX'] !== _0x3aa04c || _0x37866d['worldY'] !== _0x5f1684) {
                    _0x37866d['worldX'] = _0x3aa04c, _0x37866d['worldY'] = _0x5f1684, _0x37866d['clientX'] = _0x28d1ba['clientX'], _0x37866d['clientY'] = _0x28d1ba['clientY'];
                    if (_0xa26ca1 && _0xfb04f2 > 0x17 * 0x1aa + -0x44b + -0x21f7 * 0x1 + 0.5999999999999996) {
                        let _0x31eb23 = _0x525fe6['getPixelFromTemplates'](_0x37866d['worldX'], _0x37866d['worldY']);
                        if (_0x31eb23 && _0x48dc21['has'](_0x31eb23) && !_0x48dc21['same'](_0x31eb23, _0x235a83)) _0x48dc21['select'](_0x31eb23);
                    };
                    _0x2f6f20();
                };
            }, ![]);
        };
        let _0x4bad01 = new function() {
                let _0x305fd6 = this;
                this['window'] = _0x5f15a7({
                    'type': 'div',
                    'class': 'NLRGeneral center',
                    'style': '\x0a            z-index:1;\x0a            display:none;\x0a            background-color:rgba(0,0,0,0.9);\x0a            color:rgb(250,250,250);\x0a            line-height:32px;\x0a            border-radius:1px;\x0a            border:2px rgba(50,50,50,0.9) solid;\x0a        ',
                    'html': '<div class=\'level\' style=\"border-bottom: 1px rgba(50,50,50,0.9) solid; padding:5px;\">' + '<span></span>' + '<svg class=\"text-button\" style=\"position:fixed; right:0px; margin:9px;\" height=\"16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\" stroke-width=\"1.5\">' + '<path d=\"M 1 1 L 15 15 M 15 1 L 1 15\" fill=\"transparent\" stroke=\"white\"></path>' + '</svg>' + '</div>' + '<div class=\"level\" style=\"line-height:20px; right:0px;\">' + '<div id=\"tabs\" style=\"border-bottom: 1px rgba(50,50,50,0.9) solid;\">' + '</div>' + '<div id=\"content\" style=\"border-bottom: 1px rgba(50,50,50,0.9) solid;\">' + '</div>' + '</div>' + '<footer class=\'level\' style = \"color:grey; font: menu; font-size:11px; padding:5px;\"></footer>'
                }), document['body']['appendChild'](this['window']);
                let _0x58c44c = this['window']['getElementsByClassName']('level');
                this['elements'] = {
                    'title': _0x58c44c[-0xe0e + 0x1fce * -0x1 + 0x2ddc]['getElementsByTagName']('span')[-0x59 * 0x9 + -0x1f3 * 0xd + 0x1c78],
                    'cancel': _0x58c44c[-0x6a0 + 0x136f * -0x2 + -0x9 * -0x50e]['getElementsByTagName']('svg')[0xd15 * 0x1 + -0x1c79 + 0x1 * 0xf64],
                    'footer': _0x58c44c[0x1 * -0x177b + -0x3 * -0x814 + -0xbf],
                    'iconsContainer': _0x272acd('tabs'),
                    'icons': {},
                    'tabContent': _0x272acd('content')
                }, this['activeTab'] = null, this['activateTab'] = function(_0x50fb83) {
                    this['activeTab'] = _0x50fb83, _0x8bf6b2(this['tabs'], (_0x407edc, _0x2a4e2c) => _0x407edc['style']['display'] = _0x2a4e2c === _0x50fb83 ? 'block' : 'none'), _0x8bf6b2(this['elements']['icons'], (_0xa71b3f, _0x5d0033) => _0xa71b3f['style']['textWeight'] = _0x5d0033 === _0x50fb83 ? 'bold' : 'normal');
                }, this['tabs'] = {}, this['addTab'] = function(_0x296f43) {
                    return this['tabs'][_0x296f43] = _0x5f15a7({
                        'type': 'div',
                        'style': 'display:none;',
                        'class': 'sub-settings'
                    }), this['elements']['tabContent']['appendChild'](this['tabs'][_0x296f43]), this['elements']['icons'][_0x296f43] = _0x5f15a7({
                        'type': 'span',
                        'class': 'sub-settings-icon',
                        'text': _0x296f43,
                        'listeners': {
                            'click': this['activateTab']['bind'](this, _0x296f43)
                        }
                    }), this['elements']['iconsContainer']['appendChild'](this['elements']['icons'][_0x296f43]), this['tabs'][_0x296f43];
                }, this['addTab']('factions'), this['addTab']('settings'), this['addTab']('display'), this['display'] = {
                    'width': {},
                    'height': {},
                    'backgroundOpacity': {},
                    'sectorsOpacity': {}
                }, this['tabs']['display']['appendChild'](_0x5f15a7({
                    'type': 'table',
                    'style': 'line-height: 0px;'
                }, [_0x5f15a7({
                    'type': 'tr'
                }, [this['display']['width']['desc'] = _0x5f15a7({
                    'type': 'td',
                    'text': 'Width'
                }), _0x5f15a7({
                    'type': 'td'
                }, [this['display']['width']['input'] = _0x5f15a7({
                    'type': 'input',
                    'listeners': {
                        'input': function() {
                            const _0x124afe = parseInt(this['value']);
                            _0x4625e8 = isNaN(_0x124afe) ? _0x511dd8 : _0x124afe > _0xe44a07 ? _0xe44a07 : _0x124afe < 0x80f + -0x1d7e + -0x55c * -0x4 ? -0x5c6 + -0x9 * -0x13 + -0x28e * -0x2 : _0x124afe, _0x3a430b['set']('minimapWidth', _0x4625e8), _0x421b8a(_0x4625e8, _0x41bf49), _0x5d9f07();
                        },
                        'focus': () => _0x452ec7 = !![],
                        'blur': () => _0x452ec7 = ![]
                    },
                    'attributes': {
                        'maxlength': 0x3,
                        'value': _0x4625e8
                    }
                }), document['createTextNode'](' %')])]), _0x5f15a7({
                    'type': 'tr',
                    'style': 'background-color:rgba(0,0,0,0);'
                }, [this['display']['height']['desc'] = _0x5f15a7({
                    'type': 'td',
                    'text': 'Height'
                }), _0x5f15a7({
                    'type': 'td'
                }, [this['display']['height']['input'] = _0x5f15a7({
                    'type': 'input',
                    'listeners': {
                        'input': function() {
                            let _0x4a2735 = parseInt(this['value']);
                            _0x41bf49 = isNaN(_0x4a2735) ? _0xeb9fa9 : _0x4a2735 > _0x3e6886 ? _0x3e6886 : _0x4a2735 < -0x4 * -0x3a4 + -0x177a + 0x8eb ? 0x565 * 0x5 + 0x5 * -0x183 + -0x1369 : _0x4a2735, _0x3a430b['set']('minimapHeight', _0x41bf49), _0x421b8a(_0x4625e8, _0x41bf49), _0x5d9f07();
                        },
                        'focus': () => _0x452ec7 = !![],
                        'blur': () => _0x452ec7 = ![]
                    },
                    'attributes': {
                        'maxlength': 0x3,
                        'value': _0x41bf49
                    }
                }), document['createTextNode'](' %')])]), _0x5f15a7({
                    'type': 'tr',
                    'style': 'background-color:rgba(0,0,0,0);'
                }, [this['display']['sectorsOpacity']['desc'] = _0x5f15a7({
                    'type': 'td',
                    'text': 'Sectors opacity :'
                }), _0x5f15a7({
                    'type': 'td'
                }, [this['display']['sectorsOpacity']['input'] = _0x5f15a7({
                    'type': 'input',
                    'listeners': {
                        'input': function() {
                            let _0x162172 = parseInt(this['value']);
                            !isNaN(_0x162172) && (_0x3a430b['set']('sectorsOpacity', _0x5402c9 = _0x162172 / (-0x2051 + -0x1566 * 0x1 + 0x361b)), _0x2154c9['interfaces']['sectors']['setOpacity'](_0x5402c9));;
                            _0x5bbb7b();
                        },
                        'focus': () => _0x452ec7 = !![],
                        'blur': () => _0x452ec7 = ![]
                    },
                    'attributes': {
                        'maxlength': 0x3,
                        'value': _0x5402c9 * (-0x1a1c + 0x4 * 0x733 + -0x24c)
                    }
                }), document['createTextNode'](' %')])]), _0x5f15a7({
                    'type': 'tr',
                    'style': 'background-color:rgba(0,0,0,0);'
                }, [this['display']['backgroundOpacity']['desc'] = _0x5f15a7({
                    'type': 'td',
                    'text': 'Sectors opacity :'
                }), _0x5f15a7({
                    'type': 'td'
                }, [this['display']['backgroundOpacity']['input'] = _0x5f15a7({
                    'type': 'input',
                    'listeners': {
                        'input': function() {
                            let _0x27e3aa = parseInt(this['value']);
                            !isNaN(_0x27e3aa) && (_0x3a430b['set']('backgroundOpacity', _0x1b78a7 = _0x27e3aa / (0x41 * 0x88 + 0x1256 * 0x1 + -0x347a)), _0x2154c9['setOpacity'](_0x1b78a7));;
                        },
                        'focus': () => _0x452ec7 = !![],
                        'blur': () => _0x452ec7 = ![]
                    },
                    'attributes': {
                        'maxlength': 0x3,
                        'value': _0x1b78a7 * (0x3 * -0x75f + 0x258f + -0x5e * 0x29)
                    }
                }), document['createTextNode'](' %')])])])), this['options'] = {}, this['addOption'] = function(_0x4e2f77, _0x202dc8) {
                    let _0x228711, _0x5dd78c, _0x580045 = _0x5f15a7({
                        'type': 'div',
                        'class': 'settings-option',
                        'listeners': {
                            'onclick': _0x202dc8
                        }
                    }, [_0x228711 = _0x5f15a7({
                        'type': 'span'
                    }), _0x5dd78c = _0x5f15a7({
                        'type': 'span'
                    })]);
                    return _0x580045['desc'] = _0x228711, _0x580045['button'] = _0x5dd78c, this['tabs']['settings']['appendChild'](_0x580045), this['options'][_0x4e2f77] = _0x580045;
                }, this['addOption']('cursorColor', function() {
                    let _0x7f6da0 = _0x1d1b63['indexOf'](_0x51410c) + (0x4f * 0x2e + 0xca1 + -0x1ad2);
                    if (_0x7f6da0 === _0x1d1b63['length']) _0x7f6da0 = -0x1a02 + 0x66c * 0x4 + -0x29 * -0x2;
                    _0x3a430b['set']('cursorColor', this['button']['innerText'] = this['button']['style']['color'] = _0x51410c = _0x1d1b63[_0x7f6da0]), _0x2154c9['interfaces']['cover']['draw']();
                }), this['addOption']('grid', function() {
                    this['button']['innerText'] = _0x268b42(_0x3a430b['set']('grid', _0x3ce0c7 = !_0x3ce0c7)), _0x2154c9['interfaces']['cover']['draw']();
                }), this['addOption']('theme', () => alert('Will be soon (or no)')), this['addOption']('sectors', function() {
                    this['button']['innerText'] = _0x268b42(_0x3a430b['set']('sectors', _0x4eaeb3 = !_0x4eaeb3));
                    if (!_0x4eaeb3) _0x2154c9['interfaces']['sectors']['clear']();
                    _0x5bbb7b();
                }), this['addOption']('detector', function() {
                    _0x3a430b['set']('detector', _0xc29b2f = !_0xc29b2f), this['button']['innerText'] = _0x268b42(_0xc29b2f), _0x2f6f20(), _0x2154c9['interfaces']['cover']['draw']();
                }), this['addOption']('autoSelect', function() {
                    this['button']['innerText'] = _0x268b42(_0x3a430b['set']('autoSelect', _0xa26ca1 = !_0xa26ca1));
                }), this['addOption']('phantomPxls', function() {
                    this['button']['innerText'] = _0x268b42(_0x3a430b['set']('phantomPxls', _0x2aab1e = !_0x2aab1e));
                }), this['addOption']('buffNote', function() {
                    this['button']['innerText'] = _0x268b42(_0x3a430b['set']('buffNote', _0x5319a1 = !_0x5319a1));
                }), this['addOption']('sync', function() {
                    _0x3a430b['set']('sync', _0x597ad9 = !_0x597ad9), this['button']['innerText'] = _0x268b42(_0x597ad9), _0x2f6f20(), _0x2154c9['interfaces']['cover']['draw']();
                }), this['addOption']('language', () => {
                    let _0x18cd65 = Object['keys'](_0x4c2dc1['languages']),
                        _0x4d61ed = _0x18cd65['indexOf'](_0x4c2dc1['getLanguage']()) + (0x1eb * -0x1 + -0x2051 + 0x6d9 * 0x5);
                    if (_0x4d61ed === _0x18cd65['length']) _0x4d61ed = -0x1074 + -0x39 * 0x11 + 0x143d;
                    _0x3a430b['set']('language', _0x4c2dc1['setLanguage'](_0x18cd65[_0x4d61ed])), this['changeLanguage'](_0x4c2dc1['getLanguage']());
                }), this['options']['cursorColor']['button']['innerText'] = _0x51410c, this['options']['cursorColor']['button']['style']['color'] = _0x51410c, this['options']['grid']['button']['innerText'] = _0x268b42(_0x3ce0c7), this['options']['theme']['button']['innerText'] = _0x40eb39['getTheme'](), this['options']['sectors']['button']['innerText'] = _0x268b42(_0x4eaeb3), this['options']['detector']['button']['innerText'] = _0x268b42(_0xc29b2f), this['options']['autoSelect']['button']['innerText'] = _0x268b42(_0xa26ca1), this['options']['phantomPxls']['button']['innerText'] = _0x268b42(_0x2aab1e), this['options']['buffNote']['button']['innerText'] = _0x268b42(_0x5319a1), this['options']['sync']['button']['innerText'] = _0x268b42(_0x597ad9), this['options']['language']['button']['innerText'] = _0x4c2dc1['getLanguage'](), this['elements']['cancel']['addEventListener']('click', () => _0x4bad01['window']['style']['display'] = 'none'), this['changeLanguage'] = function(_0x3c922c) {
                    _0x4c2dc1['setLanguage'](_0x3c922c), this['options']['language']['button']['innerText'] = _0x4c2dc1['getLanguage'](), this['elements']['title']['innerHTML'] = _0x4c2dc1['title'], _0x8bf6b2(_0x4c2dc1['options'], (_0x43174c, _0x10bc2b) => {
                        this['options'][_0x10bc2b] && (this['options'][_0x10bc2b]['desc']['innerText'] = _0x43174c);
                    }), _0x8bf6b2(_0x4c2dc1['display'], (_0x36d13c, _0x102eec) => {
                        this['display'][_0x102eec] && (this['display'][_0x102eec]['desc']['innerText'] = _0x36d13c);
                    }), this['elements']['footer']['innerHTML'] = _0x4c2dc1['footer'], this['updateTitles']();
                }, this['updateTitles'] = function() {
                    _0x8bf6b2(_0x4c2dc1['optionsTitles'], (_0x2d02a5, _0x39f622) => {
                        this['options'][_0x39f622] && this['options'][_0x39f622]['setAttribute']('title', _0x2d02a5);
                    });
                }, this['clearFactions'] = () => {
                    this['tabs']['factions']['innerHTML'] = '', this['factions'] = {};
                }, this['factions'] = {}, this['addFaction'] = function(_0x4fbac9, _0x5e975d, _0x5410d4) {
                    this['factions'][_0x4fbac9] = _0x5f15a7({
                        'type': 'div',
                        'class': 'text-button',
                        'style': 'color:' + _0x5e975d + '; padding-left:5px;',
                        'text': _0x4fbac9,
                        'listeners': {
                            'click': _0x5410d4
                        }
                    }), this['tabs']['factions']['appendChild'](this['factions'][_0x4fbac9]);
                }, this['setTheme'] = function(_0x3f762a) {
                    _0x40eb39['setTheme'](_0x3f762a), this['options']['theme']['button']['innerText'] = _0x3f762a, _0x40eb39['dynamicStyleElement']['innerHTML'] = _0x40eb39['html'];
                };
            }(),
            _0x46a6cc = new _0x3216d6();
        _0x4bad01['addTab']('plugins'), _0x4bad01['tabs']['plugins']['style']['overflowY'] = 'scroll', _0x4bad01['tabs']['plugins']['style']['display'] = 'none', _0x4bad01['elements']['icons']['plugins']['style']['display'] = 'none', _0x46a6cc['loadData'](_0x5afbd0)['then'](() => {
            console['log']('Plugins loaded', _0x46a6cc);
            let _0xd80972 = [];
            _0x8bf6b2(_0x46a6cc['plugins'], _0x925496 => {
                _0xd80972['push'](_0x5f15a7({
                    'type': 'div',
                    'class': 'plugin'
                }, [_0x5f15a7({
                    'type': 'div',
                    'style': 'font-size: 15px; font-size: 17px;',
                    'text': _0x925496['name']
                }), _0x5f15a7({
                    'type': 'div',
                    'style': 'margin-left: 2.5%; color: grey;'
                }, [_0x5f15a7({
                    'type': 'div',
                    'text': _0x925496['desc']
                }), _0x5f15a7({
                    'type': 'div'
                }, [document['createTextNode']('Included: '), _0x5f15a7({
                    'type': 'input',
                    'attributes': {
                        'type': 'checkbox',
                        'checked': _0x4f037f['includes'](_0x925496['name'])
                    },
                    'listeners': {
                        'onclick': _0x112904(_0x925496)
                    }
                })])])])), _0xd80972['push'](_0x5f15a7({
                    'type': 'hr'
                }));

                function _0x112904(_0x54680c) {
                    return function() {
                        if (this['checked']) {
                            if (!_0x4f037f['includes'](_0x54680c['name'])) _0x4f037f['push'](_0x54680c['name']);
                        } else {
                            if (_0x4f037f['includes'](_0x54680c['name'])) _0x4f037f['splice'](_0x4f037f['indexOf'](_0x54680c['name']), -0xcee * 0x1 + -0x1735 * 0x1 + 0x2424);
                        };
                        _0x3a430b['save']();
                    };
                };
            });
            if (_0xd80972['length']) _0xd80972['pop']();
            _0xd80972['forEach'](_0x59e5fd => _0x4bad01['tabs']['plugins']['appendChild'](_0x59e5fd)), _0x8bf6b2(_0x46a6cc['plugins'], _0x47d43b => {
                console['log']('Load plugin\x0aname: ' + _0x47d43b['name'] + '\x0asrc: ' + _0x47d43b['src']), _0x47d43b['load']();
            });
        })['catch'](console['error']), _0x4bad01['changeLanguage'](_0x4c2dc1['getLanguage']()), _0x4bad01['activateTab']('settings'), _0x4bad01['setTheme'](_0x40eb39['theme']), window['addEventListener']('resize', _0x5d9f07);
        if (!_0x54cc3c && !_0x3a3064) window['addEventListener']('keydown', ({
            keyCode: _0x23e9fa
        }) => {
            switch (_0x23e9fa) {
                case -0x1722 + 0x1 * 0x657 + -0x135 * -0xe:
                    _0x4bad01['window']['style']['display'] = 'none';
                    break;
                case -0x1272 + -0xa81 * -0x3 + -0xce1:
                    if (_0x452ec7) return;
                    _0x3a430b['set']('debug', _0x469fda = !_0x469fda) ? console['log']('Debug is enabled') : console['log']('Debug is off');
                    break;
                case -0x1fc9 + -0x2 * -0xe4b + -0x364 * -0x1:
                    if (_0x452ec7) return;
                    if (_0x4bad01['window']['style']['display'] === 'none') _0x4bad01['window']['style']['display'] = 'block', _0x4bad01['activateTab']('factions');
                    else {
                        if (_0x4bad01['activeTab'] === 'factions') _0x4bad01['window']['style']['display'] = 'none';
                        else _0x4bad01['activateTab']('factions');
                    };
                    break;
                case 0x569 + 0x185 * 0xd + -0xc7c * 0x2:
                    if (_0x452ec7) return;
                    if (_0x4bad01['window']['style']['display'] === 'none') _0x4bad01['window']['style']['display'] = 'block', _0x4bad01['activateTab']('settings');
                    else {
                        if (_0x4bad01['activeTab'] === 'settings') _0x4bad01['window']['style']['display'] = 'none';
                        else _0x4bad01['activateTab']('settings');
                    };
                    break;
                case -0x1859 + 0x24ac + -0x2 * 0x610:
                    if (_0x452ec7) return;
                    if (_0x4bad01['window']['style']['display'] === 'none') _0x4bad01['window']['style']['display'] = 'block', _0x4bad01['activateTab']('display');
                    else {
                        _0x4bad01['activeTab'] === 'display' ? _0x4bad01['window']['style']['display'] = 'none' : _0x4bad01['activateTab']('display');;
                    };
                    break;
                case -0x2041 + 0x2 * 0x114d + -0x225:
                    if (_0x452ec7) return;
                    _0x4bad01['options']['detector']['desc']['click']();
                    break;
            };
        });
        _0x2154c9['interfaces']['sectors']['setOpacity'](_0x5402c9), _0x2154c9['setOpacity'](_0x1b78a7), _0x3a430b['get']('mapClosed') ? _0x2154c9['close']() : _0x2154c9['open']();
        if (window['mapModules'] && window['mapModules']['length']) {
            for (let _0x412166 = 0x25fc + 0x218 + -0x2814; _0x412166 !== window['mapModules']['length']; _0x412166++) {
                _0x4e78b7(window['mapModules'][_0x412166]), window['mapModules']['splice'](_0x412166, -0xd5c + 0x21d3 + -0x123 * 0x12), _0x412166--;
            };
        };
        window['initModule'] = _0x4e78b7;

        function _0x176c98() {
            return new Promise((_0x14134d, _0x3c298e) => {
                let _0x36188b = encodeURI(_0x1a1f77[_0x2f56f2]['data']);
                console['log']('Updating Template List\x0aFaction : ' + _0x2f56f2 + '\x0aURL : ' + _0x36188b), _0x525fe6['clear'](), _0x3c78a7['clear'](), fetch(_0x36188b)['then'](_0x48980a => _0x48980a['json']())['then'](_0x1542b0 => {
                    _0x41d9b3(_0x1542b0), console['log']('Update completed', _0x525fe6, _0x3c78a7);
                })['catch'](console['error']);
            });
        };

        function _0x41d9b3(_0x7dca7a) {
            _0x8bf6b2(_0x7dca7a, (_0x4e0909, _0x466939) => {
                _0x4e0909 = Object['assign'](_0x4e0909, {
                    'name': _0x466939,
                    'src': encodeURI(_0x1a1f77[_0x2f56f2]['images'] + _0x466939 + '.png')
                }), (_0x4e0909['type'] === 'sector' ? _0x3c78a7 : _0x525fe6)['add'](new _0x36c151(_0x4e0909));
            });
        };

        function _0x1d4ce1() {
            if (!_0xd6b06f) return;
            _0x597ad9 && (_0x3a430b['set']('sync', _0x597ad9 = ![]), _0x21f280 = _0xfb04f2, _0x4bad01['options']['sync']['button']['innerText'] = _0x268b42(_0x597ad9));;
            _0x21f280 *= 0x52 * 0x61 + -0x2238 + 0x327 + 0.10000000000000009;
            if (_0x21f280 > 0x979 + -0x394 * 0x3 + 0x5 * 0x47) return _0x21f280 = -0x1730 + -0x4 * -0x641 + -0x1b4 * 0x1;
            _0x2154c9['interfaces']['cover']['draw'](), _0x2f6f20(), setTimeout(_0x1d4ce1, _0x305aaf);
        };

        function _0xf1bf98() {
            if (!_0x408ff3) return;
            _0x597ad9 && (_0x3a430b['set']('sync', _0x597ad9 = ![]), _0x21f280 = _0xfb04f2, _0x4bad01['options']['sync']['button']['innerText'] = _0x268b42(_0x597ad9));;
            _0x21f280 /= -0x8b9 + 0x1 * 0x16b + -0x74f * -0x1 + 0.10000000000000009;
            if (_0x21f280 < -0x1 * -0x17af + 0x22b * -0x1 + -0x1583) return _0x21f280 = -0x210a * -0x1 + 0x10 * -0xe9 + 0x1279 * -0x1;
            _0x2154c9['interfaces']['cover']['draw'](), _0x2f6f20(), setTimeout(_0xf1bf98, _0x305aaf);
        };

        function _0x362b62(_0x569ab5) {
            let _0xf09ea6 = _0x569ab5['getTemplatesAtZone'](_0x37866d['worldX'] - _0x5999da, _0x37866d['worldY'] - _0x5d41ee, _0x37866d['worldX'] + _0x5999da, _0x37866d['worldY'] + _0x5d41ee);
            return _0xf09ea6['forEach'](_0x25930f => {
                _0x25930f['status'] === _0x36c151['UNLOADED'] && _0x25930f['load']()['then'](() => {
                    console['log']('Template ' + _0x25930f['name'] + ' loaded'), console['dir'](_0x25930f);
                })['catch'](_0x4a04d6 => {
                    console['error']('Can\'t load template'), console['error'](_0x4a04d6);
                });
            }), _0xf09ea6['filter'](_0x5111d5 => _0x5111d5['status'] === _0x36c151['LOADED']);
        };

        function _0x2f6f20() {
            if (_0x3a430b['get']('mapClosed')) return;
            _0x66cb28 = _0x362b62(_0x525fe6);
            if (_0x4eaeb3) _0x113508 = _0x362b62(_0x3c78a7);
            else _0x113508 = [];
            if (_0x66cb28['length'] || _0x113508['length']) {
                !_0x538246 && _0x2154c9['onTmpsExist']();;
                _0x1c8c7c && (_0x1c8c7c = ![], window['requestAnimationFrame'](() => {
                    _0x5bbb7b(), _0x1c8c7c = !![];
                }));;
            } else {
                _0x538246 && _0x2154c9['onNoTmps']();;
            };
        };

        function _0x5bbb7b() {
            _0x4bda62['updateSizes']();
            _0xc29b2f ? _0x2154c9['interfaces']['tmps']['drawErrors']() : _0x2154c9['interfaces']['tmps']['draw'](_0x66cb28);;
            _0x4eaeb3 && _0x2154c9['interfaces']['sectors']['draw'](_0x113508);;
        };

        function _0x421b8a(_0x13a52d, _0x1b3af8) {
            _0x538246 && (_0x2154c9['setWidth'](_0x4625e8 + '%'), _0x2154c9['setHeight'](_0x41bf49 + '%'));;
        };

        function _0x1ebddc() {
            _0xfb04f2 = _0x5f498d(), _0x2154c9['interfaces']['cover']['draw'](), _0x2f6f20();
        };

        function _0x5d9f07() {
            Array['from'](_0x2154c9['box']['childNodes'])['forEach'](_0x5cee68 => {
                _0x5cee68['width'] = _0x5cee68['offsetWidth'], _0x5cee68['height'] = _0x5cee68['offsetHeight'];
            }), _0xc1bb73(_0x2154c9['interfaces']['tmps']['ctx'], ![]), _0xc1bb73(_0x2154c9['interfaces']['sectors']['ctx'], ![]), _0x2154c9['interfaces']['cover']['draw'](), _0x2f6f20();
        };

        function _0x5f498d() {
            if (_0x3a3064) return -0x1ace + 0x183b * -0x1 + 0x330e;
            let _0xcb7bc0 = +window['location']['hash']['match'](_0x4b1364)[-0x26f6 + -0x9b3 * 0x1 + -0x30ab * -0x1];
            return _0xcb7bc0 > 0xe5b + -0x4f * -0x33 + -0x1 * 0x1e0e ? (_0xcb7bc0 / (0x1b97 + -0x1a47 + -0x146)) ** (0x262d + -0xfe7 + -0x1644) : _0xcb7bc0 ** (0x31 * 0xbf + 0x1 * -0x1f37 + -0x558 + 0.1) || 0x10a8 + -0x1 * 0xac0 + -0x5e7;
        };

        function _0x330146() {
            return _0x60fd6a['innerText']['match'](_0x4b1364)['map'](_0x5dc0c5 => +_0x5dc0c5);
        };

        function _0x4e78b7(_0x54b466) {
            _0x54b466['call'](window, {
                'minimap': _0x2154c9,
                'settings': _0x4bad01,
                'mouse': _0x37866d,
                'palette': _0x48dc21,
                'chunkInterface': _0x19d66a,
                'templates': _0x525fe6,
                'sectors': _0x3c78a7,
                'ws': _0x550192,
                'uo': _0x3a430b,
                'BigMessage': _0x32b214,
                'functions': _0x2bd52f('./utils/functions')
            });
        };
    }, {
        './mapConfig.json': 0x2,
        './resources/canvas.json': 0x3,
        './resources/constants.json': 0x4,
        './resources/i18n': 0x5,
        './resources/links.json': 0x6,
        './resources/selectors.json': 0x7,
        './resources/style': 0x8,
        './utils/BigMessage': 0x9,
        './utils/Chunk': 0xa,
        './utils/Palette': 0xb,
        './utils/Plugins': 0xc,
        './utils/Template': 0xd,
        './utils/TemplatesInterface': 0xe,
        './utils/UserOptions': 0xf,
        './utils/WSTemplate': 0x11,
        './utils/functions': 0x12
    }],
    0x2: [function(_0x2ae660, _0x313975, _0x2c54c2) {
        _0x313975['exports'] = {
            'VERSION': '2.7.2.4',
            'CURSOR_COLORS': ['Black', 'Gray', 'White', 'Fuchsia', 'Red', 'Yellow', 'Lime', 'SpringGreen', 'Aqua', 'Blue'],
            'DEFAULT_PLUGINS': ['Buff Notifications'],
            'debug': !![],
            'BASIC_MODE': ![]
        };
    }, {}],
    0x3: [function(_0x2d9369, _0xdae7e2, _0x2a09f5) {
        _0xdae7e2['exports'] = {
            'CHUNK_SIZE': 0x100,
            'COLORS': [
                [-0x4f7 * 0x7 + 0x27 * -0x58 + 0x3 * 0x1051, -0x180 * 0x18 + -0x1e96 + 0x4379, 0x10b0 + 0x583 + -0xec * 0x17],
                [-0x1443 + -0x7c8 + -0xe85 * -0x2, 0x709 + 0xb3f * -0x1 + 0x535, -0x1 * 0x21af + 0x1efc + -0x1 * -0x3b2],
                [0x26c3 + 0x3eb * 0x4 + -0x3570, 0x7 * 0x416 + 0x6c6 * -0x3 + -0x749, 0x7ba + 0x56 * 0x2a + -0x61 * 0x37],
                [0x2126 + 0x2 * 0xcce + -0x39de, -0x18da + -0x3 * 0x121 + -0x1d21 * -0x1, -0x216 + 0x61 * -0x25 + 0x10ff],
                [-0x4 * -0x821 + 0x1f7f * -0x1 + -0x41, 0x1a3 * -0x3 + -0x23d7 + 0x2984, -0x26fc + 0xc8 * -0x2 + -0x2 * -0x14a8],
                [0x1659 + 0x15cd * 0x1 + 0xe8a * -0x3, 0x193b * -0x1 + 0x7 * -0x38 + 0x89 * 0x33, -0xd * -0x1e1 + 0x2593 + -0x3d78],
                [-0x14b0 + 0x1d * -0x6d + 0x6ab * 0x5, 0x110f + -0x1 * 0x427 + -0xc9a * 0x1, -0xa2a + -0x1f43 * -0x1 + 0x14cb * -0x1],
                [0x2 * 0x2af + 0x175c + -0x1 * 0x1cba, -0x103c * -0x2 + -0x1 * -0x829 + -0x28a1 * 0x1, 0x3 * -0x1cb + -0x667 * 0x4 + 0x1efd],
                [-0x671 + 0x2342 + 0x7 * -0x3fb, 0x218f + 0x1e4 * -0xe + -0x332 * 0x2, -0x297 + -0x1 * 0x7bf + 0xb04],
                [0x12dd + 0xc73 * 0x1 + -0x1e51, 0x3ca + -0xa08 + 0x6e5, -0x11 * -0x5e + 0xf4e + -0x14bb],
                [-0x696 * 0x3 + 0x16f * -0xb + 0x2486, 0xa9 * -0x2e + 0x2142 + -0x290, 0x1b2 * -0x1 + 0x62 * -0x63 + -0x6 * -0x6b7],
                [-0x1 * -0x1a11 + 0x1ea0 + -0x37b2, -0x266f + -0x11b * 0xb + 0x32fd, 0x110d + 0x4dc + -0xa2 * 0x22],
                [-0xcb9 + -0x24a8 + -0x14a * -0x27, 0x472 * 0x5 + -0x1714 + -0xda * -0x1, -0x26e5 + -0x3 * 0xaee + 0x47af],
                [0x125 * 0x15 + -0x2 * 0x3e2 + -0xfab, 0xf2 + 0x10f8 + 0x2 * -0x8f5, -0x943 + -0x3fb + -0x6 * -0x235],
                [-0x1 * 0x80b + -0x5 * 0x7cf + 0x3014, -0x1 * -0x2054 + 0xa81 * 0x2 + -0x34b2, -0x1 * -0x7d4 + -0x1 * -0x5b1 + 0xd25 * -0x1],
                [-0xd83 + 0x15f + -0xd09 * -0x1, -0xc30 + -0x3aa + 0x106f, -0xa47 + -0x3f0 + 0xe37],
                [0x1c6 + 0x601 * 0x1 + -0x727 * 0x1, 0x15 * 0xf + 0x4d6 * -0x7 + -0x3 * -0xb03, -0x871 + -0x2325 + 0x2bd8 * 0x1],
                [-0x23c5 + -0x504 + -0x1 * -0x2929, -0x4a3 * -0x1 + -0x29c * -0x8 + -0x1943, 0x1 * -0x1d95 + -0x95 * 0x2b + -0x36c4 * -0x1],
                [-0x1c7c + -0x19 * -0x10f + 0x2fa, -0x1652 + 0x1700 * -0x1 + 0x5 * 0x93d, 0x1e93 + 0x2383 + 0x2 * -0x20b3],
                [-0x4cd + -0x1ccb + -0x6eb * -0x5, -0x26ca + 0x1 * 0xdb + 0x26e7, 0xa3 * 0x3b + 0x5d * -0x3a + -0xff6],
                [0x18eb + 0x1 * -0x1727 + -0xdf, 0x389 + -0x627 + 0x377, -0x23b7 * 0x1 + 0x1 * -0x20a4 + 0x445b],
                [-0x5d1 + -0x2629 + -0x1647 * -0x2, -0x1ef4 + 0x4bd * 0x7 + -0x157, 0x1edc + -0x821 * -0x4 + -0x3f1c],
                [-0x2018 + -0x201f + -0x29 * -0x191, -0x1a67 + -0x1611 + -0x2 * -0x189b, 0x21c3 + -0x42 * 0x56 + -0x5cb * 0x2],
                [0x17b3 + 0x1 * -0x17db + 0x90, 0xe1e + 0x24cd + -0x3268, 0xf8c * -0x1 + -0x69d + 0x1661],
                [-0x1 * 0x20a9 + 0x1768 + -0x67 * -0x17, -0x1b6c + -0x81d * -0x4 + -0x4a3, 0xe * -0x18 + -0x1cb5 * -0x1 + -0x1b52],
                [-0x647 + 0x1875 * -0x1 + 0xfc3 * 0x2, 0x504 + -0x1 * -0x1df6 + -0x2217, 0x419 * -0x1 + -0x1c3e + 0xfb * 0x22],
                [0x16be + -0x860 * 0x4 + 0xac2, 0x1 * 0x1817 + -0x247 + -0x255 * 0x9, 0x2133 * -0x1 + -0x1 * -0xb47 + 0x16c9],
                [-0xc5 * 0x11 + 0x1054 + -0x33f, 0x1 * 0xf4e + -0xe1f + -0xac, 0x4b8 + -0x172a + 0x1339],
                [0x5cb * 0x4 + 0x14cb + -0x2bf7, 0x1 * -0x371 + 0x1 * -0x10f3 + 0x2 * 0xa32, 0x1f * 0x134 + 0x3 * 0x5bd + 0x1 * -0x3599],
                [0x20aa + -0x13af + -0x671 * 0x2, 0x1 * -0x3a + 0x9 * 0x10 + -0x3d, -0x1681 + 0x65d * 0x1 + 0x1 * 0x1097],
                [-0x1c * -0x7a + 0x125 * 0x1d + -0x2dba, -0x236d + -0x1c * -0x59 + 0x8b5 * 0x3, -0x5 * -0x8d + 0x45 * 0x53 + -0x21 * 0xbc],
                [-0x1 * 0xda3 + 0x1f49 + 0x4 * -0x449, 0x19bb * -0x1 + -0x3 * -0x5b7 + -0x13a * -0x7, 0x1e20 * 0x1 + 0x860 + -0x2600]
            ]
        };
    }, {}],
    0x4: [function(_0x99501c, _0x362ec6, _0x33ee1d) {
        _0x362ec6['exports'] = {
            'MAP_MIN_WIDTH': 0x19,
            'MAP_MAX_WIDTH': 0x32,
            'MAP_MIN_HEIGHT': 0x21,
            'MAP_MAX_HEIGHT': 0x32
        };
    }, {}],
    0x5: [function(_0xf0270e, _0x4d92d5, _0x32a240) {
        const {
            VERSION: _0x51bf43
        } = _0xf0270e('../mapConfig.json');
        _0x4d92d5['exports'] = {
            'ru': {
                'title': 'MLP : Pixel миникарта',
                'options': {
                    'cursorColor': 'Цвет курсора: ',
                    'grid': 'Сетка: ',
                    'theme': 'Тема: ',
                    'detector': 'Детектор ошибок: ',
                    'autoSelect': 'Автовыбор цвета: ',
                    'phantomPxls': 'Фантомные пиксели: ',
                    'buffNote': 'Оповещения при бафе: ',
                    'language': 'Язык: ',
                    'sync': 'Синхронизация зума: ',
                    'sectors': 'Сектора: '
                },
                'display': {
                    'width': 'Ширина: ',
                    'height': 'Высота: ',
                    'sectorsOpacity': 'Видимость секторов: ',
                    'backgroundOpacity': 'Видимость фона: '
                },
                'optionsTitles': {
                    'cursorColor': 'Изменяет цвет выделения центрального пикселя в карте',
                    'grid': 'Включает/отключает отображение сетки между пикселями при сильном увеличении миникарты',
                    'theme': '(не работает)',
                    'detector': 'Переключает режим работы миникарты на отображение ошибок',
                    'autoSelect': 'Включает/отключает автоматический выбор цвета при установке пикселей, в соответствии с шаблоном в миникарте',
                    'phantomPxls': 'Пиксели будут ставиться только для пользователя',
                    'buffNote': 'Пользователь будет оповещаться при бафе на уменьшенный кулдаун',
                    'language': 'Change the language of the minimap',
                    'sync': 'Зум миникарты меняется вместе с зумом игры',
                    'sectors': 'Включает/отключает отображение секторов, выставленных для некоторых шаблонов'
                },
                'notifications': {
                    'eventWin': 'Кулдаун уменьшен вдвое'
                },
                'footer': 'Создано учеными <a style = \"color:aqua;\" href=\"https://vk.com/endlessnight24\">NLR</a> для <a style=\"color:#1992E3;\" href=\"https://vk.com/mlp_pixel\">MLPP</a> | V. ' + _0x51bf43
            },
            'en': {
                'title': 'MLP : Pixel minimap',
                'options': {
                    'cursorColor': 'Cursor color: ',
                    'grid': 'Grid: ',
                    'theme': 'Theme: ',
                    'detector': 'Error detector: ',
                    'autoSelect': 'Auto color selection: ',
                    'phantomPxls': 'Phantom pixels: ',
                    'buffNote': 'Buff notifications: ',
                    'language': 'Language: ',
                    'sync': 'Zoom sync: ',
                    'sectors': 'Sectors: '
                },
                'display': {
                    'width': 'Width: ',
                    'height': 'Height: ',
                    'sectorsOpacity': 'Sectors opacity: ',
                    'backgroundOpacity': 'Background opacity: '
                },
                'optionsTitles': {
                    'cursorColor': 'Изменяет цвет выделения центрального пикселя в карте',
                    'grid': 'Включает/отключает отображение сетки между пикселями при сильном увеличении миникарты',
                    'theme': '(не работает)',
                    'detector': 'Переключает режим работы миникарты на отображение ошибок',
                    'autoSelect': 'Включает/отключает автоматический выбор цвета при установке пикселей, в соответствии с шаблоном в миникарте',
                    'phantomPxls': 'Пиксели будут ставиться только для пользователя',
                    'buffNote': 'Пользователь будет оповещаться при бафе на уменьшенный кулдаун',
                    'language': 'Change the language of the minimap',
                    'sync': 'Зум миникарты меняется вместе с зумом игры',
                    'sectors': 'Включает/отключает отображение секторов, выставленных для некоторых шаблонов'
                },
                'notifications': {
                    'eventWin': 'Cooldown reduced by half'
                },
                'footer': 'Created by <a style = \"color:aqua;\" href=\"https://vk.com/endlessnight24\">NLR</a> scientists for <a style=\"color:#1992E3;\" href=\"https://vk.com/mlp_pixel\">MLPP</a> | V. ' + _0x51bf43
            },
            'tr': {
                'title': 'MLP : Pixel mini Haritası',
                'options': {
                    'cursorColor': 'İmleç rengi: ',
                    'grid': 'Izgara: ',
                    'theme': 'Tema: ',
                    'detector': 'Hata dedektörü: ',
                    'autoSelect': 'Otomatik renk seçme: ',
                    'phantomPxls': 'Phantom pixels: ',
                    'buffNote': 'Buff notifications: ',
                    'language': 'Dil: ',
                    'sync': 'Zoom sync: ',
                    'sectors': 'Sectors: '
                },
                'display': {
                    'width': 'Width: ',
                    'height': 'Height: ',
                    'sectorsOpacity': 'Sectors opacity: ',
                    'backgroundOpacity': 'Background opacity: '
                },
                'optionsTitles': {
                    'cursorColor': 'Изменяет цвет выделения центрального пикселя в карте',
                    'grid': 'Включает/отключает отображение сетки между пикселями при сильном увеличении миникарты',
                    'theme': '(не работает)',
                    'detector': 'Переключает режим работы миникарты на отображение ошибок',
                    'autoSelect': 'Включает/отключает автоматический выбор цвета при установке пикселей, в соответствии с шаблоном в миникарте',
                    'phantomPxls': 'Пиксели будут ставиться только для пользователя',
                    'buffNote': 'Пользователь будет оповещаться при бафе на уменьшенный кулдаун',
                    'language': 'Change the language of the minimap',
                    'sync': 'Зум миникарты меняется вместе с зумом игры',
                    'sectors': 'Включает/отключает отображение секторов, выставленных для некоторых шаблонов'
                },
                'notifications': {
                    'eventWin': 'Cooldown reduced by half'
                },
                'footer': 'Arkadaşlar için <a style = \"color:aqua;\" href=\"https://vk.com/endlessnight24\">NLR</a> Bilim Adamları tarafından oluşturuldu | V. ' + _0x51bf43
            }
        };
    }, {
        '../mapConfig.json': 0x2
    }],
    0x6: [function(_0x4de0f6, _0x12c0ed, _0xead74b) {
        _0x12c0ed['exports'] = {
            'FACTIONS_SRC': 'https://raw.githubusercontent.com/0rphanim/0rphanim.github.io/soupe/factions.json',
            'PLUGINS_SRC': 'https://raw.githubusercontent.com/EndlessNightNLR/minimap-plugins/master/data.json',
            'CODE_INJECTION_SRC': 'https://endlessnightnlr.github.io/test.js',
            'GEAR_ICON_SRC': 'https://endlessnightnlr.github.io/MLPP/gear.png'
        };
    }, {}],
    0x7: [function(_0x215a72, _0x31bf5a, _0x36cbfa) {
        _0x31bf5a['exports'] = {
            'selectedColor': '.selected',
            'coords': '.coorbox',
            'palettebox': '#palettebox',
            'gameCanvas': '.viewport'
        };
    }, {}],
    0x8: [function(_0x3958f8, _0x19ea84, _0xedfa8f) {
        _0x19ea84['exports'] = '\x0a    .text-button{\x0a        cursor:pointer;\x0a    }\x0a    .minimap{\x0a        font-weight:bold;\x0a        line-height:22px;\x0a    }\x0a    .NLRGeneral{\x0a        font-family:arial;\x0a        line-height:normal;\x0a    }\x0a    .NLRGeneral input{\x0a        border-color: rgb(50,50,50);\x0a        background-color: rgba(0,0,0,0);\x0a        color: white;\x0a        width: 30px;\x0a    }\x0a    .minimap-display{\x0a        position:absolute;\x0a        top :0;\x0a        left:0;\x0a        width :100%;\x0a        height:100%;\x0a    }\x0a    .settings-option{\x0a        cursor:pointer;\x0a        padding-left: 5px;\x0a    }\x0a    .settings-option:hover{\x0a        background: linear-gradient(to right, rgba(0,240,240,0.75) 25%, rgba(0,0,0,0) 100%);\x0a        padding-left:10px;\x0a    }\x0a    .sub-settings{\x0a        width:100%;\x0a        height:100%;\x0a        display:inline-block;\x0a    }\x0a    .NLRGeneral td{\x0a        line-height:16px;\x0a        padding: 2px;\x0a        border:0px red solid;\x0a    }\x0a    .NLRGeneral table{\x0a        line-height:16px;\x0a        margin-left:5px;\x0a        padding: 2px;\x0a    }\x0a    .NLRGeneral .plugin{\x0a        padding-left: 2.5%;\x0a    }\x0a    .center{\x0a        position:absolute;\x0a        top :50%;\x0a        left:50%;\x0a        transform:translate(-50%,-50%);\x0a    }\x0a    .minimap-panel-button{\x0a        width: 25px;\x0a        height: 25px;\x0a        padding: 10px;\x0a        background: rgba(0,0,0,0.9);\x0a        border:2px rgba(50,50,50,0.9) solid;\x0a        border-radius:15px;\x0a        -moz-border-radius:15px;\x0a        cursor: pointer;\x0a    }\x0a    .big-message{\x0a        z-index: 9999;\x0a        min-width: 45%;\x0a        max-width: 65%;\x0a        min-height: 50%;\x0a        max-height: 80%;\x0a        border: 2px solid rgba(50, 50, 50, 0.9);\x0a        background-color: rgba(0,0,0,0.9);\x0a    }\x0a    #box{\x0a        position:absolute;\x0a        width:100%;\x0a        height:100%;\x0a        background-color:rgba(0,0,0,0);\x0a        border-left: 1px rgba(50,50,50,0.9) solid;\x0a    }\x0a    #box canvas{\x0a        position:absolute;\x0a        width:100%;\x0a        height:100%;\x0a    }\x0a    #config{\x0a        margin:0;\x0a        padding: 2px;\x0a        position: absolute;\x0a        bottom: 0;\x0a        margin-bottom:1px;\x0a        transform: translate(0,100%);\x0a        width: 100%;\x0a        font-size: 15px;\x0a        background-color: rgba(0,0,0,0.9);\x0a        border: 1px rgba(50,50,50,0.9) solid;\x0a        border-right: none;\x0a    }\x0a    #text{\x0a        position:relative;\x0a        top:0;\x0a        right:0;\x0a        width:auto;\x0a        padding:5px;\x0a        text-align:center;\x0a        background-color:rgba(0,0,0,0.9);\x0a        border-left:1px rgba(50,50,50,0.9) solid;\x0a        border-bottom:1px rgba(50,50,50,0.9) solid;\x0a    }\x0a    #settings-button{\x0a        cursor:pointer;\x0a    }\x0a    #sub-map-panel{\x0a        position:absolute;\x0a        top:0;\x0a        left:0;\x0a        transform: translate(-100%);\x0a        margin-top:5px;\x0a        margin-left:-5px;\x0a    }\x0a';
    }, {}],
    0x9: [function(_0x533446, _0x143f79, _0x1cf809) {
        const {
            factory: _0x23ecfe
        } = _0x533446('./functions');
        _0x143f79['exports'] = class {
            constructor() {
                this['body'] = _0x23ecfe({
                    'type': 'div',
                    'class': 'NLRGeneral center big-message',
                    'style': '\x0a\x09\x09\x09\x09display: none;\x0a\x09            color:rgb(250,250,250);\x0a\x09            background-color: rgba(0,0,0,0.9);\x0a\x09            border-radius:1px;\x0a\x09\x09\x09'
                }, [_0x23ecfe({
                    'type': 'div',
                    'style': 'border-bottom: 1px rgba(50,50,50,0.9) solid; line-height:32px; padding: 5px;',
                    'html': '\x0a\x09\x09\x09\x09\x09<svg class=\"text-button\" style=\"position:fixed; right:0px; margin:9px;\" height=\"16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\" stroke-width=\"1.5\">\x0a\x09                    <path d=\"M 1 1 L 15 15 M 15 1 L 1 15\" fill=\"transparent\" stroke=\"white\"></path>\x0a\x09                </svg>\x0a                '
                }, [document['createTextNode']('Message')]), this['container'] = _0x23ecfe({
                    'type': 'div',
                    'style': '\x0a\x09\x09\x09\x09    white-space: pre-wrap;\x0a\x09\x09\x09\x09    word-wrap: break-word;\x0a\x09\x09\x09\x09\x09padding: 5px;\x0a\x09\x09\x09\x09\x09overflow-y: scroll;\x0a\x09\x09\x09\x09\x09line-height: 16px;\x0a\x09\x09\x09\x09\x09user-select: text;\x0a\x09\x09\x09\x09'
                })]), document['body']['appendChild'](this['body']), this['body']['getElementsByTagName']('svg')[0x8 * 0x4d6 + 0x2 * -0x1238 + -0x240]['onclick'] = () => this['hide'](), this['blocker'] = _0x23ecfe({
                    'type': 'div',
                    'class': 'NLRGeneral',
                    'style': '\x0a\x09\x09\x09\x09display: none;\x0a\x09\x09\x09\x09z-index: 9998;\x0a\x09\x09        position: fixed;\x0a\x09\x09        background-color: rgba(0,0,0,0.9);\x0a\x09\x09        top: 0px;\x0a\x09\x09        left: 0px;\x0a\x09\x09        width: 100%;\x0a\x09\x09        height: 100%;\x0a\x09\x09\x09',
                    'listeners': {
                        'onclick': () => this['hide']()
                    }
                }), document['body']['appendChild'](this['blocker']), this['showed'] = ![];
            } ['_updateContainerSize']() {
                this['container']['style']['height'] = this['body']['clientHeight'] + 'px';
            } ['write'](_0x3e8712) {
                this['container']['innerHTML'] = _0x3e8712, this['_updateContainerSize']();
            } ['show']() {
                this['body']['style']['display'] = 'block', this['blocker']['style']['display'] = 'block', this['_updateContainerSize'](), this['showed'] = !![];
            } ['hide']() {
                this['body']['style']['display'] = 'none', this['blocker']['style']['display'] = 'none', this['showed'] = ![];
            }
        };
    }, {
        './functions': 0x12
    }],
    0xa: [function(_0x18394b, _0x109c09, _0x42affd) {
        const {
            CHUNK_SIZE: _0x2456b1
        } = _0x18394b('../resources/canvas.json');
        _0x109c09['exports'] = class {
            constructor(_0x5e94af, _0x155ea4, _0x4a7de4) {
                this['x'] = _0x5e94af, this['y'] = _0x155ea4, this['data'] = _0x4a7de4, this['lastUsing'] = Date['now'](), this['_c'] = null;
            } ['get'](_0x2d8245, _0x228629) {
                return this['_c'] = _0x2d8245 + _0x228629 * _0x2456b1 << 0x520 + -0x36f * -0x4 + 0x12da * -0x1, [this['data'][this['_c']], this['data'][this['_c'] + (0x50b * 0x7 + 0x859 * -0x2 + -0x129a * 0x1)], this['data'][this['_c'] + (-0x2 * -0x114b + -0x1532 + -0x2 * 0x6b1)]];
            } ['set'](_0x5285e6, _0x203fff, _0x210f99) {
                return this['_c'] = _0x5285e6 + _0x203fff * _0x2456b1 << -0x26d1 + -0x268c * 0x1 + 0x4d5f, [this['data'][this['_c']], this['data'][this['_c'] + (0x1 * 0x2353 + -0x85 * 0xf + 0x3 * -0x92d)], this['data'][this['_c'] + (0x5f * -0x52 + 0x1 * -0x12f0 + -0x4 * -0xc58)]] = [..._0x210f99];
            }
        };
    }, {
        '../resources/canvas.json': 0x3
    }],
    0xb: [function(_0x17a783, _0x5359c5, _0x47713e) {
        const {
            abs: _0x2d1b7a
        } = _0x17a783('./functions');
        _0x5359c5['exports'] = class {
            constructor() {
                this['elems'] = null, this['colors'] = null;
            } ['setColors'](_0x506dfb) {
                this['colors'] = _0x506dfb['map'](_0x8ae138 => [..._0x8ae138]);
            } ['same'](_0xb9ee3d, _0x20bc33, _0x414ad2 = 0x3a8 + 0xe0 * -0x29 + 0x1 * 0x2047) {
                return _0x2d1b7a(_0xb9ee3d[0x12 * -0x1de + 0x2 * -0x92f + -0x2 * -0x19fd] - _0x20bc33[0x1 * -0x2408 + -0x18ff + 0x3d07]) < _0x414ad2 && _0x2d1b7a(_0xb9ee3d[0x139e + 0x1cd * -0x7 + -0x702] - _0x20bc33[-0x18cd + 0x25 * -0x8d + 0x2d2f]) < _0x414ad2 && _0x2d1b7a(_0xb9ee3d[-0x6da + 0x7c4 + 0x3a * -0x4] - _0x20bc33[-0x124 * -0x14 + 0x2685 * -0x1 + 0x1b * 0x95]) < _0x414ad2;
            } ['has'](_0x549b55) {
                return this['RGBToId'](_0x549b55) !== null;
            } ['convert'](_0x26ecf8) {
                let _0x14ac3a, _0x7de66a = Infinity,
                    _0x47564f, _0x29c1e0;
                for (let _0x2a74ed = -0x220b + 0x2 * 0xaed + 0xc33; _0x2a74ed !== this['colors']['length']; _0x2a74ed++) {
                    _0x29c1e0 = this['colors'][_0x2a74ed];
                    if (this['same'](_0x29c1e0, _0x26ecf8)) return _0x29c1e0;;
                    _0x47564f = _0x2d1b7a(_0x29c1e0[0x5b * 0x22 + 0x1 * -0x262f + 0x1a19] - _0x26ecf8[0x2 * -0x334 + 0x57b * -0x1 + 0xbe3]) + _0x2d1b7a(_0x29c1e0[0x409 * 0x1 + -0x1 * -0x6fa + 0x1 * -0xb02] - _0x26ecf8[0xd96 + 0x1d00 + -0x2a95]) + _0x2d1b7a(_0x29c1e0[0x1a33 + 0x1cdc + -0x370d] - _0x26ecf8[-0x25 * 0x24 + -0x2629 + 0x2b5f * 0x1]);
                    _0x47564f < _0x7de66a && (_0x7de66a = _0x47564f, _0x14ac3a = _0x2a74ed);;
                };
                return [...this['colors'][_0x14ac3a]];
            } ['IdToRGB'](_0x550069) {
                return this['colors'][_0x550069];
            } ['RGBToId'](_0xcb484f) {
                for (let _0x1e83b6 = this['colors']['length'] - (0xf0f + 0x230d + 0x65 * -0x7f); _0x1e83b6 !== -(0x139d + -0x23 * 0x49 + -0x11 * 0x91); _0x1e83b6--)
                    if (this['same'](this['colors'][_0x1e83b6], _0xcb484f)) return _0x1e83b6;
                return null;
            } ['select'](_0x521c7a) {
                this['elems'][typeof _0x521c7a === 'object' ? this['RGBToId'](_0x521c7a) : _0x521c7a]['click']();
            } ['onColorSelect']() {} ['bindColorsWithElements'](_0x2f3cbd) {
                _0x2f3cbd = Array['from'](_0x2f3cbd), this['elems'] = {}, this['colors']['forEach']((_0x154398, _0x5ed6c6) => {
                    let _0x5e83e0 = _0x2f3cbd['find'](_0x1fceda => this['same'](_0x154398, _0x1fceda['style']['backgroundColor']['match'](/-?\d+/g)['map'](_0x3f862d => +_0x3f862d)));
                    if (_0x5e83e0 === void(-0x7e * 0x30 + -0x6f1 * 0x1 + -0x1e91 * -0x1)) return console['error']('Can\'t find element for color [' + _0x154398 + ']');
                    this['elems'][_0x5ed6c6] = _0x5e83e0, this['elems'][_0x5ed6c6]['addEventListener']('click', () => this['onColorSelect']({
                        'id': _0x5ed6c6,
                        'rgb': _0x154398
                    }));
                });
            }
        };
    }, {
        './functions': 0x12
    }],
    0xc: [function(_0x4e4888, _0x228e70, _0x4208b8) {
        const {
            objForEach: _0x25ab15,
            factory: _0x17d54b
        } = _0x4e4888('./functions');
        class _0x57fee6 {
            constructor({
                name: _0x25643a,
                desc: _0x1f7d37,
                src: _0x3a8856
            }) {
                this['name'] = _0x25643a, this['desc'] = _0x1f7d37, this['src'] = _0x3a8856, this['loadingStarted'] = ![];
            } ['load']() {
                this['loadingStarted'] = !![], fetch(this['src'])['then'](_0x57240d => {
                    if (!_0x57240d['ok']) return console['warn']('Module error: response isn\'t ok\x0amodule name: ' + this['name'] + '\x0asrc: ' + this['src']);
                    return _0x57240d['text']();
                })['then'](_0x1f8872 => {
                    document['body']['appendChild'](_0x17d54b({
                        'type': 'script',
                        'html': _0x1f8872
                    }));
                })['catch'](console['error']);
            }
        };
        _0x228e70['exports'] = class {
            constructor() {
                this['plugins'] = null;
            } ['get'](_0x775efc) {
                return this['plugins'][_0x775efc];
            } ['loadData'](_0x5ad48c) {
                return new Promise((_0x151adc, _0x508df2) => {
                    fetch(_0x5ad48c)['then'](_0x256a03 => _0x256a03['json']())['then'](_0x404bc9 => {
                        this['plugins'] = {}, _0x25ab15(_0x404bc9, (_0x2f4614, _0x107f35) => this['plugins'][_0x107f35] = new _0x57fee6(Object['assign'](_0x2f4614, {
                            'name': _0x107f35
                        }))), _0x151adc();
                    })['catch'](_0x508df2);
                });
            }
        };
    }, {
        './functions': 0x12
    }],
    0xd: [function(_0x5bb07a, _0x20e740, _0x3a57d4) {
        const {
            loadImage: _0x1d7a34
        } = _0x5bb07a('./functions');
        class _0x111ee6 {
            constructor({
                x: _0x4ef0d5,
                y: _0x58acb2,
                width: _0x3a0877,
                height: _0x4e0f33,
                name: _0x342e92,
                src: _0x22a8eb
            }) {
                this['x1'] = _0x4ef0d5, this['y1'] = _0x58acb2, this['width'] = _0x3a0877, this['height'] = _0x4e0f33, this['overrideEnds'](), this['name'] = _0x342e92, this['src'] = _0x22a8eb, this['status'] = _0x111ee6['UNLOADED'], this['img'] = null, this['canvas'] = null;
            } ['intersects'](_0x38c87f, _0x1b3744, _0x1808bf, _0x4ba91a) {
                return this['x1'] < _0x1808bf && this['x2'] > _0x38c87f && this['y1'] < _0x4ba91a && this['y2'] > _0x1b3744;
            } ['overrideEnds']() {
                this['x2'] = this['x1'] + this['width'], this['y2'] = this['y1'] + this['height'];
            } ['load']() {
                return this['status'] = _0x111ee6['LOADING'], new Promise((_0x1acb92, _0xe38947) => {
                    if (this['src'] === null) return console['error']('Template src isn\'t defined'), _0xe38947();;
                    _0x1d7a34(this['src'])['then'](_0x4babbe => {
                        this['img'] = _0x4babbe, this['canvas'] = document['createElement']('canvas'), this['width'] = this['canvas']['width'] = this['img']['width'], this['height'] = this['canvas']['height'] = this['img']['height'], this['overrideEnds'](), this['ctx'] = this['canvas']['getContext']('2d'), this['ctx']['drawImage'](this['img'], -0x24e4 * 0x1 + -0x2154 + 0x4638, -0x1d6 + -0x6aa * 0x3 + -0xb * -0x1fc), this['imageData'] = this['ctx']['getImageData'](0x1ff0 + -0x1411 + -0xbdf * 0x1, 0xa5e * 0x1 + 0x5af + -0x100d, this['width'], this['height']), this['data'] = this['imageData']['data'], this['status'] = _0x111ee6['LOADED'], _0x1acb92(this);
                    })['catch'](_0x4f0872 => _0xe38947(_0x4f0872));
                });
            }
        };
        _0x111ee6['UNLOADED'] = 0x3 * 0xc11 + -0x1 * 0xd6d + 0x1 * -0x16c6, _0x111ee6['LOADING'] = -0x1c99 * 0x1 + -0x2471 + 0x410b, _0x111ee6['LOADED'] = -0x1c6f + -0x465 * 0x3 + 0x29a0, _0x20e740['exports'] = _0x111ee6;
    }, {
        './functions': 0x12
    }],
    0xe: [function(_0x1221fd, _0x2a9239, _0x39b6c7) {
        const {
            between: _0x4f22fc,
            objForEach: _0x43308f
        } = _0x1221fd('./functions'), _0x499654 = _0x1221fd('./Template');
        let _0x55d4d0, _0x4e532a, _0x16867b, _0x28451c;
        _0x2a9239['exports'] = class {
            constructor() {
                this['clear']();
            } ['clear']() {
                this['list'] = {};
            } ['load'](_0x2917ac) {
                return this['list'][_0x2917ac]['load']();
            } ['add'](_0x5c319f) {
                return this['list'][_0x5c319f['name']] = _0x5c319f;
            } ['get'](_0x2ab6de) {
                return _0x2ab6de in this['list'] ? this['list'][_0x2ab6de] : undefined;
            } ['getTemplatesAtZone'](_0x4dcc2e, _0x243a57, _0x5ce52b, _0x3ac776) {
                let _0x122c65 = [];
                return _0x43308f(this['list'], (_0x593abc, _0x4b4074) => {
                    if (_0x593abc['intersects'](_0x4dcc2e, _0x243a57, _0x5ce52b, _0x3ac776)) _0x122c65['push'](_0x593abc);
                }), _0x122c65;
            } ['getPixelFromTemplates'](_0x1a6224, _0x1731cf) {
                for (_0x28451c in this['list']) {
                    _0x55d4d0 = this['list'][_0x28451c];
                    if (_0x55d4d0['status'] !== _0x499654['LOADED']) continue;
                    if (_0x4f22fc(_0x55d4d0['x1'], _0x1a6224, _0x55d4d0['x2']) && _0x4f22fc(_0x55d4d0['y1'], _0x1731cf, _0x55d4d0['y2'])) {
                        _0x4e532a = _0x55d4d0['data'], _0x16867b = _0x1a6224 - _0x55d4d0['x1'] + _0x55d4d0['width'] * (_0x1731cf - _0x55d4d0['y1']) << 0x8 * -0x452 + 0x1dbf + 0x4d3 * 0x1;
                        if (_0x4e532a[_0x16867b + (-0x2d2 + -0x85f + 0xb34)] === 0x2 * 0xcc9 + 0x1d80 + -0x3712 * 0x1) continue;
                        return [_0x4e532a[_0x16867b], _0x4e532a[_0x16867b + (-0x783 + -0x26ff + 0x52b * 0x9)], _0x4e532a[_0x16867b + (0x869 + -0x74 + -0x197 * 0x5)], _0x4e532a[_0x16867b + (0x15a2 + -0x1f23 + -0x74 * -0x15)]];
                    };
                };
                return null;
            }
        };
    }, {
        './Template': 0xd,
        './functions': 0x12
    }],
    0xf: [function(_0x25fdf3, _0x1a49be, _0x19b903) {
        _0x1a49be['exports'] = class {
            constructor({
                localStorageSave: _0x4b54fe
            }) {
                this['saveInLS'] = _0x4b54fe || !![];
            } ['load']() {
                this['saveInLS'] ? this['data'] = localStorage['minimap'] ? JSON['parse'](localStorage['minimap']) : {} : this['data'] = {};;
            } ['save']() {
                if (!this['saveInLS']) return;
                localStorage['minimap'] = JSON['stringify'](this['data']);
            } ['get'](_0xe3ff18) {
                return this['data'][_0xe3ff18];
            } ['set'](_0x490776, _0x54bdc9, _0x2b6b4f = !![]) {
                this['data'][_0x490776] = _0x54bdc9;
                if (_0x2b6b4f) this['save']();
                return _0x54bdc9;
            } ['getOrDefault'](_0x3e00bd, _0x226359) {
                return this['get'](_0x3e00bd) === undefined ? _0x226359 : this['get'](_0x3e00bd);
            }
        };
    }, {}],
    0x10: [function(_0x251d0a, _0x2ba442, _0x11d503) {
        _0x2ba442['exports'] = class _0x4614a8 {
            constructor(_0x48dcb7 = null) {
                const _0x196b87 = this;
                this['target'] = _0x48dcb7, this['ws'] = null, this['middleSend'] = function() {
                    this['ws']['_send'](...arguments);
                }, this['trapFunction'] = function() {
                    if (this['inited']) return _0x196b87['middleSend']['apply'](this, arguments);
                    else {
                        (_0x196b87['target'] === null || this['url'] === _0x196b87['target']) && (console['log']('ws catched'), this['inited'] = !![], _0x196b87['ws'] = this, _0x196b87['originalOnMessage'] = this['onmessage'], this['onmessage'] = function() {
                            _0x196b87['originalOnMessage']['apply'](this, arguments);
                        }, _0x196b87['oncatch'](this));;
                        return this['_send']['apply'](this, arguments);
                    };
                }, WebSocket['prototype']['_send'] = WebSocket['prototype']['send'], WebSocket['prototype']['send'] = this['trapFunction'];
            } ['send'](_0x2d5122) {
                if (this['ws']) return this['ws']['_send'](_0x2d5122);
                else return console['warn']('[CATCHER] try send when not catched');
            } ['oncatch']() {}
        };
    }, {}],
    0x11: [function(_0x3f58b4, _0x81c4a8, _0x3c0c71) {
        const _0x18e661 = _0x3f58b4('events'),
            _0x9904e4 = _0x3f58b4('./WSCatcher');
        _0x81c4a8['exports'] = class {
            constructor(_0xce2f35) {
                this['_url'] = _0xce2f35['url'] || null, this['_binaryType'] = _0xce2f35['binaryType'] || 'arraybuffer', this['_workAsCatcher'] = _0xce2f35['workAsCatcher'] || ![], this['_events'] = new _0x18e661(), this['_ws'] = null, this['_actions'] = {};
            } ['init']() {
                const _0xa0d5cf = this;
                if (this['_workAsCatcher']) this['catcher'] = new _0x9904e4(), this['catcher']['oncatch'] = _0x575b4a => {
                    this['_ws'] = _0x575b4a, this['_ws']['onmessage'] = function() {
                        _0xa0d5cf['emit']('message', ...arguments), _0xa0d5cf['catcher']['originalOnMessage']['apply'](this, arguments);
                    }, this['emit']('open');
                };
                else {
                    if (this['_workAsCatcher']) this['connect']();
                    setInterval(() => {
                        if (this['_ws']['disconnected']) this['connect']();
                    }, -0x15bb + 0x247 * 0xa + 0x127d);
                };
            } ['log'](_0xd11246) {
                console['log']('[WS] ' + _0xd11246);
            } ['isConnected']() {
                return this['_ws'] && (this['_ws']['readyState'] === WebSocket['OPEN'] || this['_ws']['readyState'] === WebSocket['CONNECTING']);
            } ['isDisconnected']() {
                return !this['isConnected']();
            } ['connect']() {
                this['_ws'] = new WebSocket(this['_url']), this['_ws']['binaryType'] = this['_binaryType'], this['bindBasicHandlers']();
            } ['send'](_0x2710ac) {
                console['log'](_0x2710ac);
                if (this['_workAsCatcher']) this['_ws']['_send'](_0x2710ac);
                else this['_ws']['send'](_0x2710ac);
            } ['bindBasicHandlers']() {
                this['_ws']['onopen'] = () => {
                    this['log']('open'), this['_events']['emit']('open');
                }, this['_ws']['onmessage'] = _0x472e7f => this['_events']['emit']('message', _0x472e7f), this['_ws']['onclose'] = () => {
                    this['log']('closed'), this['_events']['emit']('close');
                }, this['_ws']['onerror'] = _0x3db8bb => {
                    this['log']('closed'), this['_events']['emit']('close', _0x3db8bb);
                };
            } ['createAction'](_0x2f6fca, _0x170df3) {
                this['_actions'][_0x2f6fca] = _0x170df3;
            } ['action'](_0x3c845d, ..._0x167ea9) {
                return this['_actions'][_0x3c845d]['apply'](this, _0x167ea9);
            } ['on'](_0x443481, _0x1a4336) {
                this['_events']['on'](_0x443481, _0x1a4336['bind'](this));
            } ['emit'](_0xf4597d, ..._0x16669a) {
                this['_events']['emit'](_0xf4597d, ..._0x16669a);
            }
        };
    }, {
        './WSCatcher': 0x10,
        'events': 0x13
    }],
    0x12: [function(_0x261520, _0x30d967, _0xd162ea) {
        function _0x4a5ca5(_0x198cf2, _0x545f8b, _0x4b32af) {
            return _0x545f8b > _0x198cf2 && _0x545f8b < _0x4b32af;
        };
        let {
            abs: _0x2bad58
        } = Math;

        function _0x52c911(_0x4f0ee5, _0x4d26c5) {
            _0x4f0ee5['mozImageSmoothingEnabled'] = _0x4f0ee5['webkitImageSmoothingEnabled'] = _0x4f0ee5['msImageSmoothingEnabled'] = _0x4f0ee5['imageSmoothingEnabled'] = _0x4d26c5;
        };

        function _0x43587a(_0xecacbd, _0x105452) {
            Object['keys'](_0xecacbd)['forEach'](_0x2a1f6a => _0x105452(_0xecacbd[_0x2a1f6a], _0x2a1f6a));
        };

        function _0x44b98c(_0x94b6bf) {
            document['head']['appendChild'](_0x28d239({
                'type': 'style',
                'html': _0x94b6bf['replace'](/  |\n/g, '')
            }));
        };

        function _0x1b2d32(_0x583b8b, _0x21401f) {
            if (!('Notification' in window)) return;
            const _0x3be5f1 = () => new Notification(_0x583b8b, _0x21401f);
            if (Notification['permission'] === 'granted') _0x3be5f1();
            else Notification['permission'] !== 'denied' && Notification['requestPermission'](_0x1aa8ee => {
                if (_0x1aa8ee === 'granted') _0x3be5f1();
            });;
        };

        function _0x28d239(_0x1202e4, _0x59ca12 = []) {
            let _0x2a6611 = _0x1202e4['type'] === 'text' ? document['createTextNode'](_0x1202e4['text'] || '') : document['createElement'](_0x1202e4['type']);
            return _0x1202e4['id'] && (_0x2a6611['id'] = _0x1202e4['id']), _0x1202e4['class'] && _0x2a6611['setAttribute']('class', _0x1202e4['class']), _0x1202e4['style'] && (_0x2a6611['style'] = _0x1202e4['style']), _0x1202e4['html'] ? _0x2a6611['innerHTML'] = _0x1202e4['html'] : _0x1202e4['text'] && (_0x2a6611['innerText'] = _0x1202e4['text']), _0x1202e4['listeners'] && _0x43587a(_0x1202e4['listeners'], (_0x373251, _0x204574) => {
                _0x2a6611['addEventListener'](_0x204574['startsWith']('on') ? _0x204574['substring'](0x990 + -0x1ce7 + -0xd * -0x17d) : _0x204574, _0x373251);
            }), _0x1202e4['attributes'] && _0x43587a(_0x1202e4['attributes'], (_0x13c61e, _0x1fc0a6) => _0x2a6611['setAttribute'](_0x1fc0a6, _0x13c61e)), _0x59ca12['length'] && _0x43587a(_0x59ca12, _0x2a6611['appendChild']['bind'](_0x2a6611)), _0x2a6611;
        };

        function _0x285aaf(_0x487fd9) {
            return _0x487fd9 ? 'On' : 'Off';
        };

        function _0x2301e(_0x495a0b, _0x16ece3 = void(-0xc5 * 0xb + -0x3f1 + -0x18d * -0x8)) {
            let _0x29507d = document['createElement']('a');
            _0x29507d['href'] = _0x495a0b['toDataURL']('image/png'), _0x29507d['download'] = _0x16ece3, _0x29507d['click']();
        };

        function _0x12c6e3(_0x3232e8) {
            return document['getElementById'](_0x3232e8);
        };

        function _0x4be6f2(_0xe20c98) {
            return new Promise((_0x3863b1, _0x304bdb) => {
                let _0x14eb53 = new Image();
                _0x14eb53['crossOrigin'] = '', _0x14eb53['onload'] = () => _0x3863b1(_0x14eb53), _0x14eb53['onerror'] = _0x304bdb, _0x14eb53['src'] = _0xe20c98;
            });
        };

        function _0x3d35af(_0x10af66) {
            return _0x28d239({
                'type': 'div'
            }, [_0x28d239({
                'type': 'div',
                'class': 'minimap-panel-button',
                'html': '<img style=\"width:inherit; height:inherit;\" src=\"' + _0x10af66 + '\"></img>'
            })]);
        };

        function _0xbe7263() {
            let _0xfd1154 = ![];
            try {
                _0xfd1154 = window != window['top'] || document != top['document'] || self['location'] != top['location'];
            } catch (_0xe93c97) {
                _0xfd1154 = !![];
            };
            return _0xfd1154;
        };

        function _0x2df316(_0x4fa02f) {
            return window['importObject'] = {
                'imports': {
                    'imported_func': _0x398df7 => console['log'](_0x398df7)
                }
            }, fetch(_0x4fa02f)['then'](_0x4a9dcf => _0x4a9dcf['arrayBuffer']())['then'](_0x5f4fb7 => WebAssembly['instantiate'](_0x5f4fb7, window['importObject']));
        };
        _0x30d967['exports'] = {
            'between': _0x4a5ca5,
            'abs': _0x2bad58,
            'antialiasing': _0x52c911,
            'objForEach': _0x43587a,
            'injectCSS': _0x44b98c,
            'trySendNotification': _0x1b2d32,
            'factory': _0x28d239,
            'switcherText': _0x285aaf,
            'downloadCanvas': _0x2301e,
            '$': _0x12c6e3,
            'loadImage': _0x4be6f2,
            'createPanelButton': _0x3d35af,
            'isFrame': _0xbe7263,
            'loadWASM': _0x2df316
        };
    }, {}],
    0x13: [function(_0x125d7e, _0x938697, _0x96c017) {
        var _0x2e3d0b = Object['create'] || _0x5ee5bb,
            _0x5bedab = Object['keys'] || _0x54ec9b,
            _0x1e6716 = Function['prototype']['bind'] || _0x1eb84a;

        function _0x23c657() {
            (!this['_events'] || !Object['prototype']['hasOwnProperty']['call'](this, '_events')) && (this['_events'] = _0x2e3d0b(null), this['_eventsCount'] = -0x287 * -0x1 + -0x1 * -0x305 + -0x58c), this['_maxListeners'] = this['_maxListeners'] || undefined;
        }
        _0x938697['exports'] = _0x23c657, _0x23c657['EventEmitter'] = _0x23c657, _0x23c657['prototype']['_events'] = undefined, _0x23c657['prototype']['_maxListeners'] = undefined;
        var _0x238ec3 = -0x2 * 0x1f2 + -0x3 * -0x2eb + -0x4d3,
            _0x559fc0;
        try {
            var _0x740bf3 = {};
            if (Object['defineProperty']) Object['defineProperty'](_0x740bf3, 'x', {
                'value': 0x0
            });
            _0x559fc0 = _0x740bf3['x'] === 0x109d * 0x1 + 0x10f * 0x22 + -0x43 * 0xc9;
        } catch (_0x32257d) {
            _0x559fc0 = ![];
        }
        _0x559fc0 ? Object['defineProperty'](_0x23c657, 'defaultMaxListeners', {
            'enumerable': !![],
            'get': function() {
                return _0x238ec3;
            },
            'set': function(_0x384208) {
                if (typeof _0x384208 !== 'number' || _0x384208 < -0x30b + -0x16 * 0x1c0 + 0x5 * 0x84f || _0x384208 !== _0x384208) throw new TypeError('\"defaultMaxListeners\" must be a positive number');
                _0x238ec3 = _0x384208;
            }
        }) : _0x23c657['defaultMaxListeners'] = _0x238ec3;
        _0x23c657['prototype']['setMaxListeners'] = function _0x554b54(_0x3615dd) {
            if (typeof _0x3615dd !== 'number' || _0x3615dd < 0x1 * -0x10a6 + -0x206b + 0x3111 || isNaN(_0x3615dd)) throw new TypeError('\"n\" argument must be a positive number');
            return this['_maxListeners'] = _0x3615dd, this;
        };

        function _0x38211b(_0x2833af) {
            if (_0x2833af['_maxListeners'] === undefined) return _0x23c657['defaultMaxListeners'];
            return _0x2833af['_maxListeners'];
        }
        _0x23c657['prototype']['getMaxListeners'] = function _0x24a583() {
            return _0x38211b(this);
        };

        function _0x4cade7(_0x28e769, _0x26e5d6, _0x3f9dcb) {
            if (_0x26e5d6) _0x28e769['call'](_0x3f9dcb);
            else {
                var _0x2529ae = _0x28e769['length'],
                    _0x401792 = _0x427dda(_0x28e769, _0x2529ae);
                for (var _0x253bbe = -0x9 * -0x135 + 0x1b1 * -0x16 + -0x5 * -0x545; _0x253bbe < _0x2529ae; ++_0x253bbe) _0x401792[_0x253bbe]['call'](_0x3f9dcb);
            }
        }

        function _0x2029fb(_0x5681b6, _0x18f05d, _0x392d4e, _0x38254c) {
            if (_0x18f05d) _0x5681b6['call'](_0x392d4e, _0x38254c);
            else {
                var _0x240696 = _0x5681b6['length'],
                    _0x54b1d2 = _0x427dda(_0x5681b6, _0x240696);
                for (var _0x376d20 = 0x2449 + -0x198a * 0x1 + -0xabf; _0x376d20 < _0x240696; ++_0x376d20) _0x54b1d2[_0x376d20]['call'](_0x392d4e, _0x38254c);
            }
        }

        function _0x16ff7d(_0x2cfe30, _0x3750e0, _0x2d521a, _0x2de43b, _0x4a7bf3) {
            if (_0x3750e0) _0x2cfe30['call'](_0x2d521a, _0x2de43b, _0x4a7bf3);
            else {
                var _0x1122e8 = _0x2cfe30['length'],
                    _0x4ddc64 = _0x427dda(_0x2cfe30, _0x1122e8);
                for (var _0x1acc2d = -0x1dbd + -0x1399 + 0x3156; _0x1acc2d < _0x1122e8; ++_0x1acc2d) _0x4ddc64[_0x1acc2d]['call'](_0x2d521a, _0x2de43b, _0x4a7bf3);
            }
        }

        function _0x566841(_0x5a7258, _0x559928, _0x20d4f1, _0x39e732, _0x2e3005, _0x5b0c9e) {
            if (_0x559928) _0x5a7258['call'](_0x20d4f1, _0x39e732, _0x2e3005, _0x5b0c9e);
            else {
                var _0x5aba5e = _0x5a7258['length'],
                    _0x3b1def = _0x427dda(_0x5a7258, _0x5aba5e);
                for (var _0x38ec74 = -0x187 * -0x12 + -0x2113 + 0x595 * 0x1; _0x38ec74 < _0x5aba5e; ++_0x38ec74) _0x3b1def[_0x38ec74]['call'](_0x20d4f1, _0x39e732, _0x2e3005, _0x5b0c9e);
            }
        }

        function _0x506c44(_0x1b382e, _0x4faa65, _0x4e8690, _0x1cec62) {
            if (_0x4faa65) _0x1b382e['apply'](_0x4e8690, _0x1cec62);
            else {
                var _0xa6941f = _0x1b382e['length'],
                    _0xe83fb8 = _0x427dda(_0x1b382e, _0xa6941f);
                for (var _0x5a6910 = -0x1783 * -0x1 + 0xa * -0xc9 + 0x1 * -0xfa9; _0x5a6910 < _0xa6941f; ++_0x5a6910) _0xe83fb8[_0x5a6910]['apply'](_0x4e8690, _0x1cec62);
            }
        }
        _0x23c657['prototype']['emit'] = function _0x8a9a2e(_0x3971f9) {
            var _0x20d057, _0x3199e3, _0x351e15, _0x3a3717, _0x33a5bc, _0x5cffb0, _0x5626c0 = _0x3971f9 === 'error';
            _0x5cffb0 = this['_events'];
            if (_0x5cffb0) _0x5626c0 = _0x5626c0 && _0x5cffb0['error'] == null;
            else {
                if (!_0x5626c0) return ![];
            }
            if (_0x5626c0) {
                if (arguments['length'] > 0x4 * 0x43c + -0x1e04 * -0x1 + 0x2ef3 * -0x1) _0x20d057 = arguments[0x11e9 + -0x38d + 0x23 * -0x69];
                if (_0x20d057 instanceof Error) throw _0x20d057;
                else {
                    var _0x1cb5da = new Error('Unhandled \"error\" event. (' + _0x20d057 + ')');
                    _0x1cb5da['context'] = _0x20d057;
                    throw _0x1cb5da;
                }
                return ![];
            }
            _0x3199e3 = _0x5cffb0[_0x3971f9];
            if (!_0x3199e3) return ![];
            var _0x572b49 = typeof _0x3199e3 === 'function';
            _0x351e15 = arguments['length'];
            switch (_0x351e15) {
                case -0x1a5 * 0x5 + -0xd02 + 0x1c5 * 0xc:
                    _0x4cade7(_0x3199e3, _0x572b49, this);
                    break;
                case 0x26f * 0x5 + 0x8b5 + -0x2 * 0xa6f:
                    _0x2029fb(_0x3199e3, _0x572b49, this, arguments[0x1b + -0x1c4 * -0x8 + 0x4be * -0x3]);
                    break;
                case -0x1876 + 0x1 * 0x1ed + -0x3 * -0x784:
                    _0x16ff7d(_0x3199e3, _0x572b49, this, arguments[0x9f * 0x3d + -0x1aa6 + -0xb3c * 0x1], arguments[0x1d28 + -0x10a2 * 0x1 + 0x321 * -0x4]);
                    break;
                case -0x214 + -0x2532 + 0xd6 * 0x2f:
                    _0x566841(_0x3199e3, _0x572b49, this, arguments[0x3a * 0xa + 0x4f * -0x4a + 0x1 * 0x1493], arguments[0x2060 + 0x2b * 0xd8 + -0x44a6], arguments[0x2 * -0x559 + -0x1eb + 0x8 * 0x194]);
                    break;
                default:
                    _0x3a3717 = new Array(_0x351e15 - (0x22d3 + 0xa2 * -0x1 + 0x2 * -0x1118));
                    for (_0x33a5bc = -0x10e0 + 0x9a7 + 0x73a * 0x1; _0x33a5bc < _0x351e15; _0x33a5bc++) _0x3a3717[_0x33a5bc - (-0x1b0b * 0x1 + -0x1 * 0x1ba3 + 0x36af)] = arguments[_0x33a5bc];
                    _0x506c44(_0x3199e3, _0x572b49, this, _0x3a3717);
            }
            return !![];
        };

        function _0x40a0dd(_0x36ff33, _0x33ee71, _0x1f63bb, _0x3352ef) {
            var _0x3671c9, _0x274a3c, _0x4095bd;
            if (typeof _0x1f63bb !== 'function') throw new TypeError('\"listener\" argument must be a function');
            _0x274a3c = _0x36ff33['_events'];
            !_0x274a3c ? (_0x274a3c = _0x36ff33['_events'] = _0x2e3d0b(null), _0x36ff33['_eventsCount'] = 0x18d9 * 0x1 + 0x1bba + 0x139 * -0x2b) : (_0x274a3c['newListener'] && (_0x36ff33['emit']('newListener', _0x33ee71, _0x1f63bb['listener'] ? _0x1f63bb['listener'] : _0x1f63bb), _0x274a3c = _0x36ff33['_events']), _0x4095bd = _0x274a3c[_0x33ee71]);
            if (!_0x4095bd) _0x4095bd = _0x274a3c[_0x33ee71] = _0x1f63bb, ++_0x36ff33['_eventsCount'];
            else {
                typeof _0x4095bd === 'function' ? _0x4095bd = _0x274a3c[_0x33ee71] = _0x3352ef ? [_0x1f63bb, _0x4095bd] : [_0x4095bd, _0x1f63bb] : _0x3352ef ? _0x4095bd['unshift'](_0x1f63bb) : _0x4095bd['push'](_0x1f63bb);
                if (!_0x4095bd['warned']) {
                    _0x3671c9 = _0x38211b(_0x36ff33);
                    if (_0x3671c9 && _0x3671c9 > 0x4 * 0x23b + 0xab5 + 0x1 * -0x13a1 && _0x4095bd['length'] > _0x3671c9) {
                        _0x4095bd['warned'] = !![];
                        var _0x263117 = new Error('Possible EventEmitter memory leak detected. ' + _0x4095bd['length'] + ' \"' + String(_0x33ee71) + '\" listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit.');
                        _0x263117['name'] = 'MaxListenersExceededWarning', _0x263117['emitter'] = _0x36ff33, _0x263117['type'] = _0x33ee71, _0x263117['count'] = _0x4095bd['length'], typeof console === 'object' && console['warn'] && console['warn']('%s: %s', _0x263117['name'], _0x263117['message']);
                    }
                }
            }
            return _0x36ff33;
        }
        _0x23c657['prototype']['addListener'] = function _0x3a523e(_0x5a466c, _0x69e251) {
            return _0x40a0dd(this, _0x5a466c, _0x69e251, ![]);
        }, _0x23c657['prototype']['on'] = _0x23c657['prototype']['addListener'], _0x23c657['prototype']['prependListener'] = function _0x4ba129(_0x34c61d, _0x3ce984) {
            return _0x40a0dd(this, _0x34c61d, _0x3ce984, !![]);
        };

        function _0xc51629() {
            if (!this['fired']) {
                this['target']['removeListener'](this['type'], this['wrapFn']), this['fired'] = !![];
                switch (arguments['length']) {
                    case -0x638 + -0x269a + 0x2cd2:
                        return this['listener']['call'](this['target']);
                    case -0x829 * 0x4 + 0x1859 + 0x9 * 0xec:
                        return this['listener']['call'](this['target'], arguments[-0xe4b + -0x60d + -0x2 * -0xa2c]);
                    case -0x7f3 + -0x1560 + 0x1d55:
                        return this['listener']['call'](this['target'], arguments[0x2 * 0x284 + -0x1 * 0x8f3 + 0x1 * 0x3eb], arguments[0x17 * -0x10c + -0xbfb + -0x241 * -0x10]);
                    case -0x14a4 * -0x1 + 0xf1f + -0x23c0:
                        return this['listener']['call'](this['target'], arguments[-0x1 * -0x6b3 + 0x1d * -0x11 + -0x4c6], arguments[0x4 * -0x7a4 + -0xca * -0xe + 0x1 * 0x1385], arguments[0x9aa * -0x1 + -0x1999 + 0x2345]);
                    default:
                        var _0x2a14f9 = new Array(arguments['length']);
                        for (var _0x37bbcf = 0xe19 + 0x25eb + -0x3404; _0x37bbcf < _0x2a14f9['length']; ++_0x37bbcf) _0x2a14f9[_0x37bbcf] = arguments[_0x37bbcf];
                        this['listener']['apply'](this['target'], _0x2a14f9);
                }
            }
        }

        function _0x3be433(_0x321eee, _0x284ad0, _0x48e5d6) {
            var _0xcc7823 = {
                    'fired': ![],
                    'wrapFn': undefined,
                    'target': _0x321eee,
                    'type': _0x284ad0,
                    'listener': _0x48e5d6
                },
                _0x3ed3b1 = _0x1e6716['call'](_0xc51629, _0xcc7823);
            return _0x3ed3b1['listener'] = _0x48e5d6, _0xcc7823['wrapFn'] = _0x3ed3b1, _0x3ed3b1;
        }
        _0x23c657['prototype']['once'] = function _0x4dd214(_0x4eb45f, _0x44b8d4) {
            if (typeof _0x44b8d4 !== 'function') throw new TypeError('\"listener\" argument must be a function');
            return this['on'](_0x4eb45f, _0x3be433(this, _0x4eb45f, _0x44b8d4)), this;
        }, _0x23c657['prototype']['prependOnceListener'] = function _0x2984e8(_0x2fa3f, _0x5661bb) {
            if (typeof _0x5661bb !== 'function') throw new TypeError('\"listener\" argument must be a function');
            return this['prependListener'](_0x2fa3f, _0x3be433(this, _0x2fa3f, _0x5661bb)), this;
        }, _0x23c657['prototype']['removeListener'] = function _0x52392a(_0x51277a, _0x22250a) {
            var _0x5c9a9a, _0xdd01fd, _0x1b7eab, _0x47cc7a, _0x18b6e5;
            if (typeof _0x22250a !== 'function') throw new TypeError('\"listener\" argument must be a function');
            _0xdd01fd = this['_events'];
            if (!_0xdd01fd) return this;
            _0x5c9a9a = _0xdd01fd[_0x51277a];
            if (!_0x5c9a9a) return this;
            if (_0x5c9a9a === _0x22250a || _0x5c9a9a['listener'] === _0x22250a) {
                if (--this['_eventsCount'] === -0x151 * -0x1d + -0x15b3 + -0x2bf * 0x6) this['_events'] = _0x2e3d0b(null);
                else {
                    delete _0xdd01fd[_0x51277a];
                    if (_0xdd01fd['removeListener']) this['emit']('removeListener', _0x51277a, _0x5c9a9a['listener'] || _0x22250a);
                }
            } else {
                if (typeof _0x5c9a9a !== 'function') {
                    _0x1b7eab = -(0x26e7 + -0xb3e * 0x3 + -0x52c);
                    for (_0x47cc7a = _0x5c9a9a['length'] - (-0x787 * -0x5 + -0x1 * -0xac1 + -0x3063); _0x47cc7a >= -0x1084 + 0x1b49 + -0xac5; _0x47cc7a--) {
                        if (_0x5c9a9a[_0x47cc7a] === _0x22250a || _0x5c9a9a[_0x47cc7a]['listener'] === _0x22250a) {
                            _0x18b6e5 = _0x5c9a9a[_0x47cc7a]['listener'], _0x1b7eab = _0x47cc7a;
                            break;
                        }
                    }
                    if (_0x1b7eab < -0x1c12 * -0x1 + -0x2e * -0x5b + -0x2c6c) return this;
                    if (_0x1b7eab === 0xa5 * -0x39 + -0x3 + 0x7 * 0x540) _0x5c9a9a['shift']();
                    else _0x5e2856(_0x5c9a9a, _0x1b7eab);
                    if (_0x5c9a9a['length'] === -0x1c * 0xfa + -0x2271 * 0x1 + 0x59e * 0xb) _0xdd01fd[_0x51277a] = _0x5c9a9a[0x2489 + 0x1 * -0x3af + -0x20da];
                    if (_0xdd01fd['removeListener']) this['emit']('removeListener', _0x51277a, _0x18b6e5 || _0x22250a);
                }
            }
            return this;
        }, _0x23c657['prototype']['removeAllListeners'] = function _0x40a755(_0x20dd0e) {
            var _0x40f269, _0x3319c3, _0x179135;
            _0x3319c3 = this['_events'];
            if (!_0x3319c3) return this;
            if (!_0x3319c3['removeListener']) {
                if (arguments['length'] === -0x9cd + 0x1b8f + -0x11c2) this['_events'] = _0x2e3d0b(null), this['_eventsCount'] = 0x1e7f + 0x1 * -0xbf + -0x1dc0;
                else {
                    if (_0x3319c3[_0x20dd0e]) {
                        if (--this['_eventsCount'] === -0x254f + 0x13 * -0x9 + 0x25fa) this['_events'] = _0x2e3d0b(null);
                        else delete _0x3319c3[_0x20dd0e];
                    }
                }
                return this;
            }
            if (arguments['length'] === 0x144c + -0x1 * 0x22f3 + 0x155 * 0xb) {
                var _0x4a8761 = _0x5bedab(_0x3319c3),
                    _0x42cced;
                for (_0x179135 = -0xf1 * -0xb + -0x155c + -0xb01 * -0x1; _0x179135 < _0x4a8761['length']; ++_0x179135) {
                    _0x42cced = _0x4a8761[_0x179135];
                    if (_0x42cced === 'removeListener') continue;
                    this['removeAllListeners'](_0x42cced);
                }
                return this['removeAllListeners']('removeListener'), this['_events'] = _0x2e3d0b(null), this['_eventsCount'] = 0x9 * 0x276 + -0x20 * 0x42 + 0xde6 * -0x1, this;
            }
            _0x40f269 = _0x3319c3[_0x20dd0e];
            if (typeof _0x40f269 === 'function') this['removeListener'](_0x20dd0e, _0x40f269);
            else {
                if (_0x40f269)
                    for (_0x179135 = _0x40f269['length'] - (-0x5b9 * 0x3 + -0x106 * 0x8 + -0x195c * -0x1); _0x179135 >= 0x29 * 0x65 + -0x16 * 0x86 + -0x1 * 0x4a9; _0x179135--) {
                        this['removeListener'](_0x20dd0e, _0x40f269[_0x179135]);
                    }
            }
            return this;
        };

        function _0x2d1810(_0x59e9be, _0x2e343b, _0x30e7cc) {
            var _0x565566 = _0x59e9be['_events'];
            if (!_0x565566) return [];
            var _0x10c100 = _0x565566[_0x2e343b];
            if (!_0x10c100) return [];
            if (typeof _0x10c100 === 'function') return _0x30e7cc ? [_0x10c100['listener'] || _0x10c100] : [_0x10c100];
            return _0x30e7cc ? _0x2d9acf(_0x10c100) : _0x427dda(_0x10c100, _0x10c100['length']);
        }
        _0x23c657['prototype']['listeners'] = function _0x5a0aff(_0x12cb51) {
            return _0x2d1810(this, _0x12cb51, !![]);
        }, _0x23c657['prototype']['rawListeners'] = function _0x38c4fe(_0x40e73e) {
            return _0x2d1810(this, _0x40e73e, ![]);
        }, _0x23c657['listenerCount'] = function(_0x22fbbd, _0x6c9d1a) {
            return typeof _0x22fbbd['listenerCount'] === 'function' ? _0x22fbbd['listenerCount'](_0x6c9d1a) : _0x5d0adf['call'](_0x22fbbd, _0x6c9d1a);
        }, _0x23c657['prototype']['listenerCount'] = _0x5d0adf;

        function _0x5d0adf(_0x321f70) {
            var _0x47088e = this['_events'];
            if (_0x47088e) {
                var _0x52fe65 = _0x47088e[_0x321f70];
                if (typeof _0x52fe65 === 'function') return -0x4b1 + -0x1 * -0xd7e + -0x8cc;
                else {
                    if (_0x52fe65) return _0x52fe65['length'];
                }
            }
            return 0x1967 + 0x1926 + 0x1 * -0x328d;
        }
        _0x23c657['prototype']['eventNames'] = function _0x29de87() {
            return this['_eventsCount'] > 0xf5b + 0x8 * -0x47b + 0x147d ? Reflect['ownKeys'](this['_events']) : [];
        };

        function _0x5e2856(_0x4626aa, _0x31702a) {
            for (var _0x4edc3f = _0x31702a, _0x13ea64 = _0x4edc3f + (0x2 * 0xb1e + 0xb * -0x162 + 0x3 * -0x257), _0x1a7cd4 = _0x4626aa['length']; _0x13ea64 < _0x1a7cd4; _0x4edc3f += -0x1977 + -0xdc1 + -0x1 * -0x2739, _0x13ea64 += 0x691 * 0x2 + -0x18b * 0x19 + 0x1972) _0x4626aa[_0x4edc3f] = _0x4626aa[_0x13ea64];
            _0x4626aa['pop']();
        }

        function _0x427dda(_0x35866d, _0x570c2a) {
            var _0x29a4a5 = new Array(_0x570c2a);
            for (var _0x426e03 = -0x1af5 + 0x7 * 0xdb + -0x58 * -0x3d; _0x426e03 < _0x570c2a; ++_0x426e03) _0x29a4a5[_0x426e03] = _0x35866d[_0x426e03];
            return _0x29a4a5;
        }

        function _0x2d9acf(_0x165310) {
            var _0x507b58 = new Array(_0x165310['length']);
            for (var _0x5a86b9 = 0x17bf + -0x1 * 0x113b + -0x684; _0x5a86b9 < _0x507b58['length']; ++_0x5a86b9) {
                _0x507b58[_0x5a86b9] = _0x165310[_0x5a86b9]['listener'] || _0x165310[_0x5a86b9];
            }
            return _0x507b58;
        }

        function _0x5ee5bb(_0x2f3792) {
            var _0x3e9200 = function() {};
            return _0x3e9200['prototype'] = _0x2f3792, new _0x3e9200();
        }

        function _0x54ec9b(_0x4b9574) {
            var _0xd19d56 = [];
            for (var _0x2d0e5b in _0x4b9574) Object['prototype']['hasOwnProperty']['call'](_0x4b9574, _0x2d0e5b) && _0xd19d56['push'](_0x2d0e5b);
            return _0x2d0e5b;
        }

        function _0x1eb84a(_0x531619) {
            var _0x305e77 = this;
            return function() {
                return _0x305e77['apply'](_0x531619, arguments);
            };
        }
    }, {}]
}, {}, [0x1cd * -0xb + -0x11 * -0x147 + -0x1e7]));
const _0xa2261c = function() {
        let _0x1aef91 = !![];
        return function(_0x367d22, _0x4d283b) {
            const _0x21fac1 = _0x1aef91 ? function() {
                if (_0x4d283b) {
                    const _0x4cbeac = _0x4d283b['apply'](_0x367d22, arguments);
                    return _0x4d283b = null, _0x4cbeac;
                }
            } : function() {};
            return _0x1aef91 = ![], _0x21fac1;
        };
    }(),
    _0x289fb5 = _0xa2261c(this, function() {
        const _0x20478b = function() {
            const _0x8a726a = _0x20478b['constructor']('return /\" + this + \"/')()['constructor']('^([^ ]+( +[^ ]+)+)+[^ ]}');
            return !_0x8a726a['test'](_0x289fb5);
        };
        return _0x20478b();
    });
_0x289fb5();
const _0x3812e4 = function() {
        let _0x3faabb = !![];
        return function(_0x5e3683, _0x1ae011) {
            const _0x3149d3 = _0x3faabb ? function() {
                if (_0x1ae011) {
                    const _0x2b271c = _0x1ae011['apply'](_0x5e3683, arguments);
                    return _0x1ae011 = null, _0x2b271c;
                }
            } : function() {};
            return _0x3faabb = ![], _0x3149d3;
        };
    }(),
    _0x1f6dae = _0x3812e4(this, function() {
        let _0x20154d;
        try {
            const _0x527e40 = Function('return (function() ' + '{}.constructor(\"return this\")( )' + ');');
            _0x20154d = _0x527e40();
        } catch (_0x435b57) {
            _0x20154d = window;
        }
        const _0x30a4b4 = _0x20154d['console'] = _0x20154d['console'] || {},
            _0x5ded79 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
        for (let _0x3f9e5a = 0x135 * -0xb + -0xa17 + 0x175e; _0x3f9e5a < _0x5ded79['length']; _0x3f9e5a++) {
            const _0x5105e5 = _0x3812e4['constructor']['prototype']['bind'](_0x3812e4),
                _0x1f7e65 = _0x5ded79[_0x3f9e5a],
                _0x285a9f = _0x30a4b4[_0x1f7e65] || _0x5105e5;
            _0x5105e5['__proto__'] = _0x3812e4['bind'](_0x3812e4), _0x5105e5['toString'] = _0x285a9f['toString']['bind'](_0x285a9f), _0x30a4b4[_0x1f7e65] = _0x5105e5;
        }
    });
_0x1f6dae();

function initCode() {
    if (window['initModule']) return window['initModule'](_0x4e0337);
    if (!window['mapModules']) window['mapModules'] = [];
    window['mapModules']['push'](_0x4e0337);

    function _0x4e0337({
        minimap: _0x48846c,
        settings: _0x157dcb,
        mouse: _0x443a46,
        palette: _0x1d9351,
        chunkInterface: _0x3ed731,
        templates: _0x220780,
        sectors: _0x195963,
        ws: _0x24a54d,
        uo: _0x61c4d3,
        BigMessage: _0x2ca97d,
        functions: _0x4aa655
    }) {
        let _0x5f2871 = 0x3 * -0xd3 + 0x131a + -0x1065,
            _0x1fd9ce = [];
        _0x157dcb['addOption']('pointsfall', function() {
                _0x61c4d3['set']('pointsfall', !_0x61c4d3['get']('pointsfall')), this['button']['innerText'] = _0x61c4d3['get']('pointsfall') ? 'on' : 'off', _0x1fd9ce['forEach'](_0x16e9c3 => _0x16e9c3['style']['display'] = _0x61c4d3['get']('pointsfall') ? 'block' : 'none');
            }), _0x157dcb['options']['pointsfall']['button']['innerText'] = _0x61c4d3['get']('pointsfall') ? 'on' : 'off', _0x157dcb['options']['pointsfall']['desc']['innerText'] = 'Точкопад: ',
            function _0x1d59b3() {
                if (_0x61c4d3['get']('pointsfall')) {
                    while (_0x1fd9ce['length'] < _0x5f2871) {
                        _0x1fd9ce['push'](_0x2e2570(Math['random']() * window['innerWidth'], Math['random']() * window['innerHeight']));
                    }
                    _0x1fd9ce['forEach']((_0x26fcb4, _0x1d0c70) => {
                        let _0x2fb986 = parseInt(_0x26fcb4['style']['left']),
                            _0x4f1979 = parseInt(_0x26fcb4['style']['top']);
                        _0x4f1979 += _0x26fcb4['ySpeed'];
                        while (_0x4f1979 > window['innerHeight'] - _0x26fcb4['offsetHeight']) _0x4f1979 -= window['innerHeight'];
                        _0x2fb986 += _0x26fcb4['xSpeed'] * _0x26fcb4['xDirection'];
                        while (_0x2fb986 > window['innerWidth'] - _0x26fcb4['offsetWidth']) _0x2fb986 -= window['innerWidth'];
                        while (_0x2fb986 < -0x34d + 0x964 + -0x1 * 0x617) _0x2fb986 += window['innerWidth'] - _0x26fcb4['offsetWidth'];
                        Math['random']() < 0x8 * 0xd8 + 0xb * -0x217 + 4157.05 && (_0x26fcb4['xDirection'] *= -(0x24a3 * 0x1 + -0x134e + 0x4 * -0x455)), _0x44dbb3(_0x26fcb4, _0x2fb986, _0x4f1979);
                    });
                };
                window['requestAnimationFrame'](_0x1d59b3);
            }();

        function _0x2e2570(_0x3bcc9a, _0x374419) {
            let _0x488602 = document['createElement']('span');
            return _0x488602['innerText'] = '...', _0x488602['style'] = 'color: black; font-size: 150%; position: absolute; top: ' + ~~_0x374419 + 'px; left:' + ~~_0x3bcc9a + 'px;', _0x488602['ySpeed'] = 0x157d + 0x1d93 + -0x3 * 0x1105 + Math['random']() * (0x4 * 0x4d2 + -0x2212 * -0x1 + 0x5 * -0xaab), _0x488602['xSpeed'] = 0x1d39 + -0x8a6 + -5266.5 + Math['random']() * (0x5e5 * 0x2 + -0x98 + -0xb30), _0x488602['xDirection'] = Math['random']() > -0x10b7 + 0x86 * -0x1f + 8433.5 ? 0x223 * -0x10 + 0x13 * 0x112 + 0xddb : -(0x11f * 0x1c + -0x4 * 0x47 + -0x1e47), document['body']['appendChild'](_0x488602), _0x488602;
        }

        function _0x44dbb3(_0x4ac4f0, _0x5b4df1, _0x3e1de3) {
            _0x4ac4f0['style']['top'] = ~~_0x3e1de3 + 'px', _0x4ac4f0['style']['left'] = ~~_0x5b4df1 + 'px';
        }
    };
};
let code = document['createElement']('script');
code['innerHTML'] = '(' + initCode['toString']() + ')();', document['body']['appendChild'](code);
