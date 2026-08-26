declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// For standard CSS imports without modules
declare module '*.css' {
  const content: string;
  export default content;
}