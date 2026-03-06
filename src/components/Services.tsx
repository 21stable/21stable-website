'use client'

import { useLang } from '@/lib/i18n'

export default function Services() {
  const { t } = useLang()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
      <div className="p-6 bg-white hover:bg-surfaceHover transition-colors group">
        <span className="text-4xl font-serif text-border group-hover:text-muted/30 transition-colors">01</span>
        <h3 className="font-serif text-lg text-foreground mt-2 mb-2">{t('products.01.title')}</h3>
        <p className="text-sm text-muted leading-relaxed">{t('products.01.desc')}</p>
      </div>
      <div className="p-6 bg-white hover:bg-surfaceHover transition-colors group">
        <span className="text-4xl font-serif text-border group-hover:text-muted/30 transition-colors">02</span>
        <h3 className="font-serif text-lg text-foreground mt-2 mb-2">{t('products.02.title')}</h3>
        <p className="text-sm text-muted leading-relaxed">{t('products.02.desc')}</p>
      </div>
      <div className="p-6 bg-white hover:bg-surfaceHover transition-colors group">
        <span className="text-4xl font-serif text-border group-hover:text-muted/30 transition-colors">03</span>
        <h3 className="font-serif text-lg text-foreground mt-2 mb-2">{t('products.03.title')}</h3>
        <p className="text-sm text-muted leading-relaxed">{t('products.03.desc')}</p>
      </div>
      <div className="p-6 bg-white hover:bg-surfaceHover transition-colors group">
        <span className="text-4xl font-serif text-border group-hover:text-muted/30 transition-colors">04</span>
        <h3 className="font-serif text-lg text-foreground mt-2 mb-2">{t('products.04.title')}</h3>
        <p className="text-sm text-muted leading-relaxed">{t('products.04.desc')}</p>
      </div>
      <div className="p-6 bg-white hover:bg-surfaceHover transition-colors group">
        <span className="text-4xl font-serif text-border group-hover:text-muted/30 transition-colors">05</span>
        <h3 className="font-serif text-lg text-foreground mt-2 mb-2">{t('products.05.title')}</h3>
        <p className="text-sm text-muted leading-relaxed">{t('products.05.desc')}</p>
      </div>
      <div className="p-6 bg-white hover:bg-surfaceHover transition-colors group">
        <span className="text-4xl font-serif text-border group-hover:text-muted/30 transition-colors">06</span>
        <h3 className="font-serif text-lg text-foreground mt-2 mb-2">{t('products.06.title')}</h3>
        <p className="text-sm text-muted leading-relaxed">{t('products.06.desc')}</p>
      </div>
    </div>
  )
}