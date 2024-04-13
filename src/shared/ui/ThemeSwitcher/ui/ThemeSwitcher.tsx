import { Theme, useTheme } from 'src/app/providers/ThemeProvider'
import { classNames } from 'src/shared/lib/classNames/classNames'
import { Button } from 'src/shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className!])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? "light" : "dark"}
    </Button>
  )
}
