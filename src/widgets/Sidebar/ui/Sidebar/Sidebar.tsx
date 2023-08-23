import { classNames } from 'shared/lib/classNames'
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props : SidebarProps ) => {

    const [collapsed, setCollapsed] = useState(false)
    const { className, ...otherProps } = props
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div 
            {...otherProps}
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
