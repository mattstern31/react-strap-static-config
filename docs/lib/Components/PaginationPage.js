/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import PaginationExample from '../examples/Pagination';
const PaginationExampleSource = require('!!raw!../examples/Pagination');

import PaginationStateExample from '../examples/PaginationState';
const PaginationStateExampleSource = require('!!raw!../examples/PaginationState');

import PaginationSizingLargeExample from '../examples/PaginationSizingLarge';
const PaginationSizingLargeExampleSource = require('!!raw!../examples/PaginationSizingLarge');

import PaginationSizingSmallExample from '../examples/PaginationSizingSmall';
const PaginationSizingSmallExampleSource = require('!!raw!../examples/PaginationSizingSmall');

export default class PaginationPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Pagination" />
        <div className="docs-example">
          <PaginationExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Pagination.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
}`}
          </PrismCode>
        </pre>
        <SectionTitle>Disabled and active states</SectionTitle>
        <div className="docs-example">
          <PaginationStateExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationStateExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Sizing</SectionTitle>
        <div className="docs-example">
          <PaginationSizingLargeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationSizingLargeExampleSource}
          </PrismCode>
        </pre>
        <div className="docs-example">
          <PaginationSizingSmallExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationSizingSmallExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
