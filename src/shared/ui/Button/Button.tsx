import { classNames } from 'src/shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { className, children, ...otherProps } = props
  return (
    <button className={classNames(cls.Button, {}, [className!])} {...otherProps}>
      {children}
    </button>
  );
};