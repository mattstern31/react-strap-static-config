<a name="3.4.1"></a>
## [3.4.1](https://github.com/reactstrap/reactstrap/compare/3.4.0...v3.4.1) (2016-10-16)


### Features

* **Input:** enable refs on Input components ([#178](https://github.com/reactstrap/reactstrap/issues/178)) ([ed9e584](https://github.com/reactstrap/reactstrap/commit/ed9e584))



<a name="3.4.0"></a>
# [3.4.0](https://github.com/reactstrap/reactstrap/compare/3.3.2...v3.4.0) (2016-10-06)


### Features

* **Alert:** Add Alert component ([#162](https://github.com/reactstrap/reactstrap/issues/162)) ([240e776](https://github.com/reactstrap/reactstrap/commit/240e776))



<a name="3.3.2"></a>
## [3.3.2](https://github.com/reactstrap/reactstrap/compare/3.3.1...v3.3.2) (2016-10-01)


### Bug Fixes

* **Modal:** Account for body padding when scrollbar is present ([#165](https://github.com/reactstrap/reactstrap/issues/165)) ([e159628](https://github.com/reactstrap/reactstrap/commit/e159628))



<a name="3.3.1"></a>
## [3.3.1](https://github.com/reactstrap/reactstrap/compare/3.3.0...v3.3.1) (2016-09-28)


### Bug Fixes

* **label:** add disabled class when form-check-inline and disabled ([#159](https://github.com/reactstrap/reactstrap/issues/159)) ([312b29e](https://github.com/reactstrap/reactstrap/commit/312b29e))



<a name="3.3.0"></a>
# [3.3.0](https://github.com/reactstrap/reactstrap/compare/3.2.2...v3.3.0) (2016-09-24)


### Features

* **Jumbotron:** add Jumbotron Component ([#151](https://github.com/reactstrap/reactstrap/issues/151)) ([20f9c03](https://github.com/reactstrap/reactstrap/commit/20f9c03)), closes [#73](https://github.com/reactstrap/reactstrap/issues/73)



<a name="3.2.2"></a>
## [3.2.2](https://github.com/reactstrap/reactstrap/compare/3.2.1...v3.2.2) (2016-09-19)

### Features

* **Tooltip:** add ability to disable autohide on tooltip content hover ([#149](https://github.com/reactstrap/reactstrap/issues/149)) ([68a0ed7](https://github.com/reactstrap/reactstrap/commit/68a0ed7))

<a name="3.2.1"></a>
## [3.2.1](https://github.com/reactstrap/reactstrap/compare/3.2.0...v3.2.1) (2016-09-18)


### Features

* **Tooltip:** add delay prop ([#143](https://github.com/reactstrap/reactstrap/issues/143)) ([b18fb74](https://github.com/reactstrap/reactstrap/commit/b18fb74)), closes [#115](https://github.com/reactstrap/reactstrap/issues/115)



<a name="3.2.0"></a>
# [3.2.0](https://github.com/reactstrap/reactstrap/compare/3.1.0...v3.2.0) (2016-09-14)


### Features

* **modal:** add backdrop and keyboard options ([#135](https://github.com/reactstrap/reactstrap/issues/135)) ([7bf5d0a](https://github.com/reactstrap/reactstrap/commit/7bf5d0a)), closes [#134](https://github.com/reactstrap/reactstrap/issues/134)
* **Modal:** allow for multiple modals ([#138](https://github.com/reactstrap/reactstrap/issues/138)) ([7ada8cf](https://github.com/reactstrap/reactstrap/commit/7ada8cf)), closes [#137](https://github.com/reactstrap/reactstrap/issues/137)



<a name="3.1.0"></a>
# [3.1.0](https://github.com/reactstrap/reactstrap/compare/3.0.1...v3.1.0) (2016-09-11)


### Features

* **Tabs:** add TabContent & TabPane components ([#131](https://github.com/reactstrap/reactstrap/issues/131)) ([2957ede](https://github.com/reactstrap/reactstrap/commit/2957ede))



<a name="3.0.1"></a>
## [3.0.1](https://github.com/reactstrap/reactstrap/compare/3.0.0...v3.0.1) (2016-09-08)


### Bug Fixes

* **docs:** update deploy script ([8fd0761](https://github.com/reactstrap/reactstrap/commit/8fd0761))
* **modal:** fix event listener for modal ([#127](https://github.com/reactstrap/reactstrap/issues/127)) ([c778608](https://github.com/reactstrap/reactstrap/commit/c778608)), closes [#126](https://github.com/reactstrap/reactstrap/issues/126)
* **TetherContent:** rerender when other props change ([#128](https://github.com/reactstrap/reactstrap/issues/128)) ([25600d4](https://github.com/reactstrap/reactstrap/commit/25600d4)), closes [#125](https://github.com/reactstrap/reactstrap/issues/125)



<a name="3.0.0"></a>
# [3.0.0](https://github.com/reactstrap/reactstrap/compare/2.6.1...v3.0.0) (2016-09-06)


### Code Refactoring

* **Button,DropdownToggle:** default to secondary style, remove cloning ([#120](https://github.com/reactstrap/reactstrap/issues/120)) ([5c56749](https://github.com/reactstrap/reactstrap/commit/5c56749)), closes [#98](https://github.com/reactstrap/reactstrap/issues/98)


### BREAKING CHANGES

* Button,DropdownToggle: DropdownToggle no longer clones each element in props.children when it’s an array, instead it renders props.children inside a single component (Butt
* Button,DropdownToggle: Button color now defaults to “secondary”. This behavior aligns with DropdownToggle color default.



<a name="2.6.1"></a>
## [2.6.1](https://github.com/reactstrap/reactstrap/compare/2.6.0...v2.6.1) (2016-09-01)


### Features

* **ModalClassName:** Adds custom class name for modal-dialogs for namespacing ([#111](https://github.com/reactstrap/reactstrap/issues/111)) ([5f7cab6](https://github.com/reactstrap/reactstrap/commit/5f7cab6))



<a name="2.6.0"></a>
# [2.6.0](https://github.com/reactstrap/reactstrap/compare/2.5.0...v2.6.0) (2016-08-21)


### Features

* **Pagination:** add Pagination component ([#108](https://github.com/reactstrap/reactstrap/issues/108)) ([fdc5c45](https://github.com/reactstrap/reactstrap/commit/fdc5c45))



<a name="2.5.0"></a>
# [2.5.0](https://github.com/reactstrap/reactstrap/compare/2.4.0...v2.5.0) (2016-08-19)


### Bug Fixes

* **Modal:** set focus state before showing ([#104](https://github.com/reactstrap/reactstrap/issues/104)) ([a358233](https://github.com/reactstrap/reactstrap/commit/a358233))
* **Modal:** use togglePortal on componentDidMount ([#106](https://github.com/reactstrap/reactstrap/issues/106)) ([942b24a](https://github.com/reactstrap/reactstrap/commit/942b24a))


### Features

* **Progress:** add Progress component ([#105](https://github.com/reactstrap/reactstrap/issues/105)) ([bc185d8](https://github.com/reactstrap/reactstrap/commit/bc185d8)), closes [#78](https://github.com/reactstrap/reactstrap/issues/78)



<a name="2.4.0"></a>
# [2.4.0](https://github.com/reactstrap/reactstrap/compare/2.3.0...v2.4.0) (2016-08-18)


### Features

* **Media:** add Media component ([#94](https://github.com/reactstrap/reactstrap/issues/94)) ([d4c0f2d](https://github.com/reactstrap/reactstrap/commit/d4c0f2d))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/reactstrap/reactstrap/compare/2.2.0...v2.3.0) (2016-08-18)


### Features

* **inputGroup:** add InputGroup components ([#99](https://github.com/reactstrap/reactstrap/issues/99)) ([18a2ef7](https://github.com/reactstrap/reactstrap/commit/18a2ef7)), closes [#74](https://github.com/reactstrap/reactstrap/issues/74)



<a name="2.2.0"></a>
# [2.2.0](https://github.com/reactstrap/reactstrap/compare/2.1.0...v2.2.0) (2016-08-13)


### Features

* **Card:** update img position classes ([#91](https://github.com/reactstrap/reactstrap/issues/91)) ([920e2f8](https://github.com/reactstrap/reactstrap/commit/920e2f8))
* **Dropdown:** add size prop ([#90](https://github.com/reactstrap/reactstrap/issues/90)) ([92c62b1](https://github.com/reactstrap/reactstrap/commit/92c62b1))
* **Dropdowns:** use split class for split dropdowns ([#92](https://github.com/reactstrap/reactstrap/issues/92)) ([ee17a47](https://github.com/reactstrap/reactstrap/commit/ee17a47))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/reactstrap/reactstrap/compare/2.0.0...v2.1.0) (2016-08-06)


### Features

* **breadcrumb:** Add Breadcrumb and BreadcrumbItem ([d34d738](https://github.com/reactstrap/reactstrap/commit/d34d738))
* **form:** add forms and form element components ([#67](https://github.com/reactstrap/reactstrap/issues/67)) ([7c32483](https://github.com/reactstrap/reactstrap/commit/7c32483))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/reactstrap/reactstrap/compare/1.6.1...v2.0.0) (2016-07-28)


### Features

* **bootstrap:** update for v4 alpha 3 ([f617dc5](https://github.com/reactstrap/reactstrap/commit/f617dc5))
* **Col:** Update Col component with alpha 3 changes ([b62ee01](https://github.com/reactstrap/reactstrap/commit/b62ee01))
* **outline:** Make outline a separate prop for Card & Button ([#62](https://github.com/reactstrap/reactstrap/issues/62)) ([c65e952](https://github.com/reactstrap/reactstrap/commit/c65e952))


### BREAKING CHANGES

* bootstrap: Components were updated for v4 alpha 3

 - Button outline class change from `.{variant}-outline` to `.outline-{variant}`.
 - label is now tag and all of the label variants are now tag variants.
 - Cards now have an outline variant.



<a name="1.6.1"></a>
## [1.6.1](https://github.com/reactstrap/reactstrap/compare/1.6.0...v1.6.1) (2016-07-16)



<a name="1.6.0"></a>
# [1.6.0](https://github.com/reactstrap/reactstrap/compare/1.5.0...v1.6.0) (2016-07-11)



<a name="1.5.0"></a>
# [1.5.0](https://github.com/reactstrap/reactstrap/compare/1.4.0...v1.5.0) (2016-06-26)


### Bug Fixes

* **docs:** make buttons display block on xs views ([#46](https://github.com/reactstrap/reactstrap/issues/46))([fd14292](https://github.com/reactstrap/reactstrap/commit/fd14292))


### Features

* **Tables:** Add Table component ([#47](https://github.com/reactstrap/reactstrap/issues/47))([c935487](https://github.com/reactstrap/reactstrap/commit/c935487))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/reactstrap/reactstrap/compare/1.3.4...v1.4.0) (2016-06-26)


### Features

* **Card:** add Card related components ([#44](https://github.com/reactstrap/reactstrap/issues/44))([b782807](https://github.com/reactstrap/reactstrap/commit/b782807))



<a name="1.3.4"></a>
## [1.3.4](https://github.com/reactstrap/reactstrap/compare/1.3.3...v1.3.4) (2016-06-12)


### Bug Fixes

* **Modal:** handle prop updates ([#35](https://github.com/reactstrap/reactstrap/issues/35)) ([#40](https://github.com/reactstrap/reactstrap/issues/40))([23a3561](https://github.com/reactstrap/reactstrap/commit/23a3561))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/reactstrap/reactstrap/compare/1.3.2...v1.3.3) (2016-06-12)



<a name="1.3.2"></a>
## [1.3.2](https://github.com/reactstrap/reactstrap/compare/1.3.1...v1.3.2) (2016-06-12)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/reactstrap/reactstrap/compare/1.3.0...v1.3.1) (2016-04-24)




<a name="1.3.0"></a>
# [1.3.0](https://github.com/reactstrap/reactstrap/compare/1.2.4...v1.3.0) (2016-03-31)


### Bug Fixes

* **.gitignore:** add root directories to ignore ([8952445](https://github.com/reactstrap/reactstrap/commit/8952445))



<a name="1.2.4"></a>
## [1.2.4](https://github.com/reactstrap/reactstrap/compare/1.2.3...v1.2.4) (2016-03-28)


### Bug Fixes

* **src:** update paths to src ([c61c466](https://github.com/reactstrap/reactstrap/commit/c61c466))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/reactstrap/reactstrap/compare/1.2.2...v1.2.3) (2016-03-28)


### Bug Fixes

* **build:** update scripts ([051e805](https://github.com/reactstrap/reactstrap/commit/051e805))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/reactstrap/reactstrap/compare/1.2.1...v1.2.2) (2016-03-28)


### Bug Fixes

* **src:** update path to src ([5e0caa6](https://github.com/reactstrap/reactstrap/commit/5e0caa6))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/reactstrap/reactstrap/compare/1.2.0...v1.2.1) (2016-03-28)




<a name="1.2.0"></a>
# [1.2.0](https://github.com/reactstrap/reactstrap/compare/1.1.0...v1.2.0) (2016-03-28)


### Features

* **Navbar:** add Navbar components ([91ad2b4](https://github.com/reactstrap/reactstrap/commit/91ad2b4))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/reactstrap/reactstrap/compare/1.0.0...v1.1.0) (2016-03-27)


### Features

* **Navs:** Add nav components ([5e2ba03](https://github.com/reactstrap/reactstrap/commit/5e2ba03))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/reactstrap/reactstrap/compare/0.8.0...v1.0.0) (2016-03-27)


### Code Refactoring

* **components:** standardize custom tag names ([494e4ec](https://github.com/reactstrap/reactstrap/commit/494e4ec))


### BREAKING CHANGES

* components: `El` prop is now `tag`. This standardizes the way
custom elements should render their html “tags”.



<a name="0.8.0"></a>
# [0.8.0](https://github.com/reactstrap/reactstrap/compare/0.7.2...v0.8.0) (2016-03-27)


### Features

* **Layout:** Add Container, Row, Col components ([69ada73](https://github.com/reactstrap/reactstrap/commit/69ada73))



<a name="0.7.2"></a>
## [0.7.2](https://github.com/reactstrap/reactstrap/compare/0.7.1...v0.7.2) (2016-03-26)




<a name="0.7.1"></a>
## [0.7.1](https://github.com/reactstrap/reactstrap/compare/0.7.0...v0.7.1) (2016-03-26)




<a name="0.7.0"></a>
# [0.7.0](https://github.com/reactstrap/reactstrap/compare/0.6.1...v0.7.0) (2016-03-26)


### Features

* **Button:** render anchor tag if href prop exists ([61f4a11](https://github.com/reactstrap/reactstrap/commit/61f4a11))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/reactstrap/reactstrap/compare/0.6.0...v0.6.1) (2016-03-26)




<a name="0.6.0"></a>
# [0.6.0](https://github.com/reactstrap/reactstrap/compare/0.5.7...v0.6.0) (2016-03-26)


### Features

* **package:** add bootstrap@4.0.0-alpha.2 and css loaders ([046079b](https://github.com/reactstrap/reactstrap/commit/046079b))



<a name="0.5.7"></a>
## [0.5.7](https://github.com/reactstrap/reactstrap/compare/0.5.6...v0.5.7) (2016-03-25)


### Bug Fixes

* **ButtonGroup:** remove btn-group when vertical ([9b70e37](https://github.com/reactstrap/reactstrap/commit/9b70e37))
* **docs:** add and use reactstrap alias ([fcfe88d](https://github.com/reactstrap/reactstrap/commit/fcfe88d))



<a name="0.5.6"></a>
## [0.5.6](https://github.com/reactstrap/reactstrap/compare/0.5.5...v0.5.6) (2016-03-24)




<a name="0.5.5"></a>
## [0.5.5](https://github.com/reactstrap/reactstrap/compare/0.5.4...v0.5.5) (2016-03-24)


### Bug Fixes

* **ModalHeader:** update close character ([7128e78](https://github.com/reactstrap/reactstrap/commit/7128e78))



<a name="0.5.4"></a>
## [0.5.4](https://github.com/reactstrap/reactstrap/compare/0.5.3...v0.5.4) (2016-03-20)




<a name="0.5.3"></a>
## [0.5.3](https://github.com/reactstrap/reactstrap/compare/0.5.2...v0.5.3) (2016-03-14)




<a name="0.5.2"></a>
## [0.5.2](https://github.com/reactstrap/reactstrap/compare/0.5.1...v0.5.2) (2016-03-14)


### Bug Fixes

* **examples:** remove .min from example script ([b051dc1](https://github.com/reactstrap/reactstrap/commit/b051dc1))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/reactstrap/reactstrap/compare/0.5.0...0.5.1) (2016-03-13)




<a name="0.5.0"></a>
# [0.5.0](https://github.com/reactstrap/reactstrap/compare/0.4.0...0.5.0) (2016-03-13)


### Bug Fixes

* **tests:** make them faster & fix dropdown ([5dadc6f](https://github.com/reactstrap/reactstrap/commit/5dadc6f))

### Features

* **Fade:** enable fading components ([a84df68](https://github.com/reactstrap/reactstrap/commit/a84df68))
* **Label:** add component ([28d3edf](https://github.com/reactstrap/reactstrap/commit/28d3edf))
* **Layout:** add PopoverExample ([8200ee2](https://github.com/reactstrap/reactstrap/commit/8200ee2))
* **Layout:** include LabelsExample in Layout ([df1baa4](https://github.com/reactstrap/reactstrap/commit/df1baa4))
* **lib:** export Label component ([2856cd0](https://github.com/reactstrap/reactstrap/commit/2856cd0))
* **Modal:** add modal components ([6c2293e](https://github.com/reactstrap/reactstrap/commit/6c2293e))
* **Popover:** add component ([bc66aec](https://github.com/reactstrap/reactstrap/commit/bc66aec))
* **PopoverContent:** add component ([7282225](https://github.com/reactstrap/reactstrap/commit/7282225))
* **PopoverTitle:** add component ([bdf6623](https://github.com/reactstrap/reactstrap/commit/bdf6623))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/reactstrap/reactstrap/compare/0.3.0...0.4.0) (2016-02-29)


### Features

* **Tooltips:** add component and utils ([0ddbed5](https://github.com/reactstrap/reactstrap/commit/0ddbed5))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/reactstrap/reactstrap/compare/0.2.0...0.3.0) (2016-02-28)


### Bug Fixes

* **Button:** add disabled class ([96627ef](https://github.com/reactstrap/reactstrap/commit/96627ef))

### Features

* **Dropdowns:** add TetherContent support ([16c0f86](https://github.com/reactstrap/reactstrap/commit/16c0f86))
* **Dropdowns:** pass more methods to children ([87596e4](https://github.com/reactstrap/reactstrap/commit/87596e4))
* **TetherContent:** support Tethering Content to Targets ([573d47e](https://github.com/reactstrap/reactstrap/commit/573d47e))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/reactstrap/reactstrap/compare/065e978...0.2.0) (2016-02-21)


### Bug Fixes

* **package.json:** add missing dev-dep babel-polyfill ([065e978](https://github.com/reactstrap/reactstrap/commit/065e978))

### Features

* **ButtonDropdown:** wrap Dropdown for ButtonDropdown ([a2ea178](https://github.com/reactstrap/reactstrap/commit/a2ea178))
* **ButtonGroup:** Add button group and toolbar ([123b435](https://github.com/reactstrap/reactstrap/commit/123b435))
* **buttons:** update examples & tests ([52fd2fb](https://github.com/reactstrap/reactstrap/commit/52fd2fb))
* **Buttons:** support block level buttons ([f9cf8db](https://github.com/reactstrap/reactstrap/commit/f9cf8db))
* **Dropdowns:** add examples ([3d48e8c](https://github.com/reactstrap/reactstrap/commit/3d48e8c))
* **Dropdowns:** basic dropdown, toggle, menu & menu items ([750aaf9](https://github.com/reactstrap/reactstrap/commit/750aaf9))



