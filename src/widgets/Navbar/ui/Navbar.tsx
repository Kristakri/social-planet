import { classNames } from 'src/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps): JSX.Element => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <nav className={classNames(cls.Navbar, {}, [className!])}>
      <ul>
        <li>
          Войти
        </li>
      </ul>
    </nav>
  );
};