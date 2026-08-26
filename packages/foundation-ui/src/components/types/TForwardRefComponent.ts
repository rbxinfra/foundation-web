/* Helper type for auto detecting the element type */
export interface TForwardRefComponent<TProps, TDefaultElement extends HTMLElement = HTMLElement> {
  <TElement extends HTMLElement = TDefaultElement>(
    props: TProps & React.RefAttributes<TElement>
  ): React.ReactElement | null;
  displayName?: string;
  propTypes?: any;
  defaultProps?: Partial<TProps>;
}