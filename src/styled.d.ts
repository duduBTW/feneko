// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      main: string;
      second: string;
      secondLigth: string;
    };
  }
}
