import { useTranslation } from 'react-i18next'
import { ThemeSwitcher } from 'src/shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'src/widgets/LangSwitcher/LangSwitcher'
import { Navbar } from 'src/widgets/Navbar'


const App = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Navbar />
      <h1>{t("Hello")}</h1>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  )
}

export default App
