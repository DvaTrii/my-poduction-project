import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink className={cls.mainLink} to='/'>Main</AppLink> 
                <AppLink to='/about'>About</AppLink> 
            </div>
        </div>
    );
};
