
import { useTheme } from "@/app/providers/ThemeProvider"
import { formatDate } from "@/shared/helpers/formatDate"
import { ThemeButton } from "@/features/theme/ui/ThemeButton/ThemeButton"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

export const Header = () => {
  const { isDark } = useTheme()
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <Link to={'/'}>
          <h1 className={styles.title}>News Nick</h1>
        </Link>
        <p className={styles.data}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  )
}
