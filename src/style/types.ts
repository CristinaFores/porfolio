import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        base: string;
        dark: string;
        grey: string;
        lighGrey: string;
        text: string;
        darkBlue: string;
      };
    };
  }
}
