import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        base: string;
        dark: string;
        lighGrey: string;
        text: string;
        darkBlue: string;
      };
    };
  }
}
