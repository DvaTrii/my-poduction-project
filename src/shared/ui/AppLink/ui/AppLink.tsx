import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import cls from './AppLink.module.scss';
import { ReactNode } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    NEW_THEME = 'newTheme',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    to: string;
    children?: ReactNode;

}

export const AppLink: React.FC<AppLinkProps> = (props: AppLinkProps) => {

    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <Link 
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
