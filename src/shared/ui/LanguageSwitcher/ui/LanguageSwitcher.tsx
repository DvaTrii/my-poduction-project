import { classNames } from 'shared/lib/classNames'
import cls from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = (props : LanguageSwitcherProps ) => {
    const {t, i18n} = useTranslation()

    const { className } = props

    const toggleLang = async () =>  i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
   
    return (
        <div className={classNames(cls.LanguageSwitcher, {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={toggleLang}>
                {t('Language')}
            </Button>
        </div>
    );
};
