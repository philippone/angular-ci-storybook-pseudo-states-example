declare module 'postcss-pseudo-classes' {
    export type BlackListItem = string | { [key: string]: boolean };
  
    export interface PostCssLoaderPseudoClassesPluginOptions {
      // pseudo-class postcss addon option blacklist
      blacklist?: Array<BlackListItem>;
      // pseudo-class postcss addon option prefix
      prefix?: string;
      preserveBeforeAfter?: boolean;
    }
  
    // export const postcssPseudoClasses = (
    //   _option: PostCssLoaderPseudoClassesPluginOptions
    // ): ((css: Array<any>) => void) => {};
  
    // const createCombinations = (_a: string, _b: string): Array<string> => {};
  
    // const createSerialCombinations = (
    //   _arr: Array<any>,
    //   _fn: (combination: string, element: any) => any
    // ): Array<any> => {};
  
    // export default postcssPseudoClasses;
  }
  