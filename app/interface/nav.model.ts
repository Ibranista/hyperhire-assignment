export interface INavbar {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  menuItems: string[];
  navRight: {
    loginLabel: string;
    globe: {
      icon: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
      dropdown: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
    };
  };
}
