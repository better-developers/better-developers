import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

export type NavBarContextProps = 'light' | 'dark';

export const NavBarContextDefaultValue: NavBarContextProps = 'dark';

export const NavBarContext = createContext<[NavBarContextProps, Dispatch<SetStateAction<NavBarContextProps>>]>([
    NavBarContextDefaultValue,
    () => {},
]);

export const NavBarProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const contextState = useState<NavBarContextProps>(NavBarContextDefaultValue);

    return <NavBarContext.Provider value={contextState}>{children}</NavBarContext.Provider>;
};
