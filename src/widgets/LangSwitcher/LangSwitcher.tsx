import { classNames } from 'src/shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import i18n from 'src/shared/config/i18n/i18n'
import { Button } from 'src/shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = (props: LangSwitcherProps): JSX.Element => {
  const { className } = props
  const {t} = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  
  return (
    <div className={classNames(cls.LangSwitcher, {}, [className!])}>
      <Button onClick={toggle}>{t('language')}</Button>
    </div>
  );
};