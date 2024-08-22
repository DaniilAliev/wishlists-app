import { useTranslations } from "next-intl"
import Link from "next/link"
import { FC } from "react"

const AppGoBackLink: FC<{ link: string }> & React.ComponentProps<'a'> = ({ link, ...props }) => {
  const t = useTranslations('BackButton')

  return (
    <Link href={link} {...props}>
      <button className="text-dark-red">{t('text')}</button>
    </Link>
  )
}

export default AppGoBackLink
