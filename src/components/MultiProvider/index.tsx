import React from 'react';
import { IMultiProviderProps } from '../../core/interfaces';

const chainAsChildren = (children: React.ReactNode, component: React.ReactElement) =>
  React.cloneElement(component, {}, children);

const MultiProvider = ({ children, providers }: IMultiProviderProps) => (
  <React.Fragment>{providers.reduceRight(chainAsChildren, children)}</React.Fragment>
);

export default MultiProvider;
