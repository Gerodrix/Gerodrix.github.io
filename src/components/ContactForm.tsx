import { useForm } from '@formspree/react'
import { FormEvent, useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { contact } from '../data/contact'

export function ContactForm() {
  const { t } = useLanguage()
  const [state, submitToFormspree] = useForm(contact.formspreeId)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const next: Record<string, string> = {}
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()
    if (!name) next.name = t('required')
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = !email ? t('required') : t('invalidEmail')
    if (!message) next.message = t('required')
    setErrors(next)
    if (Object.keys(next).length) return
    await submitToFormspree(event)
  }
  if (state.succeeded) return <div className="contact-form contact-form--success"><CheckCircle2 size={27} /><h3>{t('success')}</h3><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
  return <form className="contact-form" onSubmit={submit} noValidate><div className="form-grid"><label>{t('name')}<input name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} />{errors.name && <small>{errors.name}</small>}</label><label>{t('email')}<input type="email" name="email" autoComplete="email" aria-invalid={Boolean(errors.email)} />{errors.email && <small>{errors.email}</small>}</label></div><label>{t('subject')}<input name="subject" /></label><label>{t('message')}<textarea name="message" rows={5} aria-invalid={Boolean(errors.message)} />{errors.message && <small>{errors.message}</small>}</label><button className="button button--dark" disabled={state.submitting}>{state.submitting ? t('sending') : <>{t('send')} <ArrowRight size={17} /></>}</button>{state.errors && <p className="form-message">{t('error')}</p>}</form>
}
